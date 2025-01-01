import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // 선택: 스타일 파일
import App from './App'; // App 컴포넌트 불러오기

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // public/index.html의 <div id="root"></div>에 렌더링
);

