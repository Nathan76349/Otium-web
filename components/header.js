import Link from 'next/link';

export default function Header() {
  return (
    <header style={{
      backgroundColor: '#000',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #333',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <Link href="/" legacyBehavior passHref>
        <a style={{
          color: '#C6C6C4',
          fontFamily: "'Cinzel', serif",
          fontSize: '1.8rem',
          fontWeight: 800,
          margin: 0,
          cursor: 'pointer',
          textDecoration: 'none',
        }}>
          Otium
        </a>
      </Link>

      <nav style={{ display: 'flex', gap: '30px' }}>
        {[
          { label: 'Maisons', href: '/reservations' },
          { label: 'Fondateur', href: '/fondateur' },
          { label: 'Connexion', href: '/login' },
        ].map((item) => (
          <Link key={item.href} href={item.href} legacyBehavior passHref>
            <a
              style={{
                color: '#C6C6C4',
                fontFamily: "'Cinzel', serif",
                fontSize: '1.1rem',
                fontWeight: 600,
                margin: 0,
                cursor: 'pointer',
                transition: 'opacity 0.3s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {item.label}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
}
