import Icon, { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const AccountingSvg = () => (
  <svg viewBox="0 0 100 100" width="16" height="16">
    <path d="m10 26.667v46.667h80v-46.667zm6.667 39.999v-10c5.521 0 10 4.48 10 10zm0-23.333v-10h10c0 5.521-4.479 10-10 10zm33.333 20.001c-5.521 0-10-5.977-10-13.333 0-7.363 4.479-13.334 10-13.334s10 5.97 10 13.333c0 7.357-4.479 13.334-10 13.334zm33.333 3.332h-10c0-5.52 4.479-10 10-10zm0-23.333c-5.521 0-10-4.479-10-10h10z" />
  </svg>
);

const AccountingIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={AccountingSvg} {...props} />
);

export default AccountingIcon;
