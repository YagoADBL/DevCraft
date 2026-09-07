import './styles/quemsomos.css';

export default function QuemSomos() {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Coluna Esquerda: Texto + Cards Inferiores */}
        <div className="about-left">
          <h2 className="about-title">Quem somos</h2>

          <div className="about-description">
            <p>
              A DevCraft nasceu para ser o estúdio que empresas chamam quando precisam
              de software que realmente funciona no mundo real — não só na demonstração.
            </p>
            <p>
              Multiplicamos ideias em sistemas, aplicativos e automações, sempre com o
              cliente dentro do processo, sprint a sprint. Somos um time enxuto, mas com
              disciplina de squad grande: versionamento em Git Enterprise, entregas guiadas
              por Scrum e um stack moderno para construir rápido sem abrir mão da
              qualidade.
            </p>
            <p>
              Atendemos empresas de qualquer porte e também pessoas com um problema
              específico para resolver — se dá para virar software, a gente constrói.
            </p>
          </div>

          <div className="about-cards">
            <div className="info-card">
              <h3>NOSSA MISSÃO</h3>
              <p>
                Transformar processos manuais e ideias soltas em software estável, do
                jeito que o seu negócio precisa.
              </p>
            </div>

            <div className="info-card">
              <h3>COMO TRABALHAMOS</h3>
              <p>
                Em ciclos curtos, com você acompanhando cada sprint — sem
                caixa-preta e sem surpresa no final.
              </p>
            </div>
          </div>
        </div>

        {/* Coluna Direita: Card Estúdio com Barras de Progresso */}
        <div className="about-right">
          <div className="studio-card">
            <div className="avatar-pixel"></div>
            <h3 className="studio-title">DEVCRAFT STUDIO</h3>
            <p className="studio-subtitle">Estúdio de software full-stack</p>

            <div className="skills-container">
              <div className="skill-row">
                <span className="skill-label">Backend</span>
                <div className="progress-bar">
                  <div className="progress-fill green" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div className="skill-row">
                <span className="skill-label">Frontend</span>
                <div className="progress-bar">
                  <div className="progress-fill blue" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className="skill-row">
                <span className="skill-label">Processo</span>
                <div className="progress-bar">
                  <div className="progress-fill green" style={{ width: '98%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}