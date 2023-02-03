import Icon, { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const BiggestTicketsSvg = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em">
    <path d="m0 0h24v24h-24z" fill="none" />
    <path d="m21 3a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5v5.5a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1-1v-5.5a2.5 2.5 0 1 0 0-5v-5.5a1 1 0 0 1 1-1z" />
  </svg>
);

const BiggestTicketsIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={BiggestTicketsSvg} {...props} />
);

export default BiggestTicketsIcon;
