import { Button } from 'antd';

export interface IOButton {
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed';
  onClick?: (event?: any) => void;
  style?: object;
  btnText: any;
  disabled?: boolean;
  hidden?: boolean;
  size?: any;
  className?: string;
  bordered?: boolean;
}

export const OButton: React.FC<IOButton> = ({
  type="primary",
  onClick,
  style,
  btnText,
  disabled=false,
  hidden,
  size="small",
  className,
  bordered,
}) => {
  return hidden ? null : typeof btnText === 'string' ? (
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
    >
      {btnText}
    </Button>
  ) : (
    btnText
  );
};
