import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { MyModal } from './Modal';

const meta: Meta<typeof MyModal> = {
  title: 'Example/Modal',
  component: MyModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'モーダルが表示されているかどうか',
    },
    title: {
      control: 'text',
      description: 'モーダルのタイトル',
    },
    confirmText: {
      control: 'text',
      description: '確認ボタンのテキスト',
    },
    cancelText: {
      control: 'text',
      description: 'キャンセルボタンのテキスト',
    },
    children: {
      control: 'text',
      description: 'モーダルの内容',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// インタラクティブな例（ボタンでモーダルを開く）
export const InteractiveModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <CustomBtn
        text="モーダルを開く"
        onClick={() => setIsOpen(true)}
      />
      <br/>
      <br/>
      <CustomBtn text='dammy1'/>
      <br/>
      <br/>
      <CustomBtn text='dammy2'/>
      <br/>
      <br/>
      <CustomBtn text='dammy3'/>
      <br/>
      <br/>
      <CustomBtn text='dammy4'/>
      <br/>
      <br/>
      <CustomBtn text='dammy5'/>
      
      <MyModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="インタラクティブモーダル"
        confirmText="了解"
        cancelText="閉じる"
        onConfirm={() => {
          console.log('了解ボタンがクリックされました');
          setIsOpen(false);
        }}
        onCancel={() => {
          console.log('閉じるボタンがクリックされました');
          setIsOpen(false);
        }}
      >
        <p>このモーダルはボタンクリックで開かれました。</p>
        <p>オーバーレイをクリックするか、ボタンを押して閉じることができます。</p>
      </MyModal>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveModalExample />,
  parameters: {
    docs: {
      description: {
        story: 'ボタンをクリックしてモーダルを開く実際の使用例です。',
      },
    },
  },
};

const CustomBtn = ({text, onClick}:{text?: string, onClick?:()=>void}) => (
  <button
    onClick={onClick}
    style={{
      padding: '10px 20px',
      backgroundColor: 'gray', // green
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '16px',
    }}
  >
    {text || 'カスタムボタン'}
  </button>
);