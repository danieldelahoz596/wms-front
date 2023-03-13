import Icon from '@ant-design/icons/lib/components/Icon';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const BranchSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em">
    <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <circle cx="4" cy="7" r="2" />
      <circle cx="20" cy="7" r="2" />
      <circle cx="20" cy="17" r="2" />
      <path d="m18 7h-12" />
      <path d="m7 7c1.65685 0 3 1.34315 3 3v5c0 1.1046.8954 2 2 2h6" />
    </g>
  </svg>
);

const BranchIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={BranchSvg} {...props} />;

export default BranchIcon;
