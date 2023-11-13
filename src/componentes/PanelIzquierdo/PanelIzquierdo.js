import './PanelIzquierdo.css';
import profile from './profile.png';
import Listas from '../Listas/Listas';

const PanelIzquierdo = () => {
    return(
       <div class="panel">
         <div class="foto-perfil">
            <img src={profile} />
         </div>
         <Listas />
       </div>
    );
}

export default PanelIzquierdo;