
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigator from './components/Navigator';

import Lesson6 from './components/Lesson6/Lesson6';
import Lesson7 from './components/Lesson7/Lesson7';
import Lesson9 from './components/Lesson9/Lesson9';

import PainterPage from './components/Lesson10/painter/PainterBio';
import PainterFamousPaint from './components/Lesson10/painter/PainterFamousPaint';
import PainterGallery from './components/Lesson10/painter/PainterGallery';

import Pyramid from "./components/Lesson10/wonders/Pyramid";
import ZeusStatue from "./components/Lesson10/wonders/ZeusStatue";
import ArtemisTemple from "./components/Lesson10/wonders/ArtemisTemple";
import Mausoleum from "./components/Lesson10/wonders/Mausoleum";
import Colossus from "./components/Lesson10/wonders/Colossus";
import Lighthouse from "./components/Lesson10/wonders/Ligthouse";
import HangingGardens from "./components/Lesson10/wonders/HangingGardens";
import Lesson8 from './components/Lesson8/Lesson8';


function App() {
  return <>

    <BrowserRouter>
      <Navigator></Navigator>
      <Routes>
        <Route path="/lesson6" element={<Lesson6/>}/>
        <Route path="/lesson7" element={<Lesson7/>}/>
        <Route path="/lesson8" element={<Lesson8/>}/>
        <Route path="/lesson9" element={<Lesson9/>}/>
        <Route path="/lesson10">
          <Route path="painter">
            <Route path="bio" element={<PainterPage/>}/>
            <Route path="famous-paint" element={<PainterFamousPaint/>}/>
            <Route path="gallery" element={<PainterGallery/>}/>
          </Route>
          <Route path="wonders">
            <Route path="pyramid" element={<Pyramid/>} />
            <Route path="zeus" element={<ZeusStatue />} />
            <Route path="artemis" element={<ArtemisTemple />} />
            <Route path="mausoleum" element={<Mausoleum />} />
            <Route path="colossus" element={<Colossus />} />
            <Route path="lighthouse" element={<Lighthouse />} />
            <Route path="gardens" element={<HangingGardens />} />
          </Route>
        </Route>
        <Route path="*" element={<h1>Сторінку не знайдено</h1>} />
      </Routes>
    </BrowserRouter>

  </>
}

export default App;
