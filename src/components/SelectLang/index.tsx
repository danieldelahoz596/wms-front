import { Button } from 'antd';
import { FormattedMessage, getLocale, setLocale } from '@umijs/max';

const SelectLang: React.FC = () => {
  const changLang = () => {
    const locale = getLocale();
    if (!locale || locale === 'zh-CN') {
      setLocale('en-US');
    } else {
      setLocale('zh-CN');
    }
  };
  return (
    <Button
      size="small"
      style={{
        margin: '0 8px',
      }}
      onClick={changLang}
    >
      <FormattedMessage id="navBar.lang" />
    </Button>
  );
};

export default SelectLang;
