import Header from 'components/Header';

export default function Fondateur() {
  return (
    <>
      <Header />
      <main style={{
        padding: '60px 20px',
        backgroundColor: '#121212',
        color: '#C6C6C4',
        fontFamily: "'Cinzel', serif",
        minHeight: '100vh',
      }}>
        <section style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '40px',
          }}>
            Carte Fondateur Otium
          </h1>

          <p style={{
            fontSize: '1.4rem',
            lineHeight: '1.8',
            marginBottom: '50px',
          }}>
            Cette carte est réservée aux 20 premiers membres fondateurs de Otium. Elle donne droit à des privilèges exclusifs, un accès prioritaire à nos résidences, et un tarif préférentiel à vie.
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '30px',
            marginBottom: '60px',
          }}>
            <div>
              <h2 style={{
                fontSize: '1.8rem',
                marginBottom: '10px',
              }}>
                Recto de la carte
              </h2>
              {/* Remplace le src ci-dessous quand tu auras ton image PNG */}
              <img
                src="https://s10.aconvert.com/convert/p3r68-cdx67/acyex-5xaqi.jpg"
                alt="Carte Fondateur Recto"
                style={{
                  width: '300px',
                  borderRadius: '20px',
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                }}
              />
            </div>

            <div>
              <h2 style={{
                fontSize: '1.8rem',
                marginBottom: '10px',
              }}>
                Verso de la carte
              </h2>
              {/* Remplace le src ci-dessous quand tu auras ton image PNG */}
              <img
                src="https://s10.aconvert.com/convert/p3r68-cdx67/aap4v-tf8jh.jpg"
                alt="Carte Fondateur Verso"
                style={{
                  width: '300px',
                  borderRadius: '20px',
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                }}
              />
            </div>
          </div>

          <p style={{
            fontSize: '1.2rem',
            fontStyle: 'italic',
            color: '#999',
          }}>
            Si vous êtes l’un des 20 fondateurs, cette carte vous sera remise en main propre. Un symbole de confiance, de vision et de liberté.
          </p>
        </section>
      </main>
    </>
  );
}
