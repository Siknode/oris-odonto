import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header" id="header">
        <div className="logo-container">
          {/* Coloque o arquivo de imagem do seu logo na pasta public com o nome logo-oris.png */}
          <img src="/logo-oris.png" alt="Óris Odontologia Integrativa" className="logo-img" />
          <h2 className="logo-text">ÓRIS <span className="logo-sub">Odontologia Integrativa</span></h2>
        </div>
        <nav className="main-nav">
          <a href="#transicao">Troque de Aparelho</a>
          <a href="#comparacao">Alinhadores x Fixos</a>
          <a href="#indicacoes">Indicações</a>
        </nav>
        <button onClick={() => window.open('https://wa.me/5521997958030?text=Olá! Vi o site e gostaria de agendar uma avaliação para alinhadores na Óris.', '_blank')} className="cta-button">Agendar Avaliação</button>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="hero-content">
            <h1>Liberdade para Sorrir com Alinhadores Invisíveis</h1>
            <p className="hero-subtitle">
              A tecnologia a favor da sua estética. Transforme seu sorriso com conforto, previsibilidade e sem o visual dos aparelhos tradicionais.
            </p>
            <button onClick={() => window.open('https://wa.me/5521997958030?text=Olá! Gostaria de saber mais sobre os alinhadores invisíveis da Óris.', '_blank')} className="cta-button primary">Agende sua Avaliação</button>
          </div>
        </section>
        
        {/* Seção Nova: Comparação */}
        <section className="comparison" id="comparacao">
          <div className="section-header">
            <h2 className="section-title">Aparelhos Fixos <span className="text-light">vs</span> Alinhadores Invisíveis</h2>
            <p className="section-subtitle">Entenda porque a tecnologia invisível está mudando a ortodontia moderna na Óris.</p>
          </div>
          
          <div className="comparison-container">
            <div className="comp-card traditional">
              <h3>Aparelhos Metálicos</h3>
              <ul className="comp-list">
                <li><span className="icon-cross">✖</span> Estética metálica e chamativa</li>
                <li><span className="icon-cross">✖</span> Restrições alimentares (duros e pegajosos)</li>
                <li><span className="icon-cross">✖</span> Dificuldade de higienização e fio dental</li>
                <li><span className="icon-cross">✖</span> Maior risco de aftas e desconfortos</li>
              </ul>
            </div>

            <div className="comp-card aligners">
              <div className="badge">Padrão Ouro Óris</div>
              <h3>Alinhadores <span className="highlight-text">Invisíveis</span></h3>
              <ul className="comp-list">
                <li><span className="icon-check">✔</span> Estética imperceptível e premium</li>
                <li><span className="icon-check">✔</span> Removíveis: coma sem restrições</li>
                <li><span className="icon-check">✔</span> Liberdade para escovar e usar fio dental</li>
                <li><span className="icon-check">✔</span> Encaixe suave, menos dor e sem atritos</li>
                <li><span className="icon-check">✔</span> Previsibilidade total com planejamento 3D</li>
              </ul>
              <button onClick={() => window.open('https://wa.me/5521997958030?text=Olá! Fiquei interessado na tecnologia dos alinhadores invisíveis.', '_blank')} className="cta-button primary full-width">Quero essa tecnologia</button>
            </div>
          </div>
        </section>

        {/* Seção Nova: Transição de Aparelho Fixo para Alinhadores */}
        <section className="transition-section" id="transicao">
          <div className="transition-content">
            <h2 className="section-title">Já usa aparelho fixo? <br/><span style={{color: 'var(--text-dark)'}}>A transição é muito simples.</span></h2>
            <p className="transition-text">
              Se você foge de comer certas coisas porque ficam presas no fio metálico, 
              ou acha frustrante o processo de passar fio dental todo dia com os brackets... 
              <strong>Nós entendemos!</strong> 
              <br/><br/>
              A mudança do aparelho metálico para os Alinhadores Invisíveis Óris é rápida e transforma o seu conforto instantaneamente. 
              Volte a comer sem restrições, sorria nas fotos sem vergonha metálica e higienize seus dentes com total liberdade.
            </p>
            
            <div className="smiling-images">
              <div className="image-card traditional-image">
                 <img src="/braces.png" alt="Sorriso com aparelho metálico" className="smile-photo" />
                 <div className="image-caption">O Passado: Atrito e restrições</div>
              </div>
              <div className="icon-arrow">➜</div>
              <div className="image-card aligner-image glow">
                 <img src="/aligners.png" alt="Sorriso com alinhador invisível" className="smile-photo" />
                 <div className="image-caption highlight-caption">O Futuro: Liberdade Elegante</div>
              </div>
            </div>
            
            <button onClick={() => window.open('https://wa.me/5521997958030?text=Olá! Já uso aparelho fixo e quero saber como mudar para os alinhadores Óris.', '_blank')} className="cta-button primary transition-btn">Quero Mudar para Alinhadores</button>
          </div>
        </section>

        {/* Seção Nova: Indicações e Benefícios */}
        <section className="benefits" id="indicacoes">
          <div className="section-header">
            <h2 className="section-title">Para quem é indicado?</h2>
            <p className="section-subtitle">A tecnologia invisível acompanha o tratamento de diversos casos ortodônticos.</p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="icon-wrapper">🎯</div>
              <h4>Diastemas</h4>
              <p>Fechamento seguro de espaços indesejados entre os dentes.</p>
            </div>
            <div className="benefit-item">
              <div className="icon-wrapper">🔄</div>
              <h4>Apinhamento</h4>
              <p>Alinhamento previsível de dentes tortos ou sobrepostos.</p>
            </div>
            <div className="benefit-item">
              <div className="icon-wrapper">⚖</div>
              <h4>Mordida Incorreta</h4>
              <p>Ajuste de mordida cruzada, aberta ou profunda para conforto e saúde e estética.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/logo-oris.png" alt="Óris Odontologia" className="logo-img-footer" />
            <div style={{color: 'white', fontWeight: 'bold', fontSize: '1.5rem'}}>ÓRIS</div>
          </div>
          <p className="footer-text">Trabalhando com o que há de mais avançado em Odontologia Integrativa para você sorrir com liberdade.</p>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Óris Odontologia Integrativa. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
