import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

// Chiavi EmailJS da .env (stesso service del form contatti, template dedicato)
const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_WAITLIST_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
const EMAILJS_CONFIGURATO = Boolean(
  EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey,
);

// Sotto questa soglia (ms tra montaggio e invio) è quasi certamente un bot.
const MS_MINIMI_UMANO = 2000;

/**
 * Blocco iscrizione Vicus — mobile first.
 * Bottone pieno a tutta larghezza, chip per il periodo, aree di tocco ≥ 44px.
 * Va dopo la sezione che spiega come funziona, non in hero.
 */

const PERIODI = ["primavera", "estate", "autunno", "inverno"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function IscrizioneVicus({
  source = "sezione-iscrizione",
  onSuccess,
}) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [periodo, setPeriodo] = useState(null);
  const [errore, setErrore] = useState(null);
  const [stato, setStato] = useState("idle"); // idle | invio
  const montatoIl = useRef(Date.now());
  const navigate = useNavigate();

  const validaEmailAlBlur = () => {
    if (email && !EMAIL_RE.test(email)) {
      setErrore("Controlla l'indirizzo: manca qualcosa dopo la chiocciola.");
    }
  };

  const invia = async () => {
    if (stato === "invio") return; // evita doppio invio da tasto Invio
    if (nome.trim().length < 2) {
      setErrore("Scrivi come ti chiami, anche solo il nome.");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setErrore("Serve un indirizzo valido per poterti scrivere.");
      return;
    }

    setErrore(null);
    setStato("invio");

    const payload = {
      nome: nome.trim(),
      email: email.trim().toLowerCase(),
      periodo,
      source,
      ms: Date.now() - montatoIl.current,
      privacyVersione: "2026-09", // aggiornala quando cambi l'informativa
    };

    // Senza chiavi EmailJS simuliamo, così la UI resta lavorabile in locale.
    if (!EMAILJS_CONFIGURATO) {
      console.warn(
        "[Vicus] EmailJS non configurato — invio simulato:",
        payload,
      );
      await new Promise((r) => setTimeout(r, 600));
      onSuccess?.(payload);
      navigate("/thanks", {
        state: { origine: "waitlist", nome: payload.nome },
      });
      return;
    }

    // Anti-bot: invio troppo rapido → fingiamo successo senza spedire nulla.
    if (payload.ms < MS_MINIMI_UMANO) {
      navigate("/thanks", { state: { origine: "waitlist", sospetto: true } });
      return;
    }

    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          nome: payload.nome,
          email: payload.email,
          periodo: payload.periodo ?? "non indicato",
          source: payload.source,
          privacy_versione: payload.privacyVersione,
          data_iscrizione: new Date().toLocaleString("it-IT", {
            timeZone: "Europe/Rome",
          }),
        },
        { publicKey: EMAILJS.publicKey },
      );

      onSuccess?.(payload);
      navigate("/thanks", {
        state: { origine: "waitlist", nome: payload.nome },
      });
    } catch (e) {
      // EmailJS rifiuta con { status, text }; senza status = rete assente.
      setStato("idle");
      setErrore(
        e?.status === 429
          ? "Troppe richieste in poco tempo. Riprova tra qualche minuto."
          : e?.status
            ? "Il servizio non ha risposto come dovrebbe. Riprova tra un momento."
            : "Non riusciamo a raggiungere il servizio. Controlla la connessione e riprova.",
      );
      console.error("[Vicus] EmailJS:", e?.status, e?.text ?? e);
    }
  };

  // text-base = 16px: sotto i 16px iOS zooma da solo al focus.
  const campo =
    "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3.5 text-base text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900";

  return (
    <section id="iscrizione" className="px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto w-full max-w-lg">
        <h2 className="text-[22px] font-normal leading-snug tracking-tight text-neutral-900 sm:text-[28px]">
          Ti scriviamo quando apriamo le prime date
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
          Nome e mail, niente altro. Ti arriva un messaggio con i borghi, il
          periodo e come prenotare: chi è in lista sceglie per primo.
        </p>

        <div className="mt-8 space-y-3">
          <div>
            <label htmlFor="nome-vicus" className="sr-only">
              Come ti chiami
            </label>
            <input
              id="nome-vicus"
              type="text"
              autoComplete="given-name"
              enterKeyHint="next"
              placeholder="Come ti chiami"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
                if (errore) setErrore(null);
              }}
              className={campo}
            />
          </div>

          <div>
            <label htmlFor="email-vicus" className="sr-only">
              La tua email
            </label>
            <input
              id="email-vicus"
              type="email"
              inputMode="email"
              autoComplete="email"
              enterKeyHint="done"
              placeholder="nome@esempio.it"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errore) setErrore(null);
              }}
              onBlur={validaEmailAlBlur}
              onKeyDown={(e) => e.key === "Enter" && invia()}
              aria-invalid={!!errore}
              aria-describedby={errore ? "errore-vicus" : undefined}
              className={campo}
            />
          </div>
        </div>

        <fieldset className="mt-7">
          <legend className="text-[13px] text-neutral-500">
            Quando ti piacerebbe partire?
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {PERIODI.map((p) => (
              <button
                key={p}
                type="button"
                aria-pressed={periodo === p}
                onClick={() => setPeriodo(periodo === p ? null : p)}
                className={`min-h-11 rounded-full border px-5 text-[15px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 ${
                  periodo === p
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-300 text-neutral-600 hover:border-neutral-500"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </fieldset>

        <button
          type="button"
          onClick={invia}
          disabled={stato === "invio"}
          className="mt-7 min-h-13 w-full rounded-lg bg-neutral-900 px-6 text-[16px] font-medium text-white transition-colors hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 active:scale-[0.99] disabled:bg-neutral-400 sm:w-auto sm:min-w-55"
        >
          {stato === "invio" ? "Un attimo…" : "Avvisami quando aprite"}
        </button>

        {errore && (
          <p
            id="errore-vicus"
            role="alert"
            className="mt-3 text-[14px] text-red-700"
          >
            {errore}
          </p>
        )}

        <p className="mt-6 text-[13px] leading-relaxed text-neutral-400">
          Gratuito e senza impegno. Niente newsletter settimanali: ti scriviamo
          solo quando c'è una data.
        </p>

        <p className="mt-3 text-[13px] leading-relaxed text-neutral-400">
          Iscrivendoti ci autorizzi a scriverti per le date di Vicus. I dati li
          trattiamo come spiegato nell'
          <a
            href="/privacy"
            className="underline decoration-neutral-300 underline-offset-2 hover:text-neutral-700 hover:decoration-neutral-700"
          >
            informativa privacy
          </a>
          , non li cediamo a nessuno e puoi cancellarti da ogni messaggio o
          scrivendoci.
        </p>
      </div>
    </section>
  );
}
