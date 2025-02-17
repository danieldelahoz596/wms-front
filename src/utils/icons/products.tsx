import Icon, { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const ProductsSvg = () => (
  <svg viewBox="0 0 512 512" width="1em" height="1em">
    <path d="m0 448v-384h18v384zm26.857-.273v-383.727h9.143v383.727zm27.143 0v-383.727h8.857v383.727zm44.857 0v-383.727h8.857v383.727zm36 0v-383.727h17.714v383.727zm44.857 0v-383.727h8.857v383.727zm18 0v-383.727h8.857v383.727zm18 0v-383.727h8.857v383.727zm35.715 0v-383.727h18v383.727zm44.857 0v-383.727h18v383.727zm35.999 0v-383.727h18.001v383.727zm36.001 0v-383.727h18.001v383.727zm26.857 0v-383.727h18v383.727zm45.143 0v-383.727h26.857v383.727zm35.714 0v-383.727h9.143v383.727zm18 .273v-384h18v384z" />
  </svg>
);

const ProductsIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={ProductsSvg} {...props} />;

export default ProductsIcon;
