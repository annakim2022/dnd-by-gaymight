import React, { useState } from 'react'

import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import logo from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/dragon-logo.svg';

import Home from './components/Home/Home'
import PlayerBios from './components/PlayerBios/PlayerBios';
import CharacterSheetsYiuLai from './components/CharacterSheets/YiuLaiCharacterSheets'
import CharacterSheetsAelith from './components/CharacterSheets/AelithCharacterSheets'
import SessionSummariesYiuLai from './components/SessionSummaries/SessionSummariesYiuLai'
import SessionSummariesAelith from './components/SessionSummaries/SessionSummariesAelith'
import HomebrewedRaces from './components/Homebrewed/Races/HomebrewedRaces'
import HomebrewedClasses from './components/Homebrewed/Classes/HomebrewedClasses'

import Kaleido from './components/Homebrewed/Classes/Kaleido'

import Animated from './components/Homebrewed/Races/Animated'

import Aravala from './components/CharacterSheets/AelithCharacters/Aravala';
import Malum from './components/CharacterSheets/AelithCharacters/Malum';
import Shiver from './components/CharacterSheets/AelithCharacters/Shiver';
import Naomi from './components/CharacterSheets/AelithCharacters/Naomi';
import Yenna from './components/CharacterSheets/AelithCharacters/Yenna';
import Valista from './components/CharacterSheets/AelithCharacters/Valista';


import Rarri from './components/CharacterSheets/YiuLaiCharacters/Rarri';
import Haze from './components/CharacterSheets/YiuLaiCharacters/Haze'
import Kepple from './components/CharacterSheets/YiuLaiCharacters/Kepple'
import Kizah from './components/CharacterSheets/YiuLaiCharacters/Kizah'
import Ssashira from './components/CharacterSheets/YiuLaiCharacters/Ssashira'
import Vdolfnir from './components/CharacterSheets/YiuLaiCharacters/Vdolfnir'

function App() {

  const [expanded, setExpanded] = useState(false);

  return (
    <Router>
      <div className='nav-area'>  
        <Navbar expanded={expanded} collapseOnSelect expand="md" bg="maroon" variant="dark" fixed="top">
          <Container fluid>
          <Navbar.Brand className="brand"> 
              <img className="logo" src={logo} alt={"logo"}/>
              D&amp;D by Gaymnight
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>      
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to={"/"}>
                Home
              </Nav.Link>  
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to={"/player-bios"}>
                Player Bios
              </Nav.Link>      
              <NavDropdown title="Yiu Lai">
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to={"/yiu-lai-character-sheets"}>Character Sheets</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to={"/yiu-lai-session-summaries"}><s>Session Summaries</s></NavDropdown.Item>
                {/* <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to={"/yiu-lai-NPCs"}><s>NPCs</s></NavDropdown.Item>
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to={"/yiu-lai-random-lore"}><s>Random Lore</s></NavDropdown.Item> */}
              </NavDropdown>
              <NavDropdown title="Aelith">
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to={"/aelith-character-sheets"}>Character Sheets</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to={"/aelith-session-summaries"}><s>Session Summaries</s></NavDropdown.Item>
                {/* <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to={"/aelith-NPCs"}><s>NPCs</s></NavDropdown.Item>
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to={"/aelith-random-lore"}><s>Random Lore</s></NavDropdown.Item>       */}
              </NavDropdown>
              <NavDropdown title="Homebrewed">
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to={"/homebrewed-races"}>Races</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to={"/homebrewed-classes"}>Classes</NavDropdown.Item>    
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}> </Route>
          <Route exact path='/player-bios' element={<PlayerBios/>}> </Route>
          <Route exact path='/yiu-lai-character-sheets' element={<CharacterSheetsYiuLai/>}> </Route>
              <Route exact path='/haze' element={<Haze/>}> </Route>
              <Route exact path='/kepple' element={<Kepple/>}> </Route>
              <Route exact path='/kizah' element={<Kizah/>}> </Route>
              <Route exact path='/rarri-pebblepocket' element={<Rarri/>}></Route>
              <Route exact path='/ssashira' element={<Ssashira/>}></Route>
              <Route exact path='/vdolfnir' element={<Vdolfnir/>}></Route>

          <Route exact path='/aelith-character-sheets' element={<CharacterSheetsAelith/>}> </Route>
              <Route exact path='/aravala-amonodel' element={<Aravala/>}> </Route>
              <Route exact path='/malum' element={<Malum/>}> </Route>
              <Route exact path='/shiver' element={<Shiver/>}> </Route>
              <Route exact path='/naomi' element={<Naomi/>}> </Route>
              <Route exact path='/valista' element={<Valista/>}> </Route>
              <Route exact path='/yenna' element={<Yenna/>}> </Route>

          <Route exact path='/yiu-lai-session-summaries' element={<SessionSummariesYiuLai/>}> </Route>
          <Route exact path='/aelith-session-summaries' element={<SessionSummariesAelith/>}> </Route>
          <Route exact path='/homebrewed-races' element={<HomebrewedRaces/>}> </Route>
              <Route exact path='/animated' element={<Animated/>}> </Route>

          <Route exact path='/homebrewed-classes' element={<HomebrewedClasses/>}> </Route>
              <Route exact path='/kaleido' element={<Kaleido/>}> </Route>
        </Routes>
      </div>
    </Router>

    

  );
}

export default App;
