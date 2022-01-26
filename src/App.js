import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  return (
    <div>
      <header class = "header bg-blue">
        <Header />
      </header>

      <main>
        <Main />
      </main>

      <footer id = "footer" class = "footer text-center">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
