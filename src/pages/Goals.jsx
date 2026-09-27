import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, MotionConfig } from "framer-motion";

/**
 * Pagina Obiettivi — stesso stile della home: titoli bold, card con ombra,
 * bottoni a pillola, palette terra + gray.
 *
 * Icone ufficiali ONU (versione italiana, UNRIC). Consiglio: scaricarle in
 * /public/sdg/ e cambiare gli src, così non dipendi da un server esterno.
 */

const SDG_BASE =
  "https://e4k4c4x9.delivery.rocketcdn.me/it/wp-content/uploads/sites/3/2019/03";

const OBIETTIVI = [
  {
    sdg: 8,
    immagine: `${SDG_BASE}/SDG-icon-IT-RGB-08.jpg`,
    nome: "Lavoro dignitoso e crescita economica",
    titolo: "Lavoro che resta nel borgo",
    testo:
      "Chi ospita, chi cucina, chi accompagna: ogni ritiro dà lavoro a chi nel borgo ci vive. Vogliamo che quello che un team porta con sé resti lì, anche dopo la partenza.",
  },
  {
    sdg: 9,
    immagine: `${SDG_BASE}/SDG-icon-IT-RGB-09.jpg`,
    nome: "Imprese, innovazione e infrastrutture",
    titolo: "Borghi dove si lavora davvero",
    testo:
      "Una buona connessione, un tavolo luminoso, un caffè in piazza. Un borgo può essere un posto dove lavorare bene, non solo dove passare le vacanze.",
  },
  {
    sdg: 10,
    immagine: `${SDG_BASE}/SDG-icon-IT-RGB-10.jpg`,
    nome: "Ridurre le disuguaglianze",
    titolo: "Meno distanza tra città e paesi",
    testo:
      "Le città si riempiono, i paesi si svuotano. Portare persone, idee e lavoro nei piccoli comuni è il nostro modo di accorciare questa distanza.",
  },
];

const kicker = "text-xs font-semibold uppercase tracking-[0.14em] text-terra";

function Reveal({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Icona ONU con ripiego: se l'immagine non carica, mostra il numero.
function IconaSdg({ sdg, src, nome }) {
  const [errore, setErrore] = useState(false);

  if (errore) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-terra/10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-terra text-2xl font-bold text-white">
          {sdg}
        </span>
        <span className="mt-3 px-4 text-sm font-semibold text-gray-700">
          {nome}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`Obiettivo ONU ${sdg}: ${nome}`}
      width="400"
      height="400"
      loading="lazy"
      onError={() => setErrore(true)}
      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
    />
  );
}

function Goals() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-x-clip bg-white">
        <title>Obiettivi</title>

        <section className="bg-gray-50 px-4 pb-20 pt-32 md:pb-28 md:pt-40">
          <div className="mx-auto max-w-6xl">
            {/* ── Intestazione ───────────────────────────────────────── */}
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className={kicker}>Obiettivi</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                I nostri obiettivi
              </h1>
              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-terra" />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Vicus nasce per riportare lavoro e vita nei piccoli borghi.
                Questi sono gli obiettivi dell'Agenda 2030 dell'ONU a cui
                vogliamo dare il nostro contributo, un borgo alla volta.
              </p>
            </Reveal>

            {/* ── Card obiettivi ─────────────────────────────────────── */}
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {OBIETTIVI.map((o, i) => (
                <Reveal key={o.sdg} delay={i * 0.12}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="p-6 pb-0">
                      <div className="aspect-square overflow-hidden rounded-xl bg-gray-50">
                        <IconaSdg sdg={o.sdg} src={o.immagine} nome={o.nome} />
                      </div>
                    </div>

                    <div className="flex flex-1 gap-4 p-6">
                      <div className="w-1.5 shrink-0 rounded-full bg-terra" />
                      <div>
                        <h2 className="text-xl font-bold leading-snug text-gray-900">
                          {o.titolo}
                        </h2>
                        <p className="mt-2 leading-relaxed text-gray-600">
                          {o.testo}
                        </p>
                      </div>
                    </div>

                    <div className="h-1 origin-left scale-x-0 bg-terra transition-transform duration-500 group-hover:scale-x-100" />
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mx-auto mt-16 max-w-xl text-center">
              <p className="text-lg italic leading-relaxed text-gray-600">
                Siamo all'inizio. I primi risultati li racconteremo qui, borgo
                per borgo.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────── */}
        <section className="relative isolate overflow-hidden bg-terra px-6 py-20 text-center text-white md:py-24">
          <div
            aria-hidden="true"
            className="absolute -left-24 -top-24 -z-10 h-80 w-80 rounded-full bg-white/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -right-16 -z-10 h-96 w-96 rounded-full bg-black/15 blur-3xl"
          />
          <Reveal className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Vuoi far parte del cambiamento?
            </h2>
            <p className="mt-5 text-xl text-white/85">
              Ti scriviamo quando apriamo le prime date.
            </p>
            <Link
              to="/iscriviti"
              className="mt-10 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-8 py-4 text-base font-bold text-terra shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-terra sm:px-10 sm:text-lg"
            >
              Iscriviti alla waitlist <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </section>
      </main>
    </MotionConfig>
  );
}

export default Goals;
