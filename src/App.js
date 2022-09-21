import Navigation from './Navbar';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Navigation />
        <div className="content">
            <Home />
        </div>
    </div>
  );
}

export default App;
