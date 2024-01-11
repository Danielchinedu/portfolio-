
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <div className="logo-container">
            <img src="/logo.png" className="App-logo" alt="logo" />
          </div>
          <div className="menu-container">
            <input type="checkbox" id="menu-toggle" className="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
            <div className="menu">
              <button>Home</button>
              <button>About</button>
              <button>Projects</button>
              <button>Contact</button>
            </div>
          </div>
        </nav>

      </header>
      <div className="content">
        <div className="profile-column">
          <img src="/profile.jpg" className="profile-img" alt="profile" />
        </div>
        <div className="bio-column">
          <p style={{ color: 'white' }}>
            Hi, I'm Chinedu, a dedicated software developer with a passion for creating efficient and impactful code. Specializing in web development with technologies like React.js and Node.js, I love turning ideas into user-friendly applications. Constantly exploring new tech and contributing to open-source projects. Let's connect and build something amazing together! </p>
        </div>
      </div>
    </div>
  );
}

export default App;
