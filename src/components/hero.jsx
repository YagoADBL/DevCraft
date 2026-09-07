import './styles/hero.css';

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        
        {/* Lado Esquerdo */}
        <div className="hero-left">
          <h1 className="hero-title">
            Software sob medida, <br />
            <span>construído bloco a bloco.</span>
          </h1>

          <p className="text-hero">
            A DevCraft é um estúdio full-stack que projeta, constrói e mantém
            sistemas para empresas e pessoas — do primeiro commit à entrega em produção.
          </p>

          <div className="btns">
            <button className="btn-primary">Ver o que construímos</button>
            <button className="btn-secondary">Falar com o time</button>
          </div>

          <div className="stack-badges">
            <div className="badge">
              <span className="dot"></span> Node.js + React
            </div>
            <div className="badge">
              <span className="dot"></span> Git Enterprise
            </div>
            <div className="badge">
              <span className="dot"></span> Entregas em Scrum
            </div>
          </div>
        </div>

        {/* Lado Direito */}
        <div className="hero-right">
          <div className="card-dev">
            <div className="avatar-card"></div>
            <h3 className="card-title">DEVCRAFT</h3>
            <p className="card-subtitle">SQUAD FULL-STACK</p>
            <p className="card-description">Sempre em sprint, sempre entregando.</p>
          </div>
        </div>

      </div>
    </section>
  );
}