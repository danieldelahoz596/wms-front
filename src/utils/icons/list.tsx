import Icon, { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const ListSvg = () => (
  <svg viewBox="0 0 256 256" width="24" height="24">
    <path d="m228 128.00037a12.00028 12.00028 0 0 1 -12 12h-176a12 12 0 0 1 0-24h176a12.00028 12.00028 0 0 1 12 12zm-188-52h176a12 12 0 0 0 0-24h-176a12 12 0 1 0 0 24zm176 104h-176a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24z" />
  </svg>
);

const ListIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={ListSvg} {...props} />;

export default ListIcon;
