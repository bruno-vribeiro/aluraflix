import Header from "./componentes/Header";
import logo from "../src/logo512.png"
import Footer from "./componentes/Footer";


function App() {
  return (
    <div className="App">
      <Header texto='Novo Video' logo={logo} />
      <Footer />
    </div>
  );
}

export default App;
