import Icon, { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const BarCodeSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em">
    <path fill="var(--ci-primary-color, currentColor)" d="M16,464H496V56H16ZM48,88H464V432H48Z" className="ci-primary" />
    <rect width="32" height="256" x="80" y="128" fill="var(--ci-primary-color, currentColor)" className="ci-primary" />
    <rect width="32" height="192" x="144" y="128" fill="var(--ci-primary-color, currentColor)" className="ci-primary" />
    <rect width="32" height="256" x="208" y="128" fill="var(--ci-primary-color, currentColor)" className="ci-primary" />
    <rect width="32" height="192" x="272" y="128" fill="var(--ci-primary-color, currentColor)" className="ci-primary" />
    <rect width="32" height="192" x="336" y="128" fill="var(--ci-primary-color, currentColor)" className="ci-primary" />
    <rect width="32" height="256" x="400" y="128" fill="var(--ci-primary-color, currentColor)" className="ci-primary" />
    <rect width="32" height="32" x="144" y="352" fill="var(--ci-primary-color, currentColor)" className="ci-primary" />
    <rect width="32" height="32" x="272" y="352" fill="var(--ci-primary-color, currentColor)" className="ci-primary" />
    <rect width="32" height="32" x="336" y="352" fill="var(--ci-primary-color, currentColor)" className="ci-primary" />
  </svg>
);

const BarCodeIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={BarCodeSvg} {...props} />;

export default BarCodeIcon;
