import Icon, { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const ManufacturerSvg = () => (
  <svg height="20" viewBox="0 0 32 32" width="20">
    <path d="m2 32h26c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2h-6c-1.104 0-2 .896-2 2v-16c0-1.104-.896-2-2-2h-6c-1.104 0-2 .896-2 2v8c0-1.104-.896-2-2-2h-6c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2zm0-2v-4h2v4zm2-12v2h-2v-2zm-2-2v-2h2v2zm2 6v2h-2v-2zm2-2v-2h2v2zm2 2v2h-2v-2zm-2-6v-2h2v2zm0 14v-4h2v4zm2-18h-2v-2h2zm-4 0h-2v-2h2zm12 18v-4h2v4zm-2-20v2h-2v-2zm-2-2v-2h2v2zm2 6v2h-2v-2zm0 4v2h-2v-2zm0 4v2h-2v-2zm2-2v-2h2v2zm2 2v2h-2v-2zm-2-6v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm2-4h-2v-2h2zm-4 0h-2v-2h2zm-2 22h2v4h-2zm12-2h-2v-2h2zm2-2h2v2h-2zm0 4h2v4h-2zm2-6h-2v-2h2zm-4 0h-2v-2h2zm-2 6h2v4h-2z" />
  </svg>
);

const ManufacturerIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={ManufacturerSvg} {...props} />;

export default ManufacturerIcon;
