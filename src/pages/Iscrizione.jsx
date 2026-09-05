import { useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/**
 * Blocco iscrizione Vicus — mobile first.
 * Bottone pieno a tutta larghezza, chip per il periodo, aree di tocco ≥ 44px.
 * Va dopo la sezione che spiega come funziona, non in hero.
 */

const PERIODI = ["primavera", "estate", "autunno"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function IscrizioneVicus({
  apiUrl = process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://borghi-backend.onrender.com",

  source = "sezione-iscrizione",
  onSuccess,
}) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [periodo, setPeriodo] = useState(null);
  const [errore, setErrore] = useState(null);
  const [stato, setStato] = useState("idle"); // idle | invio | fatto
  const montatoIl = useRef(Date.now());
  const riduciMotion = useReducedMotion();

  const validaEmailAlBlur = () => {
    if (email && !EMAIL_RE.test(email)) {
      setErrore("Controlla l'indirizzo: manca qualcosa dopo la chiocciola.");
    }
  };

  const invia = async () => {
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

    // Senza apiUrl la fetch finirebbe sul dev server di Vite (404):
    // meglio simulare, così la UI resta lavorabile senza backend.
    if (!apiUrl) {
      console.warn("[Vicus] apiUrl assente — invio simulato:", payload);
      await new Promise((r) => setTimeout(r, 600));
      setStato("fatto");
      onSuccess?.(payload);
      return;
    }

    try {
      const res = await fetch(`${apiUrl}/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // 409 = già in lista: per chi si iscrive è una conferma, non un errore.
      if (res.ok || res.status === 409) {
        setStato("fatto");
        onSuccess?.(payload);
        return;
      }

      setStato("idle");
      setErrore(
        res.status === 400
          ? "Qualcosa nei dati non torna. Controlla nome e indirizzo."
          : "Il server non ha risposto come dovrebbe. Riprova tra un momento.",
      );
      console.error("[Vicus] risposta", res.status, await res.text());
    } catch (e) {
      // Rete assente, CORS, o servizio Render addormentato.
      setStato("idle");
      setErrore(
        "Non riusciamo a raggiungere il server. Riprova tra un momento.",
      );
      console.error("[Vicus] fetch fallita:", e);
    }
  };

  const transizione = riduciMotion
    ? { duration: 0 }
    : { duration: 0.35, ease: [0.22, 1, 0.36, 1] };

  // text-base = 16px: sotto i 16px iOS zooma da solo al focus.
  const campo =
    "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3.5 text-base text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900";

  return (
    <section id="iscrizione" className="px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto w-full max-w-lg">
        <AnimatePresence mode="wait" initial={false}>
          {stato !== "fatto" ? (
            <motion.div
              key="form"
              exit={riduciMotion ? {} : { opacity: 0 }}
              transition={transizione}
            >
              <h2 className="text-[22px] font-normal leading-snug tracking-tight text-neutral-900 sm:text-[28px]">
                Ti scriviamo quando apriamo le prime date
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
                Nome e mail, niente altro. Ti arriva un messaggio con i borghi,
                il periodo e come prenotare: chi è in lista sceglie per primo.
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
                Gratuito e senza impegno. Niente newsletter settimanali: ti
                scriviamo solo quando c'è una data.
              </p>

              <p className="mt-3 text-[13px] leading-relaxed text-neutral-400">
                Iscrivendoti ci autorizzi a scriverti per le date di Vicus. I
                dati li trattiamo come spiegato nell'
                <a
                  href="/privacy"
                  className="underline decoration-neutral-300 underline-offset-2 hover:text-neutral-700 hover:decoration-neutral-700"
                >
                  informativa privacy
                </a>
                , non li cediamo a nessuno e puoi cancellarti da ogni messaggio
                o scrivendoci.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="fatto"
              initial={riduciMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={transizione}
              aria-live="polite"
            >
              <h2 className="text-[22px] font-normal leading-snug tracking-tight text-neutral-900 sm:text-[28px]">
                Ci sei, {nome.trim().split(" ")[0]}. Ti scriviamo noi.
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
                Intanto puoi vedere dove dormirai e con chi lavoreremo.
              </p>
              <a
                href="/borghi"
                className="mt-8 inline-flex min-h-13 w-full items-center justify-center rounded-lg border border-neutral-900 px-6 text-[16px] text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 sm:w-auto sm:min-w-55"
              >
                I borghi e le strutture partner
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
