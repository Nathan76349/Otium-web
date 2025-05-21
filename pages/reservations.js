// pages/reservations.js
import Header from '/components/Header';

const houses = [
  {
  name: 'Maison Provence',
  img: 'https://images.squarespace-cdn.com/content/v1/6001ce695a503d6d70ef3775/b47ca5a9-35c6-4b91-a5fe-92b719aab1b8/cassis-1.Facademer.jpg',
  description: 'Villa en pierre avec piscine privée.',
  plan: 'Essential',
  },
  {
    name: 'Riad Essaouira',
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/289360171.jpg?k=abd0445934666413d5caaf0eef8f93de97e3de309d3ca0a95c0bcea2b8380da0&o=&hp=1',
    description: 'Riad avec patio intérieur et rooftop.',
    plan: 'Liberty',
  },
  {
    name: 'Villa Toscane',
    img: 'https://www.villeinitalia.com/images/Villa_la_Colombaia_WEB/fr/San-Casciano-in-Val-di-Pesa_Chianti_Toscane_Villa_la_Colombaia_index_001_1746631936.jpg',
    description: 'Maison italienne au cœur des vignes.',
    plan: 'Liberty',
  },
];

export default function Reservations() {
  return (
    <>
      <Header />
      <main style={{
        backgroundColor: '#121212',
        color: '#C6C6C4',
        padding: '40px',
        minHeight: '100vh',
        fontFamily: "'Cinzel', serif",
      }}>
        <h1 style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '40px' }}>Nos maisons disponibles</h1>
        <div style={{
          display: 'flex',
          gap: '30px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {houses.map((house, index) => (
            <div key={index} style={{
              backgroundColor: '#1f1f1f',
              padding: '20px',
              borderRadius: '15px',
              width: '300px',
              textAlign: 'center'
            }}>
              <img src={house.img} alt={house.name} width={300} height={200} style={{ borderRadius: '10px' }} />
              <h2 style={{ fontSize: '1.5rem', margin: '15px 0 5px' }}>{house.name}</h2>
              <p>{house.description}</p>
              <p style={{
                marginTop: '10px',
                fontWeight: 'bold',
                color: house.plan === 'Liberty' ? '#FFD700' : '#C6C6C4'
              }}>
                Inclus dans : {house.plan}
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
