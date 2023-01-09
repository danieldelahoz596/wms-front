import { Button } from 'antd';

export interface IOButton {
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed';
  onClick?: (event?: any) => void;
  style?: object;
  btnText: any;
  disabled?: boolean;
  hidden?: boolean;
  size?: any;
  bordered?: boolean;
}

export const OButton: React.FC<IOButton> = ({
  type,
  onClick,
  style,
  btnText,
  disabled = false,
  hidden,
  size,
  bordered,
}) => {
  return hidden ? null : typeof btnText === 'string' ? (
    <Button
      type={type}
      size={size}
      onClick={onClick}
      style={{
        marginRight: '5px',
        marginTop: '5px',
        border: bordered ? '1px solid #AFB4FF' : '',
        color: '#5F5FFF !important',
        ...style,
      }}
      disabled={disabled}
    >
      {btnText}
    </Button>
  ) : (
    btnText
  );
};
