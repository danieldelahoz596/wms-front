import Icon, { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const OrdersSvg = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em">
    <path d="m19 8-5-5-1 1 4 4h-10l4-4-1-1-5 5h-4v2h1.5l1.5 11h16l1.5-11h1.5v-2zm-10 10h-2v-6h2zm4 0h-2v-6h2zm4 0h-2v-6h2z" />
  </svg>
);

const OrdersIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={OrdersSvg} {...props} />;

export default OrdersIcon;
