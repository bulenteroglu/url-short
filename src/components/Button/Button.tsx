import clsx from 'clsx';

interface Props {
  buttonText: string;
  type: 'primary' | 'secondary';
  borderRadiusSize: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  onClick(): void;
}

const classes = {
  base: 'px-5 py-3 ease-in-out transition duration-300 font-bold',
  borderRadius: {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  },
  variant: {
    primary: 'bg-primary-cyan text-primary-white hover:bg-opacity-50',
    secondary: 'text-neutral-light hover:text-neutral-darkest',
  },
};

export default function Button(props: Props) {
  const { buttonText, borderRadiusSize, type, onClick } = props;
  return (
    <button
      onClick={() => onClick()}
      className={clsx(
        classes.base,
        classes.borderRadius[borderRadiusSize],
        classes.variant[type]
      )}
    >
      {buttonText}
    </button>
  );
}
