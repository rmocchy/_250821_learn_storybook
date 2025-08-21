import React from 'react';
import Modal from 'react-modal';
import './Modal.css';

export interface ModalProps {
  /** モーダルが表示されているかどうか */
  isOpen: boolean;
  /** モーダルを閉じる際のコールバック関数 */
  onClose: () => void;
  /** モーダルのタイトル */
  title?: string;
  /** モーダルの内容 */
  children?: React.ReactNode;
  /** 確認ボタンのテキスト */
  confirmText?: string;
  /** キャンセルボタンのテキスト */
  cancelText?: string;
  /** 確認ボタンクリック時のコールバック */
  onConfirm?: () => void;
  /** キャンセルボタンクリック時のコールバック */
  onCancel?: () => void;
}

// アプリ要素を設定（Storybook・Vite環境対応）
if (typeof document !== 'undefined') {
  const appElement = document.querySelector('#storybook-root, #root') as HTMLElement || document.body;
  Modal.setAppElement(appElement);
}

export const MyModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title = 'モーダルタイトル',
  children,
  confirmText = '確認',
  cancelText = 'キャンセル',
  onConfirm,
  onCancel,
}) => {
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-content"
      overlayClassName="modal-overlay"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      contentLabel={title}
    >
      <div className="modal-header">
        <h2 className="modal-title">{title}</h2>
        <button className="modal-close-button" onClick={onClose}>
          ×
        </button>
      </div>
      
      <div className="modal-body">
        {children || (
          <p>ここにモーダルの内容が表示されます。</p>
        )}
      </div>
      
      <div className="modal-footer">
        <button 
          className="modal-button modal-button-secondary" 
          onClick={handleCancel}
        >
          {cancelText}
        </button>
        <button 
          className="modal-button modal-button-primary" 
          onClick={handleConfirm}
        >
          {confirmText}
        </button>
      </div>
    </Modal>
  );
};
