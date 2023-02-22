import Icon, { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CoreProductsSvg = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    width="1em"
    height="1em"
  >
    <polygon points="1.75 5.75,1.75 14.25,1.75 14.25,14.25 14.25,14.25 5.75,10.75 1.75,5.25 1.75" />
    <path d="m8 1.75v3.5m-5.75.5h11.5" />
  </svg>
);

const CoreProductsIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={CoreProductsSvg} {...props} />;

export default CoreProductsIcon;
