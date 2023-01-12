import Icon, { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const BookSvg = () => (
  <svg viewBox="0 0 24 24">
    <path d="m22.47 18.82-1-3.86-3.15-11.59a1 1 0 0 0 -1.22-.71l-3.87 1a1 1 0 0 0 -.73-.33h-10a1 1 0 0 0 -1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8l2.2 8.22a1 1 0 0 0 1 .74 1.15 1.15 0 0 0 .26 0l4.83-1.29a1 1 0 0 0 .61-.47 1.05 1.05 0 0 0 .07-.71zm-16 .55h-3v-2h3zm0-4h-3v-6h3zm0-8h-3v-2h3zm5 12h-3v-2h3zm0-4h-3v-6h3zm0-8h-3v-2h3zm2.25-1.74 2.9-.78.52 1.93-2.9.78zm2.59 9.66-1.55-5.8 2.9-.78 1.55 5.8zm1 3.86-.52-1.93 2.9-.78.52 1.93z" />
  </svg>
);

const BookIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={BookSvg} {...props} />
);

export default BookIcon;
