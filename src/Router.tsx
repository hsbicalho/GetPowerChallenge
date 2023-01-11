import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Simulation1 from './pages/Simulation1'
import Simulation2 from './pages/Simulation2'
import SimulationLoading from './pages/SimulationLoading'
 export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/simulation1" element={<Simulation1/>} ></Route>
            <Route path="/simulation2" element={<Simulation2/>} ></Route>
            <Route path="/simulation3" element={<SimulationLoading/>} ></Route>
        </Routes>
    )
 }