import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Home from './components/Home/Home'
import PlayerBios from './components/PlayerBios/PlayerBios';
import CharacterSheetsYiuLai from './components/CharacterSheets/CharacterSheetsYiuLai'
import CharacterSheetsAelith from './components/CharacterSheets/CharacterSheetsAelith'
import SessionSummariesYiuLai from './components/SessionSummaries/SessionSummariesYiuLai'
import SessionSummariesAelith from './components/SessionSummaries/SessionSummariesAelith'
import HomebrewedRaces from './components/Homebrewed/HomebrewedRaces'
import HomebrewedClasses from './components/Homebrewed/HomebrewedClasses'
import Navbar from './components/Navbar';

// serving as a Router
function App() {
  return (

  <div>
      <div className='nav-area'>
          <Navbar />
      </div>


      <Router>
          <Routes>
          <Route exact path='/' element={<Home/>}> </Route>
          <Route exact path='/player-bios' element={<PlayerBios/>}> </Route>
          <Route exact path='/yiu-lai-character-sheets' element={<CharacterSheetsYiuLai/>}> </Route>
          <Route exact path='/aelith-character-sheets' element={<CharacterSheetsAelith/>}> </Route>
          <Route exact path='/session-summaries-yiu-lai' element={<SessionSummariesYiuLai/>}> </Route>
          <Route exact path='/session-summaries-aelith' element={<SessionSummariesAelith/>}> </Route>
          <Route exact path='/homebrewed-races' element={<HomebrewedRaces/>}> </Route>
          <Route exact path='/homebrewed-classes' element={<HomebrewedClasses/>}> </Route>
          </Routes>
      </Router>
    
</div>
    
    

  );
}

export default App;
