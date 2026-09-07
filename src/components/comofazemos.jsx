import './styles/como-fazemos.css';

export default function ComoFazemos() {
  const steps = [
    {
      number: '1',
      title: 'Sprint Planning',
      description: 'Definimos com você o que entra no próximo ciclo.',
    },
    {
      number: '2',
      title: 'Desenvolvimento',
      description: 'O time constrói e integra o que foi planejado.',
    },
    {
      number: '3',
      title: 'Sprint Review',
      description: 'Mostramos o que foi entregue, funcionando de verdade.',
    },
    {
      number: '4',
      title: 'Retrospectiva',
      description: 'Ajustamos o processo antes de começar o próximo ciclo.',
    },
  ];

  const badges = [
    'Descoberta',
    'Planejamento',
    'Desenvolvimento',
    'Testes',
    'Deploy',
  ];

  return (
    <section className="how-section">
      <div className="how-container">
        
        {/* Cabeçalho */}
        <div className="how-header">
          <h2 className="how-title">Como fazemos</h2>
          <p className="how-subtitle">
            Trabalhamos em ciclos curtos, com entregas visíveis e você acompanhando
            cada etapa — essa é a base do Scrum.
          </p>
        </div>

        {/* Diagrama Visual (Blocos + Seta + Card de Incremento) */}
        <div className="diagram-container">
          <div className="grid-blocks">
            <div className="cell"><span className="pixel-icon icon-blue-cross"></span></div>
            <div className="cell"><span className="pixel-icon icon-green-ring"></span></div>
            <div className="cell"><span className="pixel-icon icon-blue-star"></span></div>
            <div className="cell"><span className="pixel-icon icon-green-square"></span></div>
            <div className="cell"><span className="pixel-icon icon-blue-dash"></span></div>
            <div className="cell dark-cell"></div>
          </div>

          <div className="arrow-icon">→</div>

          <div className="increment-card">
            <div className="increment-icon-box">
              <span className="pixel-icon icon-green-top"></span>
            </div>
            <p className="increment-text">
              Incremento de software entregue a cada sprint
            </p>
          </div>
        </div>

        {/* Badges de Etapas */}
        <div className="stages-badges">
          {badges.map((stage, idx) => (
            <div key={idx} className="stage-badge">
              <span className="square-dot"></span>
              {stage}
            </div>
          ))}
        </div>

        {/* Texto explicativo da timeline */}
        <p className="timeline-description">
          Cada sprint dura de 1 a 2 semanas e segue o mesmo ciclo do Scrum, girando até o produto estar completo:
        </p>

        {/* Timeline / Passos do Scrum (1, 2, 3, 4) */}
        <div className="scrum-timeline">
          <div className="timeline-line"></div>
          
          <div className="steps-grid">
            {steps.map((step) => (
              <div key={step.number} className="step-card">
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}