import Icon from '@ant-design/icons/lib/components/Icon';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CaretSortSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 32 32" viewBox="0 0 32 32" width="1em" height="1em">
    <path d="m24 24-8 8-8-8z" />
    <path d="m8 8 8-8 8 8z" />
    <path d="m0 0h32v32h-32z" fill="none" />
  </svg>
);

const CaretSortIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={CaretSortSvg} {...props} />;

export default CaretSortIcon;
