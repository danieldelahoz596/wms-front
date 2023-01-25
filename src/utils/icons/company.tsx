import Icon, { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CompanySvg = () => (
  <svg height="24" viewBox="0 0 18 24" width="18">
    <path d="m16 0h-14a2.006 2.006 0 0 0 -2 2v22h18v-22a2.006 2.006 0 0 0 -2-2zm-8 22v-4h2v4zm8 0h-4v-5a.945.945 0 0 0 -1-1h-4a.945.945 0 0 0 -1 1v5h-4v-20h14zm-10-16h-2v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4h-2v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4h-2v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z" />
  </svg>
);

const CompanyIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={CompanySvg} {...props} />
);

export default CompanyIcon;
