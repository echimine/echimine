import clsx from 'clsx';

interface Props {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'link'
    | 'body-base'
    | 'body-sm'
    | 'date';
  component?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'span'
    | 'p'
    | 'a'
    | 'div';
  weight?: 'light' | 'regular' | 'medium' | 'bold' | 'black';
  className?: string;
  theme?: 'primary' | 'secondary' | 'tercery';
  fontChoice?: 'font-archivo' | 'font-excon' | 'font-sentient';
  children: React.ReactNode;
}

export const Typographie = ({
  variant = 'body-base',
  component: Component = 'div',
  weight = 'regular',
  theme = 'primary',
  fontChoice = 'font-archivo',
  className,
  children,
}: Props) => {
  // Styles par défaut
  let variantStyles: string = '',
    colorStyles: string = '',
    weightStyles: string = '';

  // Définir les styles en fonction des props
  switch (theme) {
    case 'primary':
      colorStyles = 'text-primary';
      break;
    case 'secondary':
      colorStyles = 'text-secondary';
      break;
    case 'tercery':
      colorStyles = 'text-tercery';
      break;
  }

  switch (weight) {
    case 'light':
      weightStyles = 'font-light';
      break;
    case 'regular':
      weightStyles = 'font-normal';
      break;
    case 'medium':
      weightStyles = 'font-medium';
      break;
    case 'bold':
      weightStyles = 'font-bold';
      break;
    case 'black':
      weightStyles = 'font-black';
      break;
  }

  switch (variant) {
    case 'h1':
      variantStyles = 'text-3.5xl';
      break;
    case 'h2':
      variantStyles = 'text-3xl';

      break;
    case 'h3':
      variantStyles = 'text-2xl';

      break;
    case 'h4':
      variantStyles = 'text-xl';
      break;
    case 'h5':
      variantStyles = 'text-md';
      break;
    case 'h6':
      variantStyles = 'text-tag';
      break;
    case 'link':
      variantStyles = 'text-link';
      break;
    case 'body-base':
      variantStyles = 'text-base';
      break;
    case 'body-sm':
      variantStyles = 'text-sm';
      break;
    case 'date':
      variantStyles = 'text-date';
      break;
  }

  return (
    <Component
      className={clsx(
        variantStyles,
        colorStyles,
        weightStyles,
        fontChoice,
        className
      )}
    >
      {children}
    </Component>
  );
};
