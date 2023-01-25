import Icon, { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const ProfileSvg = () => (
  <svg viewBox="12 24 76 52" width="16" height="16">
    <path d="m44 50c0 1.1-.9 2-2 2h-18c-1.1 0-2-.9-2-2s.9-2 2-2h18c1.1 0 2 .9 2 2zm-6 12h-14c-1.1 0-2 .9-2 2s.9 2 2 2h14c1.1 0 2-.9 2-2s-.9-2-2-2zm4-28h-18c-1.1 0-2 .9-2 2s.9 2 2 2h18c1.1 0 2-.9 2-2s-.9-2-2-2zm46-8v48c0 1.1-.9 2-2 2h-72c-1.1 0-2-.9-2-2v-48c0-1.1.9-2 2-2h72c1.1 0 2 .9 2 2zm-4 2h-68v44h68zm-6.1 36c0 1.1-.9 2-2 2h-27.9c-1.1 0-2-.9-2-2 0-6.6 3.9-12.2 9.6-14.7-1.9-1.9-3.2-4.5-3.2-7.3 0-5.3 4.4-10 9.5-10s9.5 4.7 9.5 10c0 2.8-1.2 5.4-3.2 7.3 5.7 2.5 9.7 8.1 9.7 14.7zm-21.5-22c0 2.8 2.4 6 5.5 6s5.5-3.2 5.5-6-2.4-6-5.5-6-5.5 3.2-5.5 6zm17.4 20c-.9-5.7-5.9-10-11.8-10s-10.8 4.3-11.8 10z" />
  </svg>
);

const ProfileIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ProfileSvg} {...props} />
);

export default ProfileIcon;
