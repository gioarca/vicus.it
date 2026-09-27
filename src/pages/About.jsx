// import { motion } from "framer-motion";

// // Animazioni
// const fadeInUp = {
//   initial: { opacity: 0, y: 20 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
//   viewport: { once: true, margin: "-100px" },
// };

// const staggerContainer = {
//   initial: {},
//   whileInView: { transition: { staggerChildren: 0.1 } },
// };

// export default function About() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <motion.div
//           className="absolute inset-0 z-0"
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.5 }}
//         >
//           <img
//             src="https://images.unsplash.com/photo-1499678329028-101435549a4e?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXRhbGlhfGVufDB8fDB8fHwy"
//             alt="Panorama italiano con borgo storico"
//             className="w-full h-full object-cover absolute inset-0 bg-opacity-60 bg-transparent"
//             loading="eager"
//             onError={(e) => {
//               console.log("Errore caricamento immagine:", e.target.src);
//               e.target.style.display = "none";
//               e.target.parentElement.style.background =
//                 "linear-gradient(135deg, #7c2d12 0%, #991b1b 100%)";
//             }}
//           />
//           <div />
//         </motion.div>
//         <motion.div
//           className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//             Benvenut*!
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 opacity-90">
//             Immergiti nella magia dei piccoli centri storici italiani, dove ogni
//             pietra racconta una storia millenaria e ogni vicolo nasconde tesori
//             autentici da scoprire.
//           </p>
//           <button>
//             <a
//               href="/#contact"
//               className="inline-block bg-red-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
//             >
//               Scopri di più su VICUS
//             </a>
//           </button>
//         </motion.div>
//       </section>

//       {/* Cos'è VICUS */}
//       <section className="py-20 px-4">
//         <motion.div
//           className="text-center mb-20"
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="whileInView"
//         >
//           <motion.h2
//             className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
//             variants={fadeInUp}
//           >
//             Cos'è VICUS?
//           </motion.h2>
//           <div className="max-w-4xl mx-auto space-y-6">
//             <motion.p className="text-xl text-gray-700" variants={fadeInUp}>
//               Una piattaforma che collega giovani professionisti nel digitale,
//               creativi, sviluppatori e digital marketers con una missione
//               chiara:
//             </motion.p>
//             <motion.p
//               className="text-3xl font-bold text-terra"
//               variants={fadeInUp}
//             >
//               riscoprire il SUD, viverlo, lavorarci.
//             </motion.p>
//           </div>
//         </motion.div>

//         {/* Immagine Evocativa */}
//         <motion.div
//           className="max-w-4xl mx-auto mb-20"
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <img
//             src="https://images.unsplash.com/photo-1627023851505-2f44e73b30eb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Borgo medievale italiano immerso tra le colline verdi"
//             className="w-full h-auto rounded-2xl shadow-2xl"
//           />
//         </motion.div>

//         {/* Features */}
//         <motion.div
//           className="grid md:grid-cols-2 gap-16 mb-20"
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="whileInView"
//         >
//           {/* Remote Workers */}
//           <motion.div
//             className="bg-gray-50 rounded-2xl p-8 md:p-12"
//             variants={fadeInUp}
//           >
//             <h3 className="text-2xl md:text-3xl font-bold mb-8">
//               Per remote workers e freelancers
//             </h3>
//             <div className="space-y-4">
//               <div className="flex items-start space-x-4">
//                 <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0" />
//                 <p className="text-gray-700">
//                   Spazi di coworking attrezzati: dove produttività e relax si
//                   incontrano.
//                 </p>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0" />
//                 <p className="text-gray-700">
//                   Connessioni veloci: per lavorare ovunque senza compromessi.
//                 </p>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0" />
//                 <p className="text-gray-700">
//                   Esperienze autentiche: dalla cucina locale ai tour culturali,
//                   vivi il borgo come un abitante.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Experiences */}
//           <motion.div
//             className="bg-red-50 rounded-2xl p-8 md:p-12"
//             variants={fadeInUp}
//           >
//             <h3 className="text-2xl md:text-3xl font-bold mb-8">
//               Per un weekend lungo, un mese o solo un'esperienza unica
//             </h3>
//             <div className="space-y-4">
//               <div className="flex items-start space-x-4">
//                 <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0" />
//                 <p className="text-gray-700">
//                   Trova alloggi accessibili e immersi nella storia.
//                 </p>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0" />
//                 <p className="text-gray-700">
//                   Abbraccia uno stile di vita più slow, senza rinunciare al
//                   comfort moderno.
//                 </p>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0" />
//                 <p className="text-gray-700">
//                   Scopri borghi selezionati per qualità della vita, bellezza e
//                   servizi.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* USP Cards */}
//         <motion.div
//           className="text-center mb-20"
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="whileInView"
//         >
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold mb-12 text-gray-900"
//             variants={fadeInUp}
//           >
//             Perché VICUS è il tuo match perfetto?
//           </motion.h2>
//           <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
//             <motion.div
//               className="p-6 bg-white rounded-xl shadow-md"
//               variants={fadeInUp}
//             >
//               <h3 className="text-xl font-bold mb-4">
//                 Una community di visionari
//               </h3>
//               <p>
//                 Professionisti e lavoratori da remoto che condividono il
//                 desiderio di un cambiamento reale.
//               </p>
//             </motion.div>
//             <motion.div
//               className="p-6 bg-white rounded-xl shadow-md"
//               variants={fadeInUp}
//             >
//               <h3 className="text-xl font-bold mb-4">Un pacchetto completo</h3>
//               <p>
//                 Coworking, alloggi, esperienze e supporto in un'unica
//                 piattaforma.
//               </p>
//             </motion.div>
//             <motion.div
//               className="p-6 bg-white rounded-xl shadow-md"
//               variants={fadeInUp}
//             >
//               <h3 className="text-xl font-bold mb-4">
//                 Vita autentica e connessioni genuine
//               </h3>
//               <p>
//                 Scopri la cultura locale, partecipa ad eventi e incontra altre
//                 persone con interessi comuni (o diversi)! 😉
//               </p>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Call to Action Finale */}
//         <motion.div
//           className="bg-gradient-to-r from-red-800 to-red-900 rounded-3xl p-8 md:p-16 text-center text-white"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           <h2 className="text-3xl md:text-5xl font-bold mb-6">
//             Ti immagini qui?
//           </h2>
//           <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
//             Svegliati con la vista sulle colline, lavora in un coworking di
//             design e concludi la giornata gustando i sapori autentici del borgo.
//             Questo è VICUS: il tuo stile di vita ideale.
//           </p>
//           <a href="/#contact">
//             <button className="bg-white text-red-800 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
//               Cambia il tuo stile di vita
//             </button>
//           </a>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { motion, MotionConfig } from "framer-motion";
import {
  ArrowTrendingDownIcon,
  HomeModernIcon,
  ComputerDesktopIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

/**
 * Pagina Chi siamo — unione delle due versioni di About.
 * Testi originali, stile della home: titoli bold, card con ombra,
 * bottoni a pillola, fasce terra. Palette: terra + gray.
 */

const IMG = {
  hero: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?q=80&w=1800&auto=format&fit=crop",
  borgo:
    "https://images.unsplash.com/photo-1627023851505-2f44e73b30eb?q=80&w=1600&auto=format&fit=crop",
  coworking:
    "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=1400&auto=format&fit=crop",
};

const STATISTICHE = [
  {
    Icona: ArrowTrendingDownIcon,
    stat: "700.000",
    label: "Abitanti persi dalle aree interne in 10 anni",
    source: "ISTAT 2024",
    link: "https://www.spazio50.org/borghi-italiani-in-declino-700mila-abitanti-persi-in-dieci-anni/",
  },
  {
    Icona: HomeModernIcon,
    stat: "136 borghi",
    label: "Completamente abbandonati in Italia",
    source: "Planet B 2024",
    link: "https://planetb.it/borghi-abbandonati-censimento-di-unitalia-che-sta-scomparendo/",
  },
  {
    Icona: ComputerDesktopIcon,
    stat: "3,55 milioni",
    label: "Remote worker italiani nel 2024",
    source: "Politecnico Milano",
    link: "https://www.osservatori.net/it/ricerche/comunicati-stampa/smart-working-italia-numeri-trend",
  },
];

const RISPOSTA = [
  "Fibra ottica e connettività garantita",
  "Alloggi ristrutturati e scelti con cura",
  "Esperienze culturali autentiche",
  "Network di professionisti selezionati",
];

const PER_CHI = [
  {
    titolo: "Per remote worker e freelance",
    punti: [
      "Spazi di coworking attrezzati: dove produttività e relax si incontrano.",
      "Connessioni veloci: per lavorare ovunque senza compromessi.",
      "Esperienze autentiche: dalla cucina locale ai tour culturali, vivi il borgo come un abitante.",
    ],
  },
  {
    titolo: "Per un weekend lungo, un mese o solo un'esperienza unica",
    punti: [
      "Trova alloggi accessibili e immersi nella storia.",
      "Abbraccia uno stile di vita più slow, senza rinunciare al comfort moderno.",
      "Scopri borghi selezionati per qualità della vita, bellezza e servizi.",
    ],
  },
];

const PASSI = [
  {
    step: "01",
    title: "Selezione",
    description:
      "Scegliamo borghi con criteri specifici: connessione e logistica semplici",
  },
  {
    step: "02",
    title: "Infrastruttura",
    description: "Installiamo tecnologia e/o riqualifichiamo spazi",
  },
  {
    step: "03",
    title: "Comunità",
    description:
      "Lavoriamo accanto alle amministrazioni e creiamo il matching tra professionisti e borgo",
  },
  {
    step: "04",
    title: "Crescita",
    description: "Monitoriamo l'impatto sul luogo e ottimizziamo l'ecosistema",
  },
];

const PERCHE_ORA = [
  {
    title: "Il remote work è la norma",
    text: "3,55 milioni di lavoratori in Italia fanno smart working nel 2024. Il 73% si opporrebbe se l'azienda lo eliminasse. Non serve più stare in città.",
    source: "Osservatorio Smart Working Politecnico Milano 2024",
    link: "https://www.osservatori.net/it/ricerche/comunicati-stampa/smart-working-italia-numeri-trend",
  },
  {
    title: "PNRR: 1 miliardo per i borghi",
    text: "Il Piano Nazionale Borghi destina oltre 1 miliardo di euro per rigenerare 250 borghi italiani. È il momento giusto per investire.",
    source: "Ministero della Cultura - PNRR",
    link: "https://pnrr.cultura.gov.it/misura-2-rigenerazione-di-piccoli-siti-culturali-patrimonio-culturale-religioso-e-rurale/2-1-attrattivita-dei-borghi/",
  },
  {
    title: "Il 93% dei nomadi vuole i borghi",
    text: "Il 93% dei nomadi digitali intervistati vuole soggiornare nei piccoli comuni italiani, cercando qualità della vita e autenticità.",
    source: "Associazione Italiana Nomadi Digitali 2023",
    link: "https://www.nomadidigitali.org/",
  },
  {
    title: "341 comuni senza nascite",
    text: "Nel 2023, 341 comuni italiani non hanno registrato nemmeno una nascita. Tra 10 anni molti borghi saranno irrecuperabili.",
    source: "ISTAT 2024",
    link: "https://drive.google.com/file/d/1ENls-X9CcmW5wN8AMSmvSQd-W_2mLSfP/view?usp=sharing",
  },
];

const TEAM = [
  {
    nome: "Giorgio",
    ruolo: "CEO & Founder",
    foto: "https://res.cloudinary.com/dzoceyg2u/image/upload/v1780321022/IMG_4192_jsqapx.jpg",
    bio: "Formazione in meccatronica e master all'HFarm College. Ha attraversato il manifatturiero come Sales Engineer prima di approdare al turismo e all'innovazione digitale — tre anni a Berlino, visione internazionale, operatività concreta. Cresciuto tra il mare e i borghi dell'Italia interna, porta in Vicus rigore tecnico, orientamento commerciale e la convinzione diretta che si possa lavorare bene ovunque, a patto di scegliere il contesto giusto.",
  },
  {
    nome: "Laura",
    ruolo: "Operations Manager",
    foto: "https://res.cloudinary.com/dzoceyg2u/image/upload/v1780320617/laura.png",
    bio: "Oltre 10 anni nell'hospitality internazionale, 7 dei quali nel Regno Unito in strutture di fascia alta — tra cui il ruolo di Reception Manager al Park Plaza di Nottingham (gruppo Radisson). Originaria di Ischia, conosce il territorio campano dall'interno e il servizio di livello dall'alto. In Vicus presidia l'intera esperienza cliente: dall'onboarding alla gestione on-site, garantendo gli standard operativi che tengono fede al posizionamento del brand.",
  },
];

const FONTI = [
  [
    "Spopolamento borghi",
    'Legambiente "Borghi Avvenire" 2024, ISTAT, Planet B',
  ],
  ["Smart working", "Osservatorio Smart Working Politecnico Milano 2024"],
  ["Nomadi digitali", "Associazione Italiana Nomadi Digitali 2023"],
  ["PNRR Borghi", "Ministero della Cultura - Piano Nazionale Borghi"],
];

// ─── Stili condivisi ──────────────────────────────────────────────────────────
const kicker = "text-xs font-semibold uppercase tracking-[0.14em] text-terra";
const h2 =
  "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl";
const linkFonte =
  "text-xs text-gray-500 underline underline-offset-2 transition-colors hover:text-terra";

function Reveal({ children, className, delay = 0, from = "bottom" }) {
  const offset = { bottom: { y: 30 }, left: { x: -40 }, right: { x: 40 } }[
    from
  ];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function FasciaTerra({ children, className = "" }) {
  return (
    <section
      className={`relative isolate overflow-hidden bg-terra text-white ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute -left-24 -top-24 -z-10 h-80 w-80 rounded-full bg-white/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-16 -z-10 h-96 w-96 rounded-full bg-black/20 blur-3xl"
      />
      {children}
    </section>
  );
}

export default function About() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-x-clip bg-white">
        <title>Chi siamo — Vicus</title>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative isolate flex min-h-[80svh] items-center justify-center overflow-hidden px-4 pb-16 pt-32 text-center sm:px-6">
          <motion.img
            src={IMG.hero}
            alt=""
            width="1800"
            height="1200"
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          {/* Velo scuro: il testo bianco resta leggibile su qualsiasi foto */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/45 to-black/65" />

          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
              Chi siamo
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
              Non salviamo borghi.
              <br />
              <span className="text-[#f3b7a8]">Creiamo ecosistemi.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl md:text-2xl">
              Il primo progetto italiano che unisce remote work, slow living e
              rigenerazione territoriale
            </p>
          </motion.div>
        </section>

        {/* ── Cos'è Vicus ──────────────────────────────────────────────── */}
        <section className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-5xl">
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2 className={h2}>Cos'è Vicus?</h2>
              <p className="mt-6 text-xl leading-relaxed text-gray-700">
                Una piattaforma che collega giovani professionisti nel digitale,
                creativi, sviluppatori e digital marketer con una missione
                chiara:
              </p>
              <p className="mt-4 text-3xl font-bold text-terra">
                riscoprire il SUD, viverlo, lavorarci.
              </p>
            </Reveal>

            <Reveal className="mt-14">
              <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100 shadow-2xl">
                <img
                  src={IMG.borgo}
                  alt="Borgo medievale italiano immerso tra le colline verdi"
                  width="1600"
                  height="900"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Il paradosso italiano ────────────────────────────────────── */}
        <section className="bg-gray-50 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2 className={h2}>Il paradosso italiano</h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl md:text-2xl">
                L'Italia è composta da{" "}
                <span className="font-bold text-terra">quasi 8.000 comuni</span>{" "}
                e il 72% conta meno di 5.000 abitanti.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600 sm:text-xl md:text-2xl">
                <span className="font-bold text-terra">
                  5.627 di questi sono a grave rischio abbandono
                </span>
                .
              </p>
              <p className="mt-3 text-sm text-gray-500">
                Fonte:{" "}
                <a
                  href="https://www.buonenotizie.it/societa/2022/02/21/borghi-italiani-e-spopolamento-come-intervenire/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkFonte}
                >
                  Legambiente 2024
                </a>
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
              {STATISTICHE.map(({ Icona, ...s }, i) => (
                <Reveal
                  key={s.stat}
                  delay={i * 0.1}
                  className="rounded-2xl border-t-4 border-terra bg-white p-8 text-center shadow-lg"
                >
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-terra/10 text-terra">
                    <Icona className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-3xl font-bold text-terra">{s.stat}</p>
                  <p className="mt-2 font-medium text-gray-700">{s.label}</p>
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-3 inline-block ${linkFonte}`}
                  >
                    {s.source}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── La nostra risposta ───────────────────────────────────────── */}
        <section className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2 className={h2}>La nostra risposta</h2>
              <p className="mt-6 text-lg text-gray-600 sm:text-xl">
                Non basta "riqualificare". Serve un{" "}
                <span className="font-bold text-terra">
                  ecosistema completo
                </span>{" "}
                che integri lavoro, vita, cultura e benessere.
              </p>
            </Reveal>

            <div className="mt-14 grid items-center gap-10 md:grid-cols-2 md:gap-14">
              <Reveal from="left">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-2xl">
                  <img
                    src={IMG.coworking}
                    alt="Coworking in borgo"
                    width="1400"
                    height="1050"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>

              <Reveal from="right">
                <h3 className="text-2xl font-bold text-gray-900">
                  Luogo + tecnologia + community = Vicus
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                  Selezioniamo borghi strategici, spazi di coworking e
                  co-living, installiamo infrastrutture digitali di livello
                  enterprise e infine costruiamo una comunità di professionisti
                  che vogliono vivere diversamente.
                </p>
                <ul className="mt-6 space-y-3">
                  {RISPOSTA.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terra text-white">
                        <CheckIcon
                          className="h-4 w-4"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="font-medium text-gray-700">{r}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Per chi è (dalla prima versione) */}
            <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
              {PER_CHI.map((b, i) => (
                <Reveal
                  key={b.titolo}
                  delay={i * 0.1}
                  className={`rounded-2xl p-8 md:p-10 ${i === 0 ? "bg-gray-50" : "bg-terra/5"}`}
                >
                  <h3 className="text-2xl font-bold text-gray-900">
                    {b.titolo}
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {b.punti.map((p) => (
                      <li key={p} className="flex items-start gap-4">
                        <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-terra" />
                        <span className="text-gray-700">{p}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Come funziona ────────────────────────────────────────────── */}
        <FasciaTerra className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                Come funziona
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-white/85 sm:text-xl">
                Un processo semplice e trasparente
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
              {PASSI.map((p, i) => (
                <Reveal
                  key={p.step}
                  delay={i * 0.1}
                  className="rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-md transition-colors duration-300 hover:bg-white/15"
                >
                  <p className="text-5xl font-bold text-white/40">{p.step}</p>
                  <h3 className="mt-4 text-2xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-white/85">{p.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </FasciaTerra>

        {/* ── Perché proprio ora ───────────────────────────────────────── */}
        <section className="bg-gray-50 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal className="text-center">
              <h2 className={h2}>Perché proprio ora</h2>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 sm:gap-8">
              {PERCHE_ORA.map((c, i) => (
                <Reveal
                  key={c.title}
                  delay={(i % 2) * 0.1}
                  className="rounded-2xl border-l-4 border-terra bg-white p-8 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-gray-700">{c.text}</p>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 inline-block ${linkFonte}`}
                  >
                    Fonte: {c.source}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Il team ──────────────────────────────────────────────────── */}
        <section className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className={kicker}>Il nostro team</p>
              <h2 className={`mt-3 ${h2}`}>Chi siamo</h2>
              <p className="mt-6 text-lg text-gray-600 sm:text-xl">
                Un team di professionisti che ha scelto di mettere competenze e
                passione al servizio del territorio
              </p>
            </Reveal>

            <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2">
              {TEAM.map((t, i) => (
                <Reveal key={t.nome} delay={i * 0.1}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
                    <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                      <img
                        src={t.foto}
                        alt={`${t.nome}, ${t.ruolo} di Vicus`}
                        width="800"
                        height="1000"
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 p-7 text-center">
                      <h3 className="text-xl font-bold text-gray-900">
                        {t.nome}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-terra">
                        {t.ruolo}
                      </p>
                      <p className="mt-4 text-left text-sm leading-relaxed text-gray-600">
                        {t.bio}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mx-auto mt-12 max-w-4xl rounded-2xl bg-gray-50 p-8 md:p-12">
              <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                Siamo nati dall'esperienza diretta di voler valorizzare il
                territorio. Ma ci siamo scontrati con mille problemi: Wi-Fi
                inesistente, alloggi inadeguati e mancanza di comunità.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                Così abbiamo deciso di creare{" "}
                <span className="font-bold text-terra">
                  quello che avremmo voluto trovare
                </span>
                : un ecosistema completo, curato, funzionante. Non
                improvvisazione, ma un progetto strutturato che unisce
                rigenerazione territoriale, sviluppo economico e qualità della
                vita.
              </p>
              <blockquote className="mt-8 rounded-xl bg-terra p-6 text-lg font-semibold italic text-white shadow-lg shadow-terra/20">
                “Crediamo che il futuro dell'Italia passi dai suoi piccoli
                comuni. E siamo qui per dimostrarlo, un borgo alla volta.”
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* ── Radio ────────────────────────────────────────────────────── */}
        <section className="bg-gray-900 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-4xl">
            <Reveal className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Siamo stati in radio!
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-300 sm:text-xl">
                Guarda l'intervista rilasciata dal founder per ascoltare la
                storia del progetto e il potenziale dei piccoli comuni italiani
              </p>
            </Reveal>
            <Reveal className="mt-12">
              <div className="aspect-video overflow-hidden rounded-2xl bg-black shadow-2xl">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/Zv6JubXNAkg"
                  title="La rinascita dei borghi italiani"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── CTA finale ───────────────────────────────────────────────── */}
        <FasciaTerra className="px-4 py-20 text-center sm:px-6 md:py-28">
          <Reveal className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Pronto a cambiare?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/90 md:text-2xl">
              Non è solo una vacanza. Non è solo lavoro da remoto.
              <br />È il tuo nuovo stile di vita nei borghi più belli d'Italia.
            </p>
            <Link
              to="/iscriviti"
              className="mt-10 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-8 py-4 text-base font-bold text-terra shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-terra sm:w-auto sm:px-12 sm:text-lg"
            >
              Entra nell'ecosistema <span aria-hidden="true">→</span>
            </Link>
            <p className="mt-8 text-sm text-white/80">
              Posti limitati · Primi borghi in apertura nel 2026
            </p>
          </Reveal>
        </FasciaTerra>

        {/* ── Fonti ────────────────────────────────────────────────────── */}
        <section className="bg-gray-50 px-4 py-14 sm:px-6">
          <Reveal className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="text-center text-xl font-bold text-gray-900 sm:text-2xl">
              Fonti e riferimenti
            </h2>
            <p className="mt-2 text-center text-gray-600">
              Tutti i dati presentati provengono da fonti ufficiali e
              verificabili
            </p>
            <dl className="mt-6 space-y-3 text-sm">
              {FONTI.map(([tema, fonte]) => (
                <div key={tema} className="border-l-4 border-terra py-1.5 pl-4">
                  <dt className="inline font-bold text-gray-900">{tema}: </dt>
                  <dd className="inline text-gray-700">{fonte}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-center text-xs text-gray-500">
              Per maggiori informazioni e approfondimenti, consulta i link
              presenti nella pagina
            </p>
          </Reveal>
        </section>
      </main>
    </MotionConfig>
  );
}
