import { Link } from 'react-router-dom';
import { config } from '../config';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  linkTo?: string;
  variant?: 'default' | 'white';
}

export const Logo = ({ size = 'md', linkTo, variant = 'default' }: LogoProps) => {
  const sizes = {
    sm: { top: '1.25rem', bottom: '0.62rem', spacing: '0.18em' },
    md: { top: '1.5rem', bottom: '0.75rem', spacing: '0.2em' },
    lg: { top: '2.6rem', bottom: '1.2rem', spacing: '0.22em' },
  };

  const s = sizes[size];
  const topColor = variant === 'white' ? '#ffffff' : config.colors.primary;
  const bottomColor = variant === 'white' ? 'rgba(255,255,255,0.85)' : config.colors.darkPink;

  const inner = (
    <div className="flex flex-col items-center leading-none select-none">
      <span
        style={{
          fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
          fontSize: s.top,
          letterSpacing: '0.08em',
          color: topColor,
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        Beatrix
      </span>
      <span
        style={{
          fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
          fontSize: s.bottom,
          letterSpacing: s.spacing,
          color: bottomColor,
          fontWeight: 400,
          lineHeight: 1.4,
          textTransform: 'uppercase',
        }}
      >
        Nails &amp; Beauty
      </span>
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="hover:opacity-80 transition-opacity">
        {inner}
      </Link>
    );
  }

  return inner;
};
