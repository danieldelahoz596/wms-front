import { Button } from 'antd';

export interface IOButton {
  key?: string | number;
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed';
  onClick?: (event?: any) => void;
  style?: object;
  btnText: any;
  disabled?: boolean;
  hidden?: boolean;
  size?: any;
  className?: string;
  bordered?: boolean;
  icon?: object;
}

export const OButton: React.FC<IOButton> = ({
  type = 'primary',
  onClick,
  style,
  btnText,
  disabled = false,
  hidden,
  size = 'small',
  className,
  bordered,
  icon,
}) => {
  return hidden ? null : btnText.type?.name === 'Dropdown' ? (
    btnText
  ) : (
    <Button
      type={type}
      size={size}
      onClick={onClick}
      style={{
        border: bordered ? '1px solid #AFB4FF' : '',
        color: '#5F5FFF !important',
        ...style,
      }}
      disabled={disabled}
      className={className}
      icon={icon}
    >
      {btnText}
    </Button>
  );
};
