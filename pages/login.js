// pages/login.js
import Header from '../components/Header'; // si le fichier est dans pages/

export default function Login() {
  return (
    <>
      <Header />
      <main style={{ padding: '40px', maxWidth: '400px', margin: 'auto' }}>
        <h2>Connexion</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mot de passe" />
          <button type="submit">Se connecter</button>
        </form>
      </main>
    </>
  );
}
