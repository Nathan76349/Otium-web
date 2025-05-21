import Link from 'next/link';

export default function NavLink({ href, children }) {
  return (
    <Link href={href} style={{
      color: '#C6C6C4',
      textDecoration: 'none',
      fontWeight: '700',
      fontFamily: "'Cinzel', serif",
      fontSize: '1.1rem',
      padding: '8px 12px',
      borderRadius: '8px',
      transition: 'background-color 0.3s',
      display: 'flex',
      alignItems: 'center',
    }}
    >
      {children}
    </Link>
  );
}
