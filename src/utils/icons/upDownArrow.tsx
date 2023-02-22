import Icon from '@ant-design/icons/lib/components/Icon';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const UpDownArrowSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
    <path d="m10 8h-4l6-6 6 6h-4v8h4l-6 6-6-6h4z" />
  </svg>
);

const UpDownArrowIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={UpDownArrowSvg} {...props} />;

export default UpDownArrowIcon;
