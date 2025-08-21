import React from 'react';
import { createRoot } from 'react-dom/client';
import './stories/modal/Modal.css';
import { InteractiveModalExample } from './stories/modal/Modal.stories';

// メインアプリケーションコンポーネント
const App: React.FC = () => {
  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1>React コンポーネントテスト</h1>
      <p>ここにコンポーネントを挿入してテストできます。</p>
      <InteractiveModalExample />
      
      {/* コンポーネントをここに挿入してテストしてください */}
      <div style={{ 
        border: '2px dashed #ccc', 
        padding: '20px', 
        margin: '20px 0',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
      }}>
        <p style={{ color: '#666', textAlign: 'center' }}>
          ここにコンポーネントを挿入してください
        </p>
      </div>
      
      {/* サンプルボタン */}
      <div style={{ marginTop: '20px' }}>
        <button 
          style={{
            padding: '10px 20px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            marginRight: '10px'
          }}
          onClick={() => console.log('サンプルボタンがクリックされました')}
        >
          サンプルボタン1
        </button>
        
        <button 
          style={{
            padding: '10px 20px',
            backgroundColor: '#f3f4f6',
            color: '#374151',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
          onClick={() => console.log('サンプルボタン2がクリックされました')}
        >
          サンプルボタン2
        </button>
      </div>
    </div>
  );
};

// DOM要素を取得してReactアプリをマウント
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error('root要素が見つかりません');
}
