import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BlockchainFrames from './components/BlockchainFrames';
import GrafanaPanels from './components/GrafanaPanels';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

ReactDOM.render(
  <React.StrictMode>
    <div style={{ display: 'flex', flexDirection: 'column', width: '90%', height: '100vh', margin: '0 auto' }}>
      
      {/* App 영역 */}
      <div id="app-section" style={{ flex: 1, borderBottom: '1px solid #ccc', padding: '20px' }}>
        <App />
      </div>

      {/* 목차 */}
      <nav>
        <button className="nav-button app" onClick={() => scrollToSection('app-section')}>Top</button>
        <button className="nav-button blockchain" onClick={() => scrollToSection('blockchain-section')}>Blockchain app</button>
        <button className="nav-button grafana" onClick={() => scrollToSection('grafana-section')}>Grafana</button>
      </nav>

      {/* BlockchainFrames 영역 */}
      <div id="blockchain-section" style={{ flex: 2, padding: '40px' }}>
        <BlockchainFrames />
      </div>

      {/* 목차 */}
      <nav>
        <button className="nav-button app" onClick={() => scrollToSection('app-section')}>Top</button>
        <button className="nav-button blockchain" onClick={() => scrollToSection('blockchain-section')}>Blockchain app</button>
        <button className="nav-button grafana" onClick={() => scrollToSection('grafana-section')}>Grafana</button>
      </nav>

      {/* Grafana 영역 */}
      <div
        id="grafana-section"
        style={{
          flex: 2,
          padding: '20px',
        }}
      > 
        <GrafanaPanels />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

