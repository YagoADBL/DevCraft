import { useState } from 'react';
import './styles/contato.css';

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  });

  // Atualiza o estado conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Trata o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    const recipientEmail = 'contato@devcraft.com.br'; // Seu e-mail de destino
    const subject = encodeURIComponent(`Novo Contato do Site: ${formData.name}`);
    
    // Monta o corpo da mensagem formatado
    const bodyText = `Nome: ${formData.name}\nE-mail do remetente: ${formData.email}\n\nProjeto / Mensagem:\n${formData.project}`;
    const body = encodeURIComponent(bodyText);

    // Abre o cliente de e-mail do usuário
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contato" className="contact-section">
      <div className="contact-container">
        
        {/* Cabeçalho */}
        <div className="contact-header">
          <h2 className="contact-title">Como falar com a gente</h2>
          <p className="contact-subtitle">
            Conta pra gente o que você precisa construir — a resposta vem de alguém do time, não de um robô.
          </p>
        </div>

        {/* Blocos de Conteúdo */}
        <div className="contact-blocks">
          
          {/* Bloco de Informações de Contato */}
          <div className="info-block">
            <h3 className="info-title">DEVCRAFT — CONTATO</h3>
            <div className="info-items">
              <div className="info-item">
                <div className="info-row">
                  <span className="dot-icon"></span>
                  <span className="info-item-title">E-mail</span>
                </div>
                <p className="info-item-details">contato@devcraft.com.br</p>
              </div>

              <div className="info-item">
                <div className="info-row">
                  <span className="dot-icon"></span>
                  <span className="info-item-title">WhatsApp</span>
                </div>
                <p className="info-item-details">(00) 00000-0000</p>
              </div>

              <div className="info-item">
                <div className="info-row">
                  <span className="dot-icon"></span>
                  <span className="info-item-title">Horário</span>
                </div>
                <p className="info-item-details">Segunda a sexta, 9h às 18h</p>
              </div>

              <div className="info-item">
                <div className="info-row">
                  <span className="dot-icon"></span>
                  <span className="info-item-title">Resposta</span>
                </div>
                <p className="info-item-details">Em até 1 dia útil</p>
              </div>
            </div>
          </div>

          {/* Bloco do Formulário */}
          <div className="form-block">
            <form className="contact-form" onSubmit={handleSubmit}>
              
              <div className="input-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="project">Conte sobre o seu projeto</label>
                <textarea
                  id="project"
                  name="project"
                  rows="8"
                  value={formData.project}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">Enviar mensagem</button>
            </form>
            
            <p className="form-note">
              Este formulário abre seu app de e-mail. Para receber mensagens direto no site sem abrir o aplicativo, conecte-o a um backend em Node.js ou use um serviço como EmailJS.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}