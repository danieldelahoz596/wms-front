import Icon from '@ant-design/icons/lib/components/Icon';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const ClockSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920" width="1em" height="1em">
    <path
      d="M1377.882 1344 903.53 988.235v-592.94h112.942v536.47l429.176 321.77-67.765 90.465ZM960 0C430.645 0 0 430.645 0 960c0 529.242 430.645 960 960 960 529.242 0 960-430.758 960-960 0-529.355-430.758-960-960-960Z"
      fillRule="evenodd"
    />
  </svg>
);

const ClockIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={ClockSvg} {...props} />;

export default ClockIcon;
