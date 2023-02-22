import { QuestionCircleOutlined } from '@ant-design/icons';

interface IHelpLink {
  url: string;
}

const HelpLink: React.FC<IHelpLink> = ({ url }) => {
  return (
    <a style={{ color: 'rgba(95, 95, 255, 1)', fontSize: 22 }} href={url} target="_blank" rel="noreferrer">
      <QuestionCircleOutlined style={{ marginRight: 30 }} />
    </a>
  );
};

export default HelpLink;
