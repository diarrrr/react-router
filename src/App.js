import SideNav from './component/Side';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Bootstrap from './component/FrontEnd/BOOTSTRAP';
import Css from './component/FrontEnd/CSS';
import Html from './component/FrontEnd/HTML';
import Fundamental from './component/GIT/FUNDAMENTAL';
import Gui from './component/GIT/GUI';
import Intro from './component/GIT/INTRO';
import ControlFlow from './component/JavaScript/CONTROLFLOW';
import Function from './component/JavaScript/FUNCTION';
import StructurData from './component/JavaScript/STRUCTURDATA'


function App() {
  return (
        <>
        <SideNav/>
        <Routes>
          <Route exact path='/' element={<SideNav />} />
          <Route path='/GIT/Fundamental' element={<Fundamental />} />
          <Route path='/GIT/Gui' element={<Gui />} />
          <Route path='/GIT/Intro' element={<Intro />} />
          <Route path='/FrontEnd/Html' element={<Html />} />
          <Route path='/FrontEnd/Css' element={<Css />} />
          <Route path='/FrontEnd/Bootstrap' element={<Bootstrap />} />
          <Route path='/JavaScript/Function' element={<Function />} />
          <Route path='/JavaScript/ControlFlow' element={<ControlFlow />} />
          <Route path='/JavaScript/StructurData' element={<StructurData />} />
        </Routes>
        
        </>     
  );
}


export default App;
