import './styles/com-o-que-fazemos.css';

export default function ComOQueFazemos() {
  const techStack = [
    {
      id: '1',
      name: 'Node.js',
      description: 'Backend rápido e escalável para APIs e regras de negócio.',
      iconType: 'green-diamond',
    },
    {
      id: '2',
      name: 'React',
      description: 'Interfaces rápidas, responsivas e fáceis de evoluir.',
      iconType: 'blue-diamond',
    },
    {
      id: '3',
      name: 'Git Enterprise',
      description: 'Versionamento e governança de código em nível corporativo.',
      iconType: 'white-x',
    },
    {
      id: '4',
      name: 'Scrum',
      description: 'Metodologia ágil que guia sprints, entregas e prioridades.',
      iconType: 'green-dots',
    },
  ];

  return (
    <section className="tech-section">
      <div className="tech-container">
        
        {/* Cabeçalho */}
        <div className="tech-header">
          <h2 className="tech-title">Com o que fazemos</h2>
          <p className="tech-subtitle">
            Nosso hotbar de ferramentas — testado em produção, não só no currículo.
          </p>
        </div>

        {/* Hotbar / Inventory Bar (Estilo Minecraft) */}
        <div className="hotbar-container">
          {techStack.map((item) => (
            <div key={item.id} className="hotbar-slot">
              <span className="slot-number">{item.id}</span>
              <span className={`pixel-icon ${item.iconType}`}></span>
            </div>
          ))}
        </div>

        {/* Grid dos Cards de Tecnologias */}
        <div className="tech-grid">
          {techStack.map((tech) => (
            <div key={tech.id} className="tech-card">
              <div className="icon-box">
                <span className={`pixel-icon ${tech.iconType}`}></span>
              </div>
              <h3 className="tech-card-title">{tech.name}</h3>
              <p className="tech-card-description">{tech.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}