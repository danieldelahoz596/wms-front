import React from 'react';
import { Button, Modal } from 'antd';

declare const ButtonTypes: ['default', 'primary', 'ghost', 'dashed', 'link', 'text'];

interface IOModalButton {
  key?: string;
  type: (typeof ButtonTypes)[number];
  btnLabel: string;
  htmlType?: 'button' | 'submit' | 'reset';
  onClick: () => void;
}

interface IOmodal {
  title?: string;
  isOpen: boolean;
  handleCancel: () => void;
  buttons: IOModalButton[];
  children: React.ReactElement;
  width?: number;
  centered?: boolean;
  className?: string;
}

export const OModal: React.FC<IOmodal> = (props) => {
  const { isOpen, handleCancel, buttons, children } = props;

  return (
    <Modal
      open={isOpen}
      onCancel={handleCancel}
      footer={buttons?.map((btn) => (
        <Button key={btn.key} type={btn.type} onClick={btn.onClick} htmlType={btn.htmlType}>
          {btn.btnLabel}
        </Button>
      ))}
      {...props}
    >
      {children}
    </Modal>
  );
};
