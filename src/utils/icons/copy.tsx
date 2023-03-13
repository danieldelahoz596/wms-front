import Icon from '@ant-design/icons/lib/components/Icon';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CopySvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em">
    <path d="m320 448v40c0 13.255-10.745 24-24 24h-272c-13.255 0-24-10.745-24-24v-368c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56zm0-344v-104h-168c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-264h-104c-13.2 0-24-10.8-24-24zm120.971-31.029-65.942-65.942a24 24 0 0 0 -16.97-7.029h-6.059v96h96v-6.059a24 24 0 0 0 -7.029-16.97z" />
  </svg>
);

const CopyIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={CopySvg} {...props} />;

export default CopyIcon;
