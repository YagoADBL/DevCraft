import './styles/oque-fazemos.css';

export default function OQueFazemos() {
  const services = [
    {
      id: 1,
      title: 'Sistemas web sob medida',
      description:
        'Plataformas internas, portais e sistemas de gestão construídos do zero para o seu processo, não o contrário.',
      iconType: 'blue-ring',
    },
    {
      id: 2,
      title: 'Aplicativos móveis',
      description:
        'Apps para clientes ou equipes internas, com o mesmo backend e o mesmo padrão de qualidade do sistema web.',
      iconType: 'green-block',
    },
    {
      id: 3,
      title: 'Automação de processos',
      description:
        'Tarefas manuais viram rotinas automáticas: menos planilha, menos retrabalho, menos erro humano.',
      iconType: 'blue-star',
    },
    {
      id: 4,
      title: 'Integrações e APIs',
      description:
        'Conectamos os sistemas que sua empresa já usa, para os dados circularem sem gente copiando e colando.',
      iconType: 'green-plus',
    },
    {
      id: 5,
      title: 'Modernização de sistemas legados',
      description:
        'Sistemas antigos ganham stack atual, performance e segurança, sem parar a operação.',
      iconType: 'blue-step',
    },
    {
      id: 6,
      title: 'Plataformas para times internos',
      description:
        'Ferramentas internas feitas sob medida para o jeito que o seu time realmente trabalha.',
      iconType: 'green-stairs',
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        
        {/* Cabeçalho */}
        <div className="services-header">
          <h2 className="services-title">O que fazemos</h2>
          <p className="services-subtitle">
            Cada projeto é uma peça diferente — encaixamos a solução certa para o seu problema, não um pacote pronto.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="icon-box">
                <span className={`pixel-icon ${service.iconType}`}></span>
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}