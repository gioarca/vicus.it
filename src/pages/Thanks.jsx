// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import confetti from "canvas-confetti";

// function Thanks() {
//   useEffect(() => {
//     // 🎉 1. Esplosione di confetti all'arrivo sulla pagina
//     confetti({
//       particleCount: 80,
//       spread: 70,
//       origin: { y: 0.6 },
//     });

//     // 📘 2. Tracciamento Meta Pixel "Lead"
//     const trackMetaPixel = () => {
//       if (typeof fbq === "function") {
//         fbq("track", "Lead", {
//           content_name: "Contact Form Submission",
//           content_category: "Lead Generation",
//           value: 10.0,
//           currency: "EUR",
//         });
//         console.log("🔥 Evento Meta Pixel 'Lead' tracciato");
//       } else {
//         console.warn("⚠️ fbq non disponibile. Riprovo tra 500ms...");
//         setTimeout(trackMetaPixel, 500);
//       }
//     };

//     trackMetaPixel();

//     // 🟢 3. Tracciamento tramite Google Tag Manager (dataLayer)

//     // 🐞 4. Log finale per debug
//     console.log("✅ Tutti i tentativi di tracking lead sono stati eseguiti");
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white px-6">
//       <div className="text-center max-w-lg mx-auto space-y-6">
//         {/* Icona SVG animata */}
//         <div className="w-20 h-20 mx-auto mb-2">
//           <svg
//             viewBox="0 0 24 24"
//             className="stroke-green-500"
//             fill="none"
//             strokeWidth={2.5}
//           >
//             <path
//               d="M5 13l4 4L19 7"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="path"
//             />
//           </svg>
//         </div>

//         {/* Titolo */}
//         <h1 className="text-3xl font-extrabold text-gray-800">
//           Grazie per averci contattato!
//         </h1>

//         {/* Messaggio */}
//         <div className="text-gray-600">
//           <p>Il tuo messaggio è stato ricevuto correttamente.</p>
//           <p>Ti risponderemo il prima possibile.</p>
//         </div>

//         {/* Link di ritorno */}
//         <p className="text-sm text-gray-500">
//           Torna alla home cliccando{" "}
//           <Link to="/" className="text-red-500 font-medium hover:underline">
//             qui
//           </Link>{" "}
//           o sul{" "}
//           <Link to="/" className="text-red-500 font-medium hover:underline">
//             logo in alto a sinistra
//           </Link>
//           .
//         </p>
//       </div>

//       {/* SVG draw animation */}
//       <style>
//         {`
//           .path {
//             stroke-dasharray: 100;
//             stroke-dashoffset: 100;
//             animation: draw 0.7s ease-out forwards;
//           }

//           @keyframes draw {
//             to {
//               stroke-dashoffset: 0;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default Thanks;

import { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

// ─── Varianti per provenienza ─────────────────────────────────────────────────
// Chi arriva qui passa `state.origine` con navigate(). Senza origine (URL
// digitato, link esterno) si mostra la variante neutra e non si traccia nulla.
const VARIANTI = {
  contatto: {
    titolo: () => "Grazie per esserti iscritt*!",
    testo: [
      "Il tuo messaggio è stato ricevuto correttamente.",
      "Ti risponderemo il prima possibile.",
    ],
    cta: { to: "/", label: "Torna alla home" },
    pixel: {
      content_name: "Contact Form Submission",
      content_category: "Lead Generation",
      value: 10.0,
      currency: "EUR",
    },
  },
  waitlist: {
    titolo: (nome) =>
      nome ? `Ci sei, ${nome}. Ti scriviamo noi.` : "Ci sei. Ti scriviamo noi.",
    testo: [
      "Appena apriamo le prime date ti arriva un messaggio: chi è in lista sceglie per primo.",
    ],
    cta: { to: "/", label: "Torna alla home" },
    pixel: {
      content_name: "Waitlist Signup",
      content_category: "Waitlist",
    },
  },
  neutra: {
    titolo: () => "Grazie!",
    testo: [],
    cta: { to: "/", label: "Torna alla home" },
    pixel: null,
  },
};

const FBQ_MAX_TENTATIVI = 10; // 10 × 500 ms = 5 s, poi si rinuncia
const FBQ_INTERVALLO_MS = 500;

function Thanks() {
  const location = useLocation();
  const navigate = useNavigate();
  const giaEseguito = useRef(false); // protegge dal doppio effetto di StrictMode

  const state = location.state ?? {};
  const variante = VARIANTI[state.origine] ?? VARIANTI.neutra;
  const nome = state.nome?.trim().split(/\s+/)[0];

  useEffect(() => {
    // Si festeggia e si traccia una sola volta per invio: non su refresh,
    // non tornando indietro, non se l'URL viene aperto direttamente.
    if (giaEseguito.current || !state.origine || state.tracciato) return;
    giaEseguito.current = true;

    // Segna l'entry della history come già tracciata (sopravvive al refresh).
    navigate(location.pathname, {
      replace: true,
      state: { ...state, tracciato: true },
    });

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      disableForReducedMotion: true,
    });

    // Invii segnalati dall'anti-bot: niente conversione.
    if (state.sospetto || !variante.pixel) return;

    let tentativi = 0;
    let timer;
    const tracciaLead = () => {
      if (typeof window.fbq === "function") {
        window.fbq("track", "Lead", variante.pixel);
        return;
      }
      // fbq assente: adblock o consenso cookie non dato. Riprova, ma non all'infinito.
      if (++tentativi < FBQ_MAX_TENTATIVI) {
        timer = setTimeout(tracciaLead, FBQ_INTERVALLO_MS);
      } else if (import.meta.env.DEV) {
        console.warn("[Thanks] fbq non disponibile, evento Lead non inviato.");
      }
    };
    tracciaLead();

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- deve girare solo all'arrivo
  }, []);

  return (
    <div className="flex min-h-[70dvh] items-center justify-center bg-white px-6 py-16">
      {/* React 19 sposta questi tag nel <head> */}
      <title>Grazie — Vicus</title>
      <meta name="robots" content="noindex, nofollow" />

      <div className="mx-auto max-w-lg space-y-6 text-center">
        <div className="mx-auto mb-2 h-20 w-20" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            className="stroke-neutral-900"
            fill="none"
            strokeWidth={2.5}
          >
            <path
              d="M5 13l4 4L19 7"
              pathLength="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="thanks-check"
            />
          </svg>
        </div>

        <h1 className="text-[26px] font-normal leading-snug tracking-tight text-neutral-900 sm:text-[32px]">
          {variante.titolo(nome)}
        </h1>

        {variante.testo.length > 0 && (
          <div className="space-y-1 text-[15px] leading-relaxed text-neutral-500">
            {variante.testo.map((riga) => (
              <p key={riga}>{riga}</p>
            ))}
          </div>
        )}

        <div className="pt-2">
          <Link
            to={variante.cta.to}
            className="inline-flex min-h-13 w-full items-center justify-center rounded-lg border border-neutral-900 px-6 text-[16px] text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 sm:w-auto sm:min-w-55"
          >
            {variante.cta.label}
          </Link>
        </div>
      </div>

      {/* Disegno della spunta: pathLength=1 → dasharray 1 copre esattamente il tratto */}
      <style>{`
        .thanks-check {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: thanks-draw 0.7s ease-out 0.15s forwards;
        }
        @keyframes thanks-draw { to { stroke-dashoffset: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .thanks-check { animation: none; stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}

export default Thanks;
