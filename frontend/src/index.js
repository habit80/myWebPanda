import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // 선택: 스타일 파일
import App from './App'; // App 컴포넌트 불러오기
import BlockchainFrames from './components/BlockchainFrames';
import GrafanaPanels from './components/GrafanaPanels';

ReactDOM.render(
  <React.StrictMode>
	  <div style={{ display: 'flex', flexDirection: 'column',width: '90%',  height: '100vh' }}>
      {/* App 영역 */}
      <div style={{ flex: 1, borderBottom: '1px solid #ccc' }}>
        <App />
      </div>

      {/* BlockchainFrames 영역 */}
      <div style={{ flex: 2 }}>
        <BlockchainFrames />
      </div>

      {/* BlockchainFrames 영역 */}
      <div style={{ flex: 2 }}>
        <GrafanaPanels />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root') // public/index.html의 <div id="root"></div>에 렌더링
);

