import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import type { ModalProps } from 'antd';

declare const ButtonTypes: ['default', 'primary', 'ghost', 'dashed', 'link', 'text'];

interface IOModalButton {
  key?: string;
  type: (typeof ButtonTypes)[number];
  btnLabel: string;
  htmlType?: 'button' | 'submit' | 'reset';
  onClick: () => void;
}

interface IOmodal {
  title: string | React.ReactNode;
  helpLink: string;
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
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Modal
      open={isOpen}
      onCancel={handleCancel}
      className="OModal"
      centered
      footer={buttons?.map((btn) => (
        <Button
          key={btn.key}
          type={btn.type}
          onClick={btn.onClick}
          htmlType={btn.htmlType}
          size="large"
        >
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
          <a
            style={{
              color: isHover ? 'rgba(0, 0, 0, 0.75)' : 'rgba(0, 0, 0, 0.45)',
            }}
            href={helpLink}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <QuestionCircleOutlined style={{ marginRight: 42 }} />
          </a>
        </div>
      }
      {...props}
    >
      {children}
    </Modal>
  );
};
