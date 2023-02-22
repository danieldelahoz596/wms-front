import Icon, { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const LaunchSvg = () => (
  <svg fill="none" viewBox="0 0 24 24" width="1em" height="1em">
    <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d="m17 2h5v5" />
      <path d="m21 13v6c0 1.1046-.8954 2-2 2h-14c-1.10457 0-2-.8954-2-2v-14c0-1.10457.89543-2 2-2h6" />
      <path d="m13 11 8.5-8.5" />
    </g>
  </svg>
);

const LaunchIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={LaunchSvg} {...props} />;

export default LaunchIcon;
