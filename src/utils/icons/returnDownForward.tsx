import Icon from '@ant-design/icons/lib/components/Icon';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const ReturnDownForwardSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em">
    <g fill="none" stroke="blue" strokeLinecap="round" strokeLinejoin="round">
      <path d="m400 352 64-64-64-64" strokeWidth="50" />
      <path d="m448 288h-294c-58.76 0-106-49.33-106-108v-20" strokeWidth="50" />
    </g>
  </svg>
);

const ReturnDownForwardIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={ReturnDownForwardSvg} {...props} />;

export default ReturnDownForwardIcon;
