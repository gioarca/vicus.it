// import { useRef, useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import scrollToSection from "../hooks/utils/scrollToSection";
// import { StarIcon } from "@heroicons/react/20/solid";
// import Form from "../components/Form";

// function Home() {
//   const contactRef = useRef(null);
//   const [location, setLocation] = useState({ hash: "" });

//   // Mock per location hash
//   useEffect(() => {
//     const checkHash = () => {
//       if (window.location.hash === "#contact" && contactRef.current) {
//         setTimeout(() => {
//           scrollToSection(contactRef);
//         }, 100);
//       }
//     };
//     checkHash();
//   }, []);

//   // Definizione delle sezioni con immagini e alt
//   const sections = [
//     {
//       id: "hero",
//       image:
//         "https://images.unsplash.com/photo-1694768096854-fe97551cd445?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       alt: "Borgo italiano tradizionale",
//     },
//     {
//       id: "about",
//       image:
//         "https://images.unsplash.com/photo-1696524274209-6c18e4d0dc91?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       alt: "Casamicciola - Borgo storico",
//     },
//     {
//       id: "features",
//       image:
//         "https://images.unsplash.com/photo-1707232400083-7c2fe027fc02?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       alt: "Pietrapertosa - Borgo medievale",
//     },
//     {
//       id: "cta",
//       image:
//         "https://images.unsplash.com/photo-1650521986932-86bbeded3fc2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       alt: "Melfi - Paesaggio italiano",
//     },
//   ];

//   // Animazione di entrata
//   const fadeInUp = {
//     initial: { opacity: 0, y: 50 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.8, ease: "easeOut" },
//   };

//   return (
//     <motion.div
//       className="min-h-screen bg-white"
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{
//         duration: 0.8,
//         delay: 0.2,
//         ease: [0, 0.71, 0.2, 1.01],
//       }}
//     >
//       {/* Hero Section - Layout side by side */}
//       <div className="px-4 py-36 md:py-20 max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           {/* Sezione Copy - Sinistra */}
//           <div className="text-left">
//             <motion.h1
//               className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900"
//               {...fadeInUp}
//             >
//               Lavora dai borghi più belli d'Italia
//             </motion.h1>

//             <motion.p
//               className="text-lg font-medium text-terra mb-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//             >
//               Smart working + Slow living = La formula perfetta
//             </motion.p>
//             {/*
//             <motion.p
//               className="text-lg text-gray-600 mb-6"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6 }}
//             >
//               Scopri l'Italia autentica lavorando da remoto: WiFi veloce,
//               paesaggi mozzafiato e esperienze che non dimenticherai mai. Tutto
//               organizzato per te.
//             </motion.p> */}

//             <motion.p
//               className="text-lg text-gray-900 font-bold mb-8"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6 }}
//             >
//               💻 Porta il laptop, 🍝 assappora la tradizione, 🏛️ vivi la storia
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.8 }}
//             >
//               <button>
//                 <a
//                   href="/iscriviti"
//                   className="px-10 py-4 text-lg font-semibold bg-terra text-white rounded-full hover:bg-white hover:text-red-800 hover:border-2 hover:border-red-800 transition-all duration-300 focus:shadow-outline focus:outline-none shadow-lg transform hover:scale-105"
//                 >
//                   Inizia la tua avventura →
//                 </a>
//               </button>
//             </motion.div>
//           </div>

//           {/* Sezione Immagine - Destra */}
//           <div className="relative">
//             <motion.div
//               className="w-full h-80 md:h-96 lg:h-[32rem] overflow-hidden rounded-lg shadow-2xl"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//             >
//               <img
//                 src={sections[0].image}
//                 className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700"
//                 alt={sections[0].alt}
//               />
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col">
//         {/* About Section - Copy completamente riscritto */}
//         <section className="relative">
//           <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
//             <motion.div
//               className="bg-white rounded-lg shadow-xl p-8 md:p-12 relative z-10"
//               whileInView={{ opacity: [0, 1], y: [50, 0] }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
//                 Perché scegliere i piccoli comuni italiani?
//               </h2>
//               <p className="text-gray-700 mb-6 text-lg leading-relaxed">
//                 Immagina di aprire il laptop con vista sulle colline toscane, di
//                 fare una pausa caffè in una piazzetta storica con i tuoi
//                 colleghi, di concludere la giornata con una cena tutti insieme
//                 al tramonto.
//                 <strong> Questo è il futuro del lavoro.</strong>
//               </p>
//               <p className="text-gray-700 mb-8 text-lg leading-relaxed">
//                 Vicus trasforma lo smart working in un'avventura: selezioniamo i
//                 luoghi più affascinanti d'Italia, garantiamo connessione
//                 perfetta e organizziamo esperienze uniche che solo i locali
//                 conoscono.
//               </p>
//               <div className="bg-red-50 rounded-lg p-6 mb-8">
//                 <h3 className="text-xl font-bold text-red-800 mb-4">
//                   🎯 La formula magica di Vicus
//                 </h3>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div className="flex items-start space-x-3">
//                     <span className="text-red-600 font-bold">💻</span>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">
//                         Smart Working Perfetto
//                       </h4>
//                       <p className="text-gray-700 text-sm">
//                         Internet veloce garantito, spazi di co-working
//                         attrezzati
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-3">
//                     <span className="text-red-600 font-bold">🏛️</span>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">
//                         Storia Vivente
//                       </h4>
//                       <p className="text-gray-700 text-sm">
//                         Guide locali, tradizioni autentiche, racconti esclusivi
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-3">
//                     <span className="text-red-600 font-bold"> 🍕</span>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">
//                         Sapori Unici
//                       </h4>
//                       <p className="text-gray-700 text-sm">
//                         Cucina tradizionale, prodotti a km 0, cene con i locals
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-3">
//                     <span className="text-red-600 font-bold">👥</span>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">
//                         Community Selezionata
//                       </h4>
//                       <p className="text-gray-700 text-sm">
//                         Professionisti come te, networking spontaneo, amicizie
//                         durature
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="text-center">
//                 <button>
//                   <a
//                     href="/about"
//                     className="px-8 py-3 font-semibold bg-terra text-white rounded-full hover:bg-white hover:text-terra hover:border-2 hover:border-terra transition-all duration-300 focus:shadow-outline focus:outline-none shadow-md"
//                   >
//                     Scopri tutti i dettagli
//                   </a>
//                 </button>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Unique Selling Points - Copy emozionale */}
//         <section className="py-12 md:py-20 bg-gray-50">
//           <div className="max-w-6xl mx-auto px-4">
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               <motion.div
//                 whileInView={{ opacity: [0, 1], x: [-50, 0] }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className="order-2 md:order-1"
//               >
//                 <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
//                   Non è solo un viaggio. È una trasformazione.
//                 </h2>

//                 <div className="space-y-6">
//                   <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600">
//                     <h3 className="text-xl font-bold mb-3 text-gray-900">
//                       🏛️ Diventa protagonista della storia
//                     </h3>
//                     <p className="text-gray-700">
//                       Cammina nelle stesse strade di mercanti medievali, dormi
//                       in palazzi nobiliari, scopri segreti custoditi da
//                       generazioni. Ogni borgo racconta mille storie.
//                     </p>
//                   </div>

//                   <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-600">
//                     <h3 className="text-xl font-bold mb-3 text-gray-900">
//                       🌿 Riconnettiti con la natura
//                     </h3>
//                     <p className="text-gray-700">
//                       Montagne che toccano il cielo, colline che cambiano colore
//                       con le stagioni, tramonti che fermano il tempo. La tua
//                       nuova scrivania ha una vista spettacolare.
//                     </p>
//                   </div>

//                   <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
//                     <h3 className="text-xl font-bold mb-3 text-gray-900">
//                       🥰 Zero stress, massimo risultato
//                     </h3>
//                     <p className="text-gray-700">
//                       Noi organizziamo tutto: transfer, alloggi, esperienze,
//                       networking. Tu devi solo partecipare e goderti ogni
//                       momento.
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div
//                 whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className="order-1 md:order-2"
//               >
//                 <img
//                   src={sections[1].image}
//                   className="w-full h-auto rounded-lg shadow-xl"
//                   alt={sections[1].alt}
//                 />
//                 <p className="mt-4 text-gray-600 text-sm">
//                   Nell'immagine siamo a{" "}
//                   <a
//                     className="text-red-800 text-s"
//                     about="/blank"
//                     href="https://www.google.it/maps/place/80074+Casamicciola+Terme+NA/@40.7447936,13.8906745,14z/data=!3m1!4b1!4m6!3m5!1s0x133b401ca4b834f5:0xeb42065662747f82!8m2!3d40.7491439!4d13.9104975!16zL20vMGduMzMy?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
//                   >
//                     Casamicciola Terme
//                   </a>
//                 </p>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Features Section - Copy orientato all'azione */}
//         <section className="py-12 md:py-20" id="how-it-works">
//           <div className="max-w-6xl mx-auto px-4">
//             <div className="grid md:grid-cols-2 gap-8 items-center">
//               <motion.div
//                 whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <img
//                   src={sections[2].image}
//                   className="w-full h-auto rounded-lg shadow-xl"
//                   alt={sections[2].alt}
//                 />
//                 <p className="mt-4 text-gray-600 text-sm">
//                   Nell'immagine siamo a{" "}
//                   <a
//                     className="text-red-800 text-s"
//                     target="_blank"
//                     href="https://www.google.it/maps/place/85010+Pietrapertosa+PZ/@40.5170306,16.0566963,16z/data=!3m1!4b1!4m6!3m5!1s0x1338e97dbf95c94f:0xdfc5058c704c9bea!8m2!3d40.5180386!4d16.0632886!16zL20vMGRwMmJu?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
//                   >
//                     Pietrapertosa
//                   </a>
//                 </p>
//               </motion.div>

//               <motion.div
//                 whileInView={{ opacity: [0, 1], x: [50, 0] }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
//                   Prenota ora. Parti domani.
//                 </h2>
//                 <p className="text-gray-700 mb-6 text-lg leading-relaxed">
//                   <strong>Basta scuse.</strong> Ogni lunedì che passi in ufficio
//                   è un'opportunità persa di lavorare con vista sui vigneti
//                   toscani o dalle piazzette di Matera. I borghi italiani ti
//                   aspettano, ma i posti sono limitati.
//                 </p>

//                 <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
//                   <h3 className="font-bold text-green-800 mb-2">
//                     ✅ Tutto incluso in 3 click:
//                   </h3>
//                   <div className="space-y-2 text-green-700">
//                     <div>
//                       <strong>1. Scegli</strong> la tua data di partenza
//                     </div>
//                     <div>
//                       <strong>2. Prenota</strong> la tua workation nel borgo che
//                       preferisci
//                     </div>
//                     <div>
//                       <strong>3. Paga</strong> la tua prenotazione in modo
//                       sicuro
//                     </div>
//                   </div>
//                 </div>

//                 <p className="text-gray-700 mb-6 text-lg">
//                   <strong>Noi pensiamo a tutto il resto:</strong> alloggio con
//                   WiFi garantito, workspace attrezzato, esperienze locali
//                   autentiche e un gruppo di professionisti motivati come te.
//                 </p>

//                 <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
//                   <p className="text-red-800 font-semibold flex items-center">
//                     🔥{" "}
//                     <span className="ml-2">
//                       ATTENZIONE: Massimo 10 posti per gruppo
//                     </span>
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Call To Action - Copy persuasivo */}
//         <section className="py-16 md:py-24 bg-red-800 text-white relative overflow-hidden">
//           <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
//             <motion.h2
//               whileInView={{ opacity: [0, 1], y: [30, 0] }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight"
//             >
//               Il tuo ufficio con vista ti sta aspettando
//             </motion.h2>
//             <motion.p
//               whileInView={{ opacity: [0, 1], y: [30, 0] }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="text-xl mb-10 opacity-90"
//             >
//               Non lasciare che un'altra settimana passi dietro alla solita
//               scrivania
//             </motion.p>

//             <div>
//               <button>
//                 <a
//                   href="/#contact"
//                   className="px-12 py-5 text-xl font-bold bg-white text-red-800 rounded-full hover:bg-yellow-400 hover:text-red-900 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none transform hover:scale-105"
//                 >
//                   Prenota il tuo posto ora
//                 </a>
//               </button>
//               <p className="text-sm mt-8 opacity-75">
//                 💳 Pagamento sicuro • 🔄 Cancellazione gratuita fino a 7 giorni
//                 prima
//               </p>
//             </div>
//           </div>

//           <div className="absolute -top-16 -left-16 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-20 z-0"></div>
//         </section>

//         {/* Final Image */}
//         <div className="w-full h-80 md:h-96 lg:h-[32rem] overflow-hidden">
//           <img
//             src={sections[3].image}
//             className="w-full h-full object-cover object-center"
//             alt={sections[3].alt}
//           />
//         </div>
//       </div>

//       {/* Testimonials - Copy autentico */}
//       <section id="reviews" className="py-20 md:py-32 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h1 className="text-4xl font-bold mb-3">
//               Le persone che non vedono l'ora di partire 🥹
//             </h1>
//             <p className="text-gray-600 text-lg">
//               Quando le persone hanno maggiore consapevolezza della vita, noi
//               sappiamo di aver fatto la differenza
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-10">
//             {[
//               {
//                 name: "Marco D.",
//                 job: "E-Commerce Specialist",
//                 location: "Verona",
//                 avatar: "M",
//                 text: "Anche se siamo ancora nella fase pre-lancio, sento già l'energia di Vicus: un'oasi pensata per noi remote worker che vogliamo disconnetterci davvero. Non vedo l'ora di testare gli spazi pensati per ricaricare mente e corpo, lontano dallo schermo ma connessi solo all'essenziale!",
//               },
//               {
//                 name: "Chiara M.",
//                 job: "Marketing Manager",
//                 location: "Milano",
//                 avatar: "C",
//                 text: "Ancora prima della partenza ufficiale, ho già capito che Vicus sarà il mio rifugio ideale: lavoro smart di giorno, detox digitale di sera. Un progetto costruito per chi, come me, lavora da ovunque ma sogna di ritrovare il contatto vero con sé stesso e con gli altri.",
//               },
//               {
//                 name: "Luca B.",
//                 job: "Sales & Marketing",
//                 location: "Mestre",
//                 avatar: "L",
//                 text: "Siamo agli albori di Vicus e già si respira la voglia di cambiare ritmo: per noi remote worker è la promessa di un'esperienza unica, dove il digitale cede il passo al benessere. Non vedo l'ora di unirmi al team e condividere momenti di vita offline, senza perdere un colpo sul lavoro.",
//               },
//             ].map((testimonial, i) => (
//               <div
//                 key={i}
//                 className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-red-600"
//               >
//                 <div className="flex mb-4 justify-center">
//                   {[...Array(5)].map((_, j) => (
//                     <StarIcon
//                       key={j}
//                       className="w-5 h-5 text-yellow-400 fill-current"
//                     />
//                   ))}
//                 </div>
//                 <p className="text-gray-700 mb-6 italic text-center leading-relaxed">
//                   "{testimonial.text}"
//                 </p>
//                 <div className="flex items-center justify-center">
//                   <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center text-white font-bold mr-4">
//                     {testimonial.avatar}
//                   </div>
//                   <div className="text-center">
//                     <div className="font-semibold text-gray-900">
//                       {testimonial.name}
//                     </div>
//                     <div className="text-red-600 text-sm font-medium">
//                       {testimonial.job}
//                     </div>
//                     <div className="text-gray-600 text-xs">
//                       {testimonial.location}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Second CTA - Copy di urgenza */}
//       <section className="py-16 md:py-24 bg-red-800 text-white relative overflow-hidden">
//         <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
//           <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
//             Unisciti a decine di professionisti
//           </h2>
//           <p className="text-xl mb-8 opacity-90">
//             che vogliono trasformare il loro modo di lavorare
//           </p>
//           <p className="text-lg mb-10 opacity-80">
//             🔥 <strong>Non vedi l'ora di partire?</strong> Affrettati per
//             assicurarti il tuo posto alla prossima partenza
//           </p>

//           <a
//             href="/iscriviti"
//             className="inline-block px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-5 text-sm sm:text-base md:text-xl font-bold bg-white text-red-800 rounded-full hover:bg-yellow-400 hover:text-red-900 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none transform hover:scale-105 text-center w-full sm:w-auto"
//           >
//             <span className="block sm:inline">Unisciti alla waitlist</span>
//             <span className="block sm:inline">
//               {" "}
//               (prima che sia troppo tardi)
//             </span>
//           </a>
//         </div>

//         <div className="absolute -top-16 -left-16 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-20 z-0"></div>
//       </section>

//       {/* Contact Section - cancellata il 27.09.2026*/}
//     </motion.div>
//   );
// }

// export default Home;

import { Link } from "react-router-dom";
import { motion, MotionConfig } from "framer-motion";
import {
  BriefcaseIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";

/**
 * Home Vicus — stile originale del sito (titoli bold, bottoni a pillola,
 * card con ombra e bordo laterale, fasce piene), palette unica: terra + gray.
 */

// Foto d'atmosfera (Unsplash). Alt generici: non indicano dove siamo.
const IMG = {
  hero: {
    src: "https://images.unsplash.com/photo-1694768096854-fe97551cd445?q=80&w=1400&auto=format&fit=crop",
    alt: "Case in pietra di un borgo italiano",
  },
  lavoro: {
    src: "https://images.unsplash.com/photo-1696524274209-6c18e4d0dc91?q=80&w=1200&auto=format&fit=crop",
    alt: "Scorcio di un borgo affacciato sul paesaggio",
  },
  borgo: {
    src: "https://images.unsplash.com/photo-1707232400083-7c2fe027fc02?q=80&w=1200&auto=format&fit=crop",
    alt: "Borgo arroccato tra le montagne",
  },
  paesaggio: {
    src: "https://images.unsplash.com/photo-1650521986932-86bbeded3fc2?q=80&w=2000&auto=format&fit=crop",
    alt: "Paesaggio collinare dell'entroterra italiano",
  },
};

const PUBBLICI = [
  {
    Icona: BriefcaseIcon,
    chi: "Se lavori in un'azienda",
    titolo: "Porta il tuo team fuori dall'ufficio",
    testo:
      "Colleghi che vedi solo in call, finalmente nella stessa piazza. Qualche giorno di lavoro vero, in un posto che vi costringe a rallentare e a parlarvi.",
  },
  {
    Icona: ComputerDesktopIcon,
    chi: "Se sei freelance",
    titolo: "Parti con un piccolo gruppo",
    testo:
      "Lavori da solo tutto l'anno. Qui trovi altri professionisti, una connessione verificata e un borgo che ti accoglie come residente, non come turista.",
  },
  {
    Icona: UserGroupIcon,
    chi: "Se ti occupi di persone e HR",
    titolo: "Un ritrovo di team co-progettato",
    testo:
      "Costruiamo il programma con te, sugli obiettivi del team. Alloggi, pasti ed esperienze li forniscono persone del borgo, e a fine anno ti diciamo cosa è rimasto sul territorio.",
  },
];

const VALORI = [
  {
    titolo: "Dentro la storia, non davanti",
    testo:
      "Strade percorse per secoli, mestieri che resistono, racconti custoditi da chi è rimasto. Non li guardi da una vetrina: ci passi le giornate.",
  },
  {
    titolo: "Una scrivania con vista e una connessione vera",
    testo:
      "Colline che cambiano colore con le stagioni, silenzio al posto del traffico. Prima di proporre un borgo verifichiamo sul posto che ci si possa lavorare davvero.",
  },
  {
    titolo: "Il borgo ci guadagna",
    testo:
      "Chi ospita, chi cucina e la guida sono del posto. Ogni anno rendiamo conto di quanto è rimasto sul territorio.",
  },
];

const PASSI = [
  {
    titolo: "Ti iscrivi alla waitlist",
    testo: "Nome e mail, niente altro. Gratuito e senza impegno.",
  },
  {
    titolo: "Ti scriviamo quando apriamo le date",
    testo:
      "Con il borgo, il periodo e il programma. Chi è in lista sceglie per primo.",
  },
  {
    titolo: "Ne parliamo insieme",
    testo:
      "Una chiamata per capire se fa per te o per il tuo team, e costruire il programma su misura.",
  },
];

// Testimonianze reali di chi ha provato la webapp in anteprima.
// Testo invariato. Tenere il consenso scritto alla pubblicazione.
const TESTIMONIANZE = [
  {
    name: "Marco D.",
    job: "E-Commerce Specialist",
    location: "Verona",
    text: "Anche se siamo ancora nella fase pre-lancio, sento già l'energia di Vicus: un'oasi pensata per noi remote worker che vogliamo disconnetterci davvero. Non vedo l'ora di testare gli spazi pensati per ricaricare mente e corpo, lontano dallo schermo ma connessi solo all'essenziale!",
  },
  {
    name: "Chiara M.",
    job: "Marketing Manager",
    location: "Milano",
    text: "Ancora prima della partenza ufficiale, ho già capito che Vicus sarà il mio rifugio ideale: lavoro smart di giorno, detox digitale di sera. Un progetto costruito per chi, come me, lavora da ovunque ma sogna di ritrovare il contatto vero con sé stesso e con gli altri.",
  },
  {
    name: "Luca B.",
    job: "Sales & Marketing",
    location: "Mestre",
    text: "Siamo agli albori di Vicus e già si respira la voglia di cambiare ritmo: per noi remote worker è la promessa di un'esperienza unica, dove il digitale cede il passo al benessere. Non vedo l'ora di unirmi al team e condividere momenti di vita offline, senza perdere un colpo sul lavoro.",
  },
];

// ─── Stili condivisi ──────────────────────────────────────────────────────────
const kicker = "text-xs font-semibold uppercase tracking-[0.14em] text-terra";
const h2 = "text-3xl md:text-4xl font-bold tracking-tight text-gray-900";
const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
const btnTerra = `inline-flex items-center justify-center gap-2 rounded-full bg-terra px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-terra/25 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-terra/30 hover:brightness-95 ${focusRing} focus-visible:ring-terra`;
const btnBordo = `inline-flex items-center justify-center rounded-full border-2 border-gray-200 bg-white px-8 py-[14px] text-lg font-semibold text-gray-800 transition duration-300 hover:border-terra hover:text-terra ${focusRing} focus-visible:ring-terra`;
const btnBianco = `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-8 py-4 text-base font-bold text-terra sm:px-10 sm:text-lg shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl ${focusRing} focus-visible:ring-white focus-visible:ring-offset-terra`;

// Comparsa allo scroll. Con "riduci movimento" attivo, MotionConfig la annulla.
function Reveal({ children, className, delay = 0, from = "bottom" }) {
  const offset = { bottom: { y: 40 }, left: { x: -40 }, right: { x: 40 } }[
    from
  ];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Fascia piena in terra con alone morbido (sostituisce il blob giallo).
function FasciaTerra({ children }) {
  return (
    <section className="relative isolate overflow-hidden bg-terra px-6 py-20 text-white md:py-28">
      <div
        aria-hidden="true"
        className="absolute -left-24 -top-24 -z-10 h-80 w-80 rounded-full bg-white/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-16 -z-10 h-96 w-96 rounded-full bg-black/15 blur-3xl"
      />
      <div className="mx-auto max-w-4xl text-center">{children}</div>
    </section>
  );
}

function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-x-clip bg-white">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-28 md:pb-24 md:pt-32">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-balance text-gray-900 md:text-5xl xl:text-[3.5rem]">
                <span className="block">Lavora da un borgo.</span>
                <span className="block text-terra">
                  Vivilo come chi ci abita.
                </span>
              </h1>
              <p className="mt-6 max-w-md text-lg font-semibold text-gray-800">
                Porta il laptop. Al resto pensano la piazza, la tavola e le
                persone del posto.
              </p>
              <p className="mt-3 max-w-md text-lg leading-relaxed text-gray-600">
                Per chi lavora da remoto, per chi è freelance e per i team che
                vogliono ritrovarsi davvero.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link to="/iscriviti" className={btnTerra}>
                  Iscriviti alla waitlist <span aria-hidden="true">→</span>
                </Link>
                <a href="#how-it-works" className={btnBordo}>
                  Come funziona
                </a>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="h-80 overflow-hidden rounded-2xl bg-gray-100 shadow-2xl md:h-96 lg:h-[32rem]">
                <img
                  src={IMG.hero.src}
                  alt={IMG.hero.alt}
                  width="1400"
                  height="1750"
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Badge flottante */}
              <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-xl sm:left-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-terra/10 text-terra">
                  <WifiIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm leading-tight">
                  <span className="block font-bold text-gray-900">
                    Connessione verificata
                  </span>
                  <span className="text-gray-500">
                    sul posto, prima di partire
                  </span>
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Perché i piccoli comuni + per chi è ──────────────────────── */}
        <section className="px-4 py-12 md:py-20">
          <Reveal className="mx-auto max-w-6xl rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8 md:p-12">
            <p className={kicker}>Per chi è</p>
            <h2 className={`mt-3 ${h2}`}>
              Perché scegliere i piccoli comuni italiani?
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">
              Immagina di aprire il laptop con vista sulle colline, di fare una
              pausa caffè in una piazzetta con i tuoi colleghi, di chiudere la
              giornata con una cena tutti insieme.
            </p>

            <div className="mt-10 grid gap-5 rounded-2xl sm:bg-terra/5 sm:p-5 md:grid-cols-3 md:p-6">
              {PUBBLICI.map(({ Icona, chi, titolo, testo }) => (
                <div
                  key={chi}
                  className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-terra/10"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-terra text-white shadow-md shadow-terra/25">
                    <Icona className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-sm font-semibold text-terra">{chi}</p>
                  <h3 className="mt-1 text-xl font-bold leading-snug text-gray-900">
                    {titolo}
                  </h3>
                  <p className="mt-3 leading-relaxed text-gray-600">{testo}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── Non è solo un viaggio ────────────────────────────────────── */}
        <section className="bg-gray-50 px-4 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <Reveal from="left" className="order-2 md:order-1">
              <h2 className={h2}>Non è solo un viaggio.</h2>
              <div className="mt-8 space-y-5">
                {VALORI.map((v) => (
                  <div
                    key={v.titolo}
                    className="rounded-xl border-l-4 border-terra bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
                  >
                    <h3 className="text-xl font-bold text-gray-900">
                      {v.titolo}
                    </h3>
                    <p className="mt-2 leading-relaxed text-gray-700">
                      {v.testo}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal from="right" className="order-1 md:order-2">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 shadow-xl md:aspect-[4/5]">
                <img
                  src={IMG.lavoro.src}
                  alt={IMG.lavoro.alt}
                  width="1200"
                  height="1500"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Come funziona ────────────────────────────────────────────── */}
        <section id="how-it-works" className="scroll-mt-24 px-4 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <Reveal from="left">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-xl md:aspect-[4/5]">
                <img
                  src={IMG.borgo.src}
                  alt={IMG.borgo.alt}
                  width="1200"
                  height="1500"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal from="right">
              <p className={kicker}>Come funziona</p>
              <h2 className={`mt-3 ${h2}`}>Niente carrello.</h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-700">
                Non vendiamo pacchetti da prenotare in tre clic. Ogni partenza
                la costruiamo insieme, con le persone che vivono nel borgo.
              </p>

              <ol className="mt-8 space-y-4 rounded-xl border-l-4 border-terra bg-terra/5 p-6">
                {PASSI.map((p, i) => (
                  <li key={p.titolo} className="flex gap-4">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-terra text-sm font-bold text-white"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-900">{p.titolo}</h3>
                      <p className="mt-0.5 text-gray-700">{p.testo}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <Link
                to="/iscriviti"
                className={`mt-8 w-full sm:w-auto ${btnTerra}`}
              >
                Iscriviti alla waitlist <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ── Fascia impatto ───────────────────────────────────────────── */}
        <FasciaTerra>
          <Reveal>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Ogni giornata di lavoro in un borgo è spesa che resta nel borgo.
            </h2>
            <p className="mt-6 text-xl text-white/85">
              Alloggi, pasti ed esperienze da persone del posto.
            </p>
            <Link to="/goals" className={`mt-10 ${btnBianco}`}>
              Cosa misuriamo, e come <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </FasciaTerra>

        {/* ── Immagine a tutta larghezza ───────────────────────────────── */}
        <div className="h-80 overflow-hidden bg-gray-200 md:h-96 lg:h-[32rem]">
          <img
            src={IMG.paesaggio.src}
            alt={IMG.paesaggio.alt}
            width="2000"
            height="1000"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        {/* ── Testimonianze ────────────────────────────────────────────── */}
        <section
          id="reviews"
          className="scroll-mt-24 bg-gray-50 px-6 py-20 md:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className={kicker}>In anteprima</p>
              <h2 className={`mt-3 ${h2}`}>
                Le persone che non vedono l'ora di partire
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Hanno provato la piattaforma prima dell'apertura. Ecco cosa ci
                hanno scritto.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {TESTIMONIANZE.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.1}>
                  <figure className="flex h-full flex-col rounded-2xl border-t-4 border-terra bg-white p-8 shadow-md transition-shadow duration-300 hover:shadow-lg">
                    <span
                      aria-hidden="true"
                      className="block h-10 text-center font-serif text-7xl leading-none text-terra/30"
                    >
                      “
                    </span>
                    <blockquote className="mt-2 flex-1 text-center italic leading-relaxed text-gray-700">
                      {t.text}
                    </blockquote>
                    <figcaption className="mt-8 flex items-center justify-center gap-4">
                      <span
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-terra text-lg font-bold text-white"
                        aria-hidden="true"
                      >
                        {t.name[0]}
                      </span>
                      <span>
                        <span className="block font-semibold text-gray-900">
                          {t.name}
                        </span>
                        <span className="block text-sm font-medium text-terra">
                          {t.job}
                        </span>
                        <span className="block text-xs text-gray-500">
                          {t.location}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA finale ───────────────────────────────────────────────── */}
        <FasciaTerra>
          <Reveal>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Il tuo ufficio con vista ti sta aspettando
            </h2>
            <p className="mt-6 text-xl text-white/85">
              Ti scriviamo quando apriamo le prime date. Chi è in lista viene
              avvisato per primo.
            </p>
            <Link
              to="/iscriviti"
              className={`mt-10 w-full sm:w-auto ${btnBianco}`}
            >
              Iscriviti alla waitlist <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </FasciaTerra>
      </main>
    </MotionConfig>
  );
}

export default Home;
