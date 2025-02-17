import Icon from '@ant-design/icons/lib/components/Icon';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const NoteEditSvg = () => (
  <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36" width="1em" height="1em">
    <path d="m28 30h-22v-22h13.22l2-2h-15.22a2 2 0 0 0 -2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-15l-2 2z" />
    <path d="m33.53 5.84-3.37-3.37a1.61 1.61 0 0 0 -2.28 0l-13.71 13.79-1.11 4.81a1.61 1.61 0 0 0 1.57 1.93 1.69 1.69 0 0 0 .37 0l4.85-1.07 13.68-13.81a1.61 1.61 0 0 0 0-2.28zm-14.72 14.24-3.66.81.85-3.63 10.32-10.39 2.82 2.82zm11.46-11.52-2.82-2.82 1.55-1.58 2.84 2.84z" />
    <path d="m0 0h36v36h-36z" fill="none" />
  </svg>
);

const NoteEditIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={NoteEditSvg} {...props} />;

export default NoteEditIcon;
