import { Link } from "react-router-dom";

/**
 * Pagina Obiettivi — palette del sito: neutral + rosso (red-600).
 *
 * I "risultati" sono gli indicatori del Rendiconto di Impatto Territoriale.
 * Finché non esiste un Rendiconto pubblicato, `valore` resta null e la card
 * mostra "In arrivo": NON inserire stime o obiettivi come se fossero risultati.
 * Quando esce il primo Rendiconto, basta compilare `valore` e `nota`.
 */

// ─── Obiettivi (SDG di riferimento) ───────────────────────────────────────────
const OBIETTIVI = [
  {
    sdg: 8,
    nome: "Lavoro dignitoso e crescita economica",
    titolo: "La spesa resta nel borgo",
    testo:
      "Alloggi, pasti, trasporti ed esperienze li forniscono persone e imprese del territorio. Le loro fatture sono intestate direttamente all'azienda cliente: il lavoro viene pagato a chi lo fa, senza intermediari che trattengono una parte.",
  },
  {
    sdg: 9,
    nome: "Imprese, innovazione e infrastrutture",
    titolo: "Un borgo dove si può lavorare davvero",
    testo:
      "Prima di proporre un borgo ne verifichiamo sul posto connessione e spazi di lavoro. Un team che lavora bene lì dimostra che quel territorio è una scelta praticabile, non un ripiego romantico.",
  },
  {
    sdg: 10,
    nome: "Ridurre le disuguaglianze",
    titolo: "Restituzione documentata, non beneficenza",
    testo:
      "Con ogni Comune firmiamo un patto con impegni misurabili. Ogni anno rendiamo conto di cosa abbiamo portato al territorio, in un documento che il Comune riceve e può pubblicare.",
  },
];

// ─── Indicatori del Rendiconto (i risultati misurabili) ───────────────────────
const INDICATORI = [
  {
    etichetta: "Giornate-persona di presenza",
    descrizione:
      "Quante giornate i team ospitati hanno effettivamente vissuto nel borgo.",
    valore: null,
    nota: "",
  },
  {
    etichetta: "Spesa verso fornitori locali",
    descrizione:
      "Quota del budget di ogni retreat fatturata da imprese del territorio.",
    valore: null,
    nota: "",
  },
  {
    etichetta: "Fornitori locali coinvolti",
    descrizione:
      "Quante imprese del borgo hanno lavorato con noi, e di che tipo.",
    valore: null,
    nota: "",
  },
  {
    etichetta: "Ore con la comunità",
    descrizione: "Laboratori, visite e incontri con artigiani e residenti.",
    valore: null,
    nota: "",
  },
  {
    etichetta: "Contributo al progetto culturale",
    descrizione:
      "Quanto è andato al progetto culturale scelto ogni anno con il Comune.",
    valore: null,
    nota: "",
  },
  {
    etichetta: "Valutazione degli ospiti",
    descrizione:
      "Come i partecipanti giudicano l'esperienza, a retreat concluso.",
    valore: null,
    nota: "",
  },
];

// ─── Impegni verificabili ─────────────────────────────────────────────────────
const IMPEGNI = [
  {
    titolo: "Un Rendiconto ogni anno",
    testo:
      "Entro il 31 marzo ogni Comune partner riceve il Rendiconto dell'anno precedente, con i dati di ogni indicatore.",
  },
  {
    titolo: "Promesso contro realizzato",
    testo:
      "Per ogni impegno mostriamo quanto avevamo promesso, quanto abbiamo fatto e lo scostamento. Anche quando siamo sotto.",
  },
  {
    titolo: "Nessuna commissione sui fornitori",
    testo:
      "Non prendiamo percentuali da chi lavora nel borgo. Il nostro compenso è la consulenza che paga l'azienda, e basta.",
  },
  {
    titolo: "Solo operatori del territorio",
    testo:
      "Le esperienze sono proposte da persone che vivono e lavorano nel borgo, non da operatori esterni.",
  },
];

const kicker =
  "text-[11px] font-semibold uppercase tracking-[0.14em] text-red-600";

function Goals() {
  const risultatiDisponibili = INDICATORI.some((i) => i.valore !== null);

  return (
    <main className="bg-white px-5 pb-24 pt-32 sm:px-6 sm:pt-40">
      <title>Obiettivi — Vicus</title>

      <div className="mx-auto max-w-5xl">
        {/* ── Intestazione ─────────────────────────────────────────────── */}
        <header className="max-w-2xl">
          <p className={kicker}>Obiettivi</p>
          <h1 className="mt-3 text-[30px] font-normal leading-tight tracking-tight text-neutral-900 sm:text-[42px]">
            Cosa vogliamo cambiare, e come lo misuriamo
          </h1>
          <p className="mt-5 text-[16px] leading-relaxed text-neutral-500">
            Portare un team a lavorare in un borgo ha senso solo se il borgo ci
            guadagna qualcosa di concreto. Per questo ogni obiettivo ha un
            indicatore, e ogni indicatore finisce in un documento pubblico.
          </p>
        </header>

        {/* ── Tre obiettivi ────────────────────────────────────────────── */}
        <section aria-labelledby="obiettivi-titolo" className="mt-16 sm:mt-20">
          <h2 id="obiettivi-titolo" className="sr-only">
            I nostri obiettivi
          </h2>
          <ol className="grid gap-5 md:grid-cols-3">
            {OBIETTIVI.map((o) => (
              <li
                key={o.sdg}
                className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-300"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600 text-[15px] font-semibold text-white"
                    aria-hidden="true"
                  >
                    {o.sdg}
                  </span>
                  <span className="text-[12px] leading-snug text-neutral-400">
                    Obiettivo ONU {o.sdg}
                    <br />
                    {o.nome}
                  </span>
                </div>
                <h3 className="mt-6 text-[19px] font-medium leading-snug text-neutral-900">
                  {o.titolo}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
                  {o.testo}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Risultati misurabili ─────────────────────────────────────── */}
        <section aria-labelledby="risultati-titolo" className="mt-24 sm:mt-28">
          <div className="max-w-2xl">
            <p className={kicker}>Risultati</p>
            <h2
              id="risultati-titolo"
              className="mt-3 text-[24px] font-normal leading-snug tracking-tight text-neutral-900 sm:text-[30px]"
            >
              Sei numeri, verificabili, ogni anno
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-500">
              {risultatiDisponibili
                ? "I dati vengono dal Rendiconto di Impatto Territoriale che trasmettiamo a ogni Comune partner."
                : "Sono gli indicatori del Rendiconto di Impatto Territoriale. Siamo all'inizio: pubblicheremo qui i valori reali appena esce il primo Rendiconto, senza stime né proiezioni."}
            </p>
          </div>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
            {INDICATORI.map((i) => (
              <div key={i.etichetta} className="flex flex-col bg-white p-6">
                <dt className="text-[14px] font-medium text-neutral-900">
                  {i.etichetta}
                </dt>
                <dd className="order-first mb-4">
                  {i.valore !== null ? (
                    <span className="text-[34px] font-normal leading-none tracking-tight text-red-600">
                      {i.valore}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-neutral-300 px-3 py-1 text-[12px] text-neutral-400">
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-red-600"
                        aria-hidden="true"
                      />
                      In arrivo col primo Rendiconto
                    </span>
                  )}
                </dd>
                <dd className="mt-2 text-[14px] leading-relaxed text-neutral-500">
                  {i.descrizione}
                </dd>
                {i.nota && (
                  <dd className="mt-3 text-[12px] text-neutral-400">
                    {i.nota}
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </section>

        {/* ── Impegni ──────────────────────────────────────────────────── */}
        <section aria-labelledby="impegni-titolo" className="mt-24 sm:mt-28">
          <div className="max-w-2xl">
            <p className={kicker}>Impegni</p>
            <h2
              id="impegni-titolo"
              className="mt-3 text-[24px] font-normal leading-snug tracking-tight text-neutral-900 sm:text-[30px]"
            >
              Cosa puoi verificare da subito
            </h2>
          </div>

          <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {IMPEGNI.map((imp) => (
              <li key={imp.titolo} className="border-l-2 border-red-600 pl-5">
                <h3 className="text-[16px] font-medium text-neutral-900">
                  {imp.titolo}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-neutral-500">
                  {imp.testo}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="mt-24 rounded-2xl bg-neutral-900 px-6 py-12 text-center sm:mt-28 sm:px-12">
          <h2 className="text-[22px] font-normal leading-snug tracking-tight text-white sm:text-[28px]">
            Vuoi esserci quando apriamo le prime date?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-neutral-400">
            Chi è in lista viene avvisato per primo e sceglie per primo.
          </p>
          <Link
            to="/iscriviti"
            className="mt-8 inline-flex min-h-13 w-full items-center justify-center rounded-lg bg-red-600 px-6 text-[16px] font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 sm:w-auto sm:min-w-55"
          >
            Iscriviti alla waitlist
          </Link>
        </section>
      </div>
    </main>
  );
}

export default Goals;
