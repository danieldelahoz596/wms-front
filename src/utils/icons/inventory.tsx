import Icon, { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const InventorySvg = () => (
  <svg viewBox="0 0 512 512" width="1em" height="1em">
    <path d="m488.6 250.2-96.6-36.2v-108.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7v108.5l-96.6 36.2c-14 5.3-23.3 18.7-23.3 33.7v110.1c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2v-110.1c0-15-9.3-28.4-23.4-33.7zm-130.6-35.4-85 31.9v-68.2l85-37zm-204-110.7 102-38.2 102 38.2v.6l-102 41.4-102-41.4zm84 291.1-85 42.5v-79.1l85-38.8zm0-112-102 41.4-102-41.4v-.6l102-38.2 102 38.2zm240 112-85 42.5v-79.1l85-38.8zm0-112-102 41.4-102-41.4v-.6l102-38.2 102 38.2z" />
  </svg>
);

const InventoryIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={InventorySvg} {...props} />;

export default InventoryIcon;
