import Icon, { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const StockSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
    <g transform="translate(0 -1028.4)">
      <path d="m3.1875 6-2 10h2v-7h18v7h2l-2-10z" fill="#f39c12" transform="translate(0 1028.4)" />
      <path d="m3.1875 1037.4-2 14h2 18 2l-2-14z" fill="#e67e22" />
      <path d="m9 1030.4v5h-3v.9.1h.0312l5.9688 6.5 5.969-6.5.031-.1v-.9h-3v-5z" fill="#2c3e50" />
      <path d="m1.1875 1044.4v7h22v-7h-8.188c-.416 1.1-1.511 2-2.812 2-1.302 0-2.3975-.9-2.813-2h-8.1875z" fill="#f1c40f" />
      <path d="m1.1875 1051.4h22v1h-22z" fill="#f39c12" />
      <path d="m9 0v1 5.9688h-3l6 6.5312 6-6.5312h-3v-5.9688-1z" fill="#34495e" transform="translate(0 1028.4)" />
    </g>
  </svg>
);

const StockIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={StockSvg} {...props} />;

export default StockIcon;
