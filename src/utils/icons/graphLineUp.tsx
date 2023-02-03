import Icon, { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const GraphLineUpSvg = () => (
  <svg viewBox="15 19 44.27 38" width="1em" height="1em">
    <path
      d="m17 19h3v35h39v3h-42zm5 33v-5l9.6667-10.5833 14.25 6.3333 7.2699-12.7223-5.188 1.4876-2.3948-2.6076 12.176-3.4914 3.4914 12.176-3.4804-.6491-1.6007-5.582-8.6901 16.1388-15.0833-6.8333z"
      strokeLinejoin="round"
      strokeWidth=".2"
    />
  </svg>
);

const GraphLineUpIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={GraphLineUpSvg} {...props} />
);

export default GraphLineUpIcon;
