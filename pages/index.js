import Header from '../components/Header'; // si le fichier est dans pages/
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main style={{
        padding: '40px',
        textAlign: 'center',
        backgroundColor: '#121212',
        minHeight: '100vh',
        color: '#C6C6C4',
        fontFamily: "'Cinzel', serif",
      }}>
        <section style={{ marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '20px' }}>Bienvenue chez Otium</h1>
          <p style={{ fontSize: '1.5rem', maxWidth: '600px', margin: '0 auto 30px auto' }}>
            La nouvelle façon de profiter dune résidence secondaire de luxe
          </p>
          <div>
            <Link href="/reservations" passHref>
              <button style={{
                backgroundColor: '#C6C6C4',
                color: '#121212',
                border: 'none',
                borderRadius: '30px',
                padding: '15px 40px',
                fontSize: '1.2rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#AFAFAF'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C6C6C4'}
              >
                Voir nos maisons
              </button>
            </Link>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Nos maisons</h2>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap',
          }}>
            <img
              src="https://media.vrbo.com/lodging/40000000/39530000/39529700/39529622/2b3e976c.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
              alt="Maison 1"
              style={{ width: '350px', height: '220px', borderRadius: '15px', objectFit: 'cover' }}
            />
            <img
              src="https://www.sejour-maroc.com/wp-content/uploads/2024/10/villa-Ania-01-1140x760.jpg"
              alt="Maison 2"
              style={{ width: '350px', height: '220px', borderRadius: '15px', objectFit: 'cover' }}
            />
            <img
              src="https://www.sejour-maroc.com/wp-content/uploads/2024/08/villa-marrakech-grace_1.webp"
              alt="Maison 3"
              style={{ width: '350px', height: '220px', borderRadius: '15px', objectFit: 'cover' }}
            />
          </div>
        </section>

        <section style={{ marginTop: '70px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '25px' }}>Pourquoi choisir Otium ?</h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            fontSize: '1.3rem',
            lineHeight: '1.8',
            textAlign: 'left',
          }}>
            <li>✔️ Maisons de luxe disponibles partout</li>
            <li>✔️ Abonnement flexible et transparent</li>
            <li>✔️ Véhicules inclus avec certaines formules</li>
          </ul>
        </section>
      </main>
    </>
  );
}
