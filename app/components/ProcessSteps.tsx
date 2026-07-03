import { steps } from "../content";

export function ProcessSteps() {
  return (
    <section className="gs-section dark" id="processo" aria-labelledby="gs-processo-h2">
      <div className="gs-wrap">
        <p className="gs-section-label gs-reveal">Como Funciona</p>
        <h2 className="gs-h2 gs-reveal gs-d1 gs-text-white" id="gs-processo-h2">
          Simples de contratar,<br />poderoso na prática
        </h2>
        <div className="gs-divider gs-reveal gs-d2" />
        <p className="gs-lead gs-reveal gs-d2">
          Do primeiro contato à ativação do rastreamento — sem burocracia, sem demora,
          sem dor de cabeça.
        </p>

        <div className="gs-process-grid">
          {steps.map((s, i) => (
            <div key={s.num} className={`gs-step gs-reveal gs-d${i + 1}`}>
              <div className="gs-step-num" aria-hidden="true">{s.num}</div>
              <div>
                <div className="gs-step-icon" aria-hidden="true">
                  <s.icon size={20} />
                </div>
                <h3 className="gs-step-title">{s.title}</h3>
                <p className="gs-step-text">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
