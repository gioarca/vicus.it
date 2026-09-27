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

/**
 * Home Vicus — parla a tre pubblici: dipendenti, freelance, HR.
 * Palette: terra (colore principale) + neutral. Nessun territorio nominato
 * prima dei Patti, nessun numero di posti, nessun linguaggio da pacchetto.
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
    chi: "Se lavori in un'azienda",
    titolo: "Porta il tuo team fuori dallo schermo",
    testo:
      "Colleghi che vedi solo in call, finalmente nella stessa piazza. Qualche giorno di lavoro vero, in un posto che vi costringe a rallentare e a parlarvi.",
  },
  {
    chi: "Se sei freelance",
    titolo: "Parti con un piccolo gruppo",
    testo:
      "Lavori da solo tutto l'anno. Qui trovi altri professionisti, una connessione verificata e un borgo che ti accoglie come residente, non come turista.",
  },
  {
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
    titolo: "Una scrivania con vista, e una connessione vera",
    testo:
      "Colline che cambiano colore con le stagioni, silenzio al posto del traffico. Prima di proporre un borgo verifichiamo sul posto che ci si possa lavorare davvero.",
  },
  {
    titolo: "Il borgo ci guadagna",
    testo:
      "Chi ospita, cucina e guida è del posto. Non prendiamo commissioni da loro, e ogni anno rendiamo conto di quanto è rimasto sul territorio.",
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
const kicker =
  "text-[11px] font-semibold uppercase tracking-[0.14em] text-terra";
const h2 =
  "text-[26px] font-normal leading-snug tracking-tight text-neutral-900 sm:text-[34px]";
const ctaPieno =
  "inline-flex min-h-13 items-center justify-center rounded-lg bg-terra px-7 text-[16px] font-medium text-white transition hover:brightness-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-terra focus-visible:ring-offset-2 active:scale-[0.99]";
const ctaVuoto =
  "inline-flex min-h-13 items-center justify-center rounded-lg border border-neutral-300 px-7 text-[16px] text-neutral-700 transition-colors hover:border-terra hover:text-terra focus:outline-none focus-visible:ring-2 focus-visible:ring-terra focus-visible:ring-offset-2";

// Comparsa allo scroll. Con "riduci movimento" attivo, MotionConfig la annulla.
function Reveal({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="bg-white">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-28 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:pt-36">
          <div>
            <p className={kicker}>Lavoro e borghi</p>
            <h1 className="mt-4 text-[34px] font-normal leading-[1.1] tracking-tight text-neutral-900 sm:text-[48px]">
              Lavora da un borgo. Lascia qualcosa al borgo.
            </h1>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-neutral-500">
              Porta il laptop, assapora la tradizione, vivi la storia. Per chi
              lavora da remoto, per chi è freelance e per i team che vogliono
              ritrovarsi davvero.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/iscriviti" className={ctaPieno}>
                Iscriviti alla waitlist
              </Link>
              <a href="#how-it-works" className={ctaVuoto}>
                Come funziona
              </a>
            </div>
          </div>

          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 sm:aspect-[4/3] lg:aspect-[4/5]">
            <img
              src={IMG.hero.src}
              alt={IMG.hero.alt}
              width="1400"
              height="1750"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* ── Per chi è ────────────────────────────────────────────────── */}
        <section className="border-t border-neutral-100 bg-neutral-50 px-5 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal className="max-w-2xl">
              <p className={kicker}>Per chi è</p>
              <h2 className={`mt-3 ${h2}`}>
                Perché scegliere i piccoli comuni italiani?
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-neutral-500">
                Immagina di aprire il laptop con vista sulle colline, di fare
                una pausa caffè in una piazzetta con i tuoi colleghi, di
                chiudere la giornata con una cena tutti insieme.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {PUBBLICI.map((p, i) => (
                <Reveal
                  key={p.chi}
                  delay={i * 0.08}
                  className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-7"
                >
                  <p className="text-[13px] font-medium text-terra">{p.chi}</p>
                  <h3 className="mt-3 text-[20px] font-medium leading-snug text-neutral-900">
                    {p.titolo}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
                    {p.testo}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Non è solo un viaggio ────────────────────────────────────── */}
        <section className="px-5 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <Reveal className="order-2 md:order-1">
              <h2 className={h2}>Non è solo un viaggio.</h2>
              <ul className="mt-10 space-y-8">
                {VALORI.map((v) => (
                  <li key={v.titolo} className="border-l-2 border-terra pl-5">
                    <h3 className="text-[18px] font-medium text-neutral-900">
                      {v.titolo}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-neutral-500">
                      {v.testo}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="order-1 md:order-2">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100">
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
        <section
          id="how-it-works"
          className="scroll-mt-24 border-t border-neutral-100 bg-neutral-50 px-5 py-20 sm:px-6 sm:py-28"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <Reveal>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
                <img
                  src={IMG.borgo.src}
                  alt={IMG.borgo.alt}
                  width="1200"
                  height="900"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal>
              <p className={kicker}>Come funziona</p>
              <h2 className={`mt-3 ${h2}`}>
                Niente carrello. Una conversazione.
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-neutral-500">
                Non vendiamo pacchetti da prenotare in tre clic. Ogni partenza
                la costruiamo insieme, con le persone che vivono nel borgo.
              </p>

              <ol className="mt-10 space-y-7">
                {PASSI.map((p, i) => (
                  <li key={p.titolo} className="flex gap-5">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-terra text-[14px] font-medium text-terra"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-[17px] font-medium text-neutral-900">
                        {p.titolo}
                      </h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-neutral-500">
                        {p.testo}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <Link to="/iscriviti" className={`mt-10 ${ctaPieno}`}>
                Iscriviti alla waitlist
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ── Fascia paesaggio + impatto ───────────────────────────────── */}
        <section className="relative isolate overflow-hidden">
          <img
            src={IMG.paesaggio.src}
            alt=""
            width="2000"
            height="1000"
            loading="lazy"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-neutral-900/55" />
          <Reveal className="mx-auto max-w-3xl px-5 py-28 text-center sm:px-6 sm:py-36">
            <h2 className="text-[26px] font-normal leading-snug tracking-tight text-white sm:text-[36px]">
              Ogni giornata di lavoro in un borgo è spesa che resta nel borgo.
            </h2>
            <Link
              to="/goals"
              className="mt-8 inline-flex items-center gap-2 text-[16px] text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
            >
              Cosa misuriamo, e come →
            </Link>
          </Reveal>
        </section>

        {/* ── Testimonianze ────────────────────────────────────────────── */}
        <section
          id="reviews"
          className="scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <Reveal className="max-w-2xl">
              <p className={kicker}>In anteprima</p>
              <h2 className={`mt-3 ${h2}`}>
                Le persone che non vedono l'ora di partire
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-neutral-500">
                Hanno provato la piattaforma prima dell'apertura. Ecco cosa ci
                hanno scritto.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {TESTIMONIANZE.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.08}>
                  <figure className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-7">
                    <blockquote className="flex-1 text-[15px] leading-relaxed text-neutral-600">
                      “{t.text}”
                    </blockquote>
                    <figcaption className="mt-7 flex items-center gap-4 border-t border-neutral-100 pt-5">
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-terra/10 text-[15px] font-medium text-terra"
                        aria-hidden="true"
                      >
                        {t.name[0]}
                      </span>
                      <span>
                        <span className="block text-[15px] font-medium text-neutral-900">
                          {t.name}
                        </span>
                        <span className="block text-[13px] text-neutral-500">
                          {t.job} · {t.location}
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
        <section className="px-5 pb-24 sm:px-6">
          <Reveal className="mx-auto max-w-6xl rounded-2xl bg-terra px-6 py-16 text-center sm:px-12 sm:py-20">
            <h2 className="text-[26px] font-normal leading-snug tracking-tight text-white sm:text-[36px]">
              Il tuo ufficio con vista ti sta aspettando
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-white/80">
              Ti scriviamo quando apriamo le prime date. Chi è in lista viene
              avvisato per primo.
            </p>
            <Link
              to="/iscriviti"
              className="mt-9 inline-flex min-h-13 w-full items-center justify-center rounded-lg bg-white px-7 text-[16px] font-medium text-terra transition-colors hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-terra sm:w-auto"
            >
              Iscriviti alla waitlist
            </Link>
          </Reveal>
        </section>
      </main>
    </MotionConfig>
  );
}

export default Home;
