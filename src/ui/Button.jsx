import { Link } from 'react-router-dom';

function Button({ children, type, disabled, to, style, onClick }) {
  const base =
    'inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide transition-colors duration-300 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 sm:px-6 sm:py-4 md:px-6 md:py-4',
    small: base + ' px-4 py-2 sm:px-5 sm:py-2.5 md:px-5 md:py-2.5 text-xs',
    round: base + ' px-2.5 py-1 sm:px-3.5 sm:py-2 md:px-3.5 md:py-2 text-sm',
    secondary:
      'inline-block text-sm text-stone-400 rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 sm:px-6 sm:py-4 md:px-6 md:py-3.5',
  };
  if (to) {
    return (
      <Link to={to} className={styles[style]}>
        {children || 'Order now'}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button type={type} className={styles[style]} onClick={onClick}>
        {children || 'Order now'}
      </button>
    );
  }

  return (
    <button type={type} className={styles[style]} disabled={disabled}>
      {children || 'Order now'}
    </button>
  );
}

export default Button;
