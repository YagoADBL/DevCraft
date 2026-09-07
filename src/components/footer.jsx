import './styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Logo DevCraft */}
        <div className="footer-logo">
          <span className="logo-icon"></span>
          <span className="logo-text-white">Dev</span>
          <span className="logo-text-blue">Craft</span>
        </div>

        {/* Copyright e Créditos */}
        <p className="footer-copyright">
          © 2026 DevCraft. Construído com Node.js, React e muito café.
        </p>

      </div>
    </footer>
  );
}