import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import PanelIzquierdo from './componentes/PanelIzquierdo/PanelIzquierdo';
import TableroPrincipal from './componentes/TableroPrincipal/TableroPrincipal';



function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="paneles">
        <PanelIzquierdo />
        <TableroPrincipal />
      </div>
      
    </div>
  );
}

export default App;
