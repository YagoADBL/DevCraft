import './styles/header.css';

export default function Header() {
  // URL do WhatsApp com a mensagem codificada
  const whatsappUrl = "https://wa.me/5587991403265?text=desejo%20criar%20um%20projeto%20com%20vc%2C%20como%20funcionar%3F";

  return (
    <header className="main-header">
      <div className="header-left">
        <span className="logo-icon"></span>
        <h1 className="brand-name">
          Dev<span>Craft</span>
        </h1>
      </div>

      <nav className="header-mid">
        <ul>
          <li><a href="#quem-somos">Quem somos</a></li>
          <li><a href="#como-fazemos">Como fazemos</a></li>
          <li><a href="#com-o-que-fazemos">Com o que fazemos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      <div className="header-right">
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-inicio"
        >
          Iniciar projeto
        </a>
      </div>
    </header>
  );
}