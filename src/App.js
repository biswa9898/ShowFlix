import Header from './components/Header';
import Footer from './components/Footer';
import Program from './components/Program';

// App Component
// Ideal place for you to setup the layout
function App() {

  // Returing JSX
  return (
    <div>
      <Header></Header>

      <div className="container mt-5">
        <div className="text-left">
          <h1>TV Shows</h1>
          <Program name="Breaking Bad"
            time="8 PM"
            category="Violence">
            I am not in danger Skyler. I am the danger!
          </Program>

          <Program name="Game of Thrones"
            time="9 PM"
            category="War">
            Don't watch the Final Season!
          </Program>

        </div>
      </div>

      <Footer />
    </div>
  );
}
export default App;
