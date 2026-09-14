import { useState } from 'react';
import './styles/header.css';

export default function Header() {
  // URL do WhatsApp com a mensagem codificada
  const whatsappUrl = "https://wa.me/5587991403265?text=desejo%20criar%20um%20projeto%20com%20vc%2C%20como%20funcionar%3F";

  // Controla a abertura do menu mobile
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="main-header">
      <div className="header-left">
        <span className="logo-icon"></span>
        <h1 className="brand-name">
          Dev<span>Craft</span>
        </h1>
      </div>

      <nav className={`header-mid ${menuOpen ? 'is-open' : ''}`}>
        <ul>
          <li><a href="#quem-somos" onClick={closeMenu}>Quem somos</a></li>
          <li><a href="#como-fazemos" onClick={closeMenu}>Como fazemos</a></li>
          <li><a href="#com-o-que-fazemos" onClick={closeMenu}>Com o que fazemos</a></li>
          <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
          <li className="nav-cta-mobile">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-inicio"
              onClick={closeMenu}
            >
              Iniciar projeto
            </a>
          </li>
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

      <button
        type="button"
        className={`menu-toggle ${menuOpen ? 'is-active' : ''}`}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </header>
  );
}