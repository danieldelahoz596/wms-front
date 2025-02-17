import type { ModalProps } from 'antd';
import { Button, Modal } from 'antd';
import React from 'react';
import HelpLink from '../HelpLink';

declare const ButtonTypes: ['default', 'primary', 'ghost', 'dashed', 'link', 'text'];

interface IOModalButton {
  key?: string;
  type: (typeof ButtonTypes)[number];
  btnLabel: string | React.ReactNode;
  htmlType?: 'button' | 'submit' | 'reset';
  onClick: () => void;
}

interface IOmodal {
  title: string | React.ReactNode;
  helpLink?: string;
  isOpen: boolean;
  handleCancel?: () => void;
  buttons?: IOModalButton[];
  children: React.ReactElement;
  width?: number;
  centered?: boolean;
  className?: string;
  forceRender?: boolean;
}

export const OModal: React.FC<IOmodal & ModalProps> = ({
  title,
  isOpen,
  handleCancel,
  buttons,
  children,
  helpLink,
  ...props
}) => {
  return (
    <Modal
      open={isOpen}
      onCancel={handleCancel}
      className="OModal"
      centered
      footer={buttons?.map((btn) => (
        <Button key={btn.key} type={btn.type} onClick={btn.onClick} htmlType={btn.htmlType} size="large">
          {btn.btnLabel}
        </Button>
      ))}
      title={
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>{title}</div>
          {helpLink && <HelpLink url={helpLink} />}
        </div>
      }
      {...props}
    >
      {children}
    </Modal>
  );
};
