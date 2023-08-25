import React, { useState } from 'react'

import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import logo from '/Users/annakim/Desktop/fullstack/dnd-by-gaymnight/src/components/assets/dragon-logo.svg';

import Home from './components/Home/Home'
import PlayerBios from './components/PlayerBios/PlayerBios';
import CharacterSheetsYiuLai from './components/CharacterSheets/CharacterSheets'
// import CharacterSheetsAelith from './components/CharacterSheets/AelithCharacterSheets'
import Campaigns from './components/Campaigns/Campaigns'
// import SessionSummariesAelith from './components/Campaigns/Campaigns'
import Races from './components/Homebrewed/Races/Races'
import Classes from './components/Homebrewed/Classes/Classes'

import Kaleido from './components/Homebrewed/Classes/Kaleido'

import Animated from './components/Homebrewed/Races/Animated'

import Aravala from './components/CharacterSheets/Aravala';
import Malum from './components/CharacterSheets/Malum';
import Shiver from './components/CharacterSheets/Shiver';
import Naomi from './components/CharacterSheets/Naomi';
import Yenna from './components/CharacterSheets/Yenna';


import Rarri from './components/CharacterSheets/Rarri';
import Haze from './components/CharacterSheets/Haze'
import Kepple from './components/CharacterSheets/Kepple'
import Ssashira from './components/CharacterSheets/Ssashira'
import Vdolfnir from './components/CharacterSheets/Vdolfnir'

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
                Players
              </Nav.Link>   
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to={"/characters"}>
                Characters
              </Nav.Link>   
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to={"/campaigns"}>
                Campaigns
              </Nav.Link> 
              <NavDropdown title="Homebrewed">
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to={"/homebrewed-races"}>Races</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to={"/homebrewed-classes"}>Classes</NavDropdown.Item>    
              </NavDropdown>   
              {/* <NavDropdown title="Characters">
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to={"/yiu-lai-character-sheets"}>Character Sheets</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to={"/yiu-lai-session-summaries"}><s>Session Summaries</s></NavDropdown.Item>
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to={"/yiu-lai-NPCs"}><s>NPCs</s></NavDropdown.Item>
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to={"/yiu-lai-random-lore"}><s>Random Lore</s></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Campaigns">
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to={"/aelith-character-sheets"}>Character Sheets</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to={"/aelith-session-summaries"}><s>Session Summaries</s></NavDropdown.Item>
                 <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to={"/aelith-NPCs"}><s>NPCs</s></NavDropdown.Item>
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to={"/aelith-random-lore"}><s>Random Lore</s></NavDropdown.Item>      
              </NavDropdown> */}
             
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}> </Route>
          <Route exact path='/player-bios' element={<PlayerBios/>}> </Route>
          <Route exact path='/characters' element={<CharacterSheetsYiuLai/>}> </Route>
              <Route exact path='/haze' element={<Haze/>}> </Route>
              <Route exact path='/kepple' element={<Kepple/>}> </Route>
              <Route exact path='/rarri-pebblepocket' element={<Rarri/>}></Route>
              <Route exact path='/ssashira' element={<Ssashira/>}></Route>
              <Route exact path='/vdolfnir' element={<Vdolfnir/>}></Route>
              <Route exact path='/aravala-amonodel' element={<Aravala/>}> </Route>
              <Route exact path='/malum' element={<Malum/>}> </Route>
              <Route exact path='/shiver' element={<Shiver/>}> </Route>
              <Route exact path='/naomi' element={<Naomi/>}> </Route>
              <Route exact path='/yenna' element={<Yenna/>}> </Route>
          <Route exact path='/campaigns' element={<Campaigns/>}> </Route>
        {/* 
          <Route exact path='/aelith-character-sheets' element={<CharacterSheetsAelith/>}> </Route>
          <Route exact path='/yiu-lai-session-summaries' element={<SessionSummariesYiuLai/>}> </Route>
          <Route exact path='/aelith-session-summaries' element={<SessionSummariesAelith/>}> </Route> */}
          <Route exact path='/homebrewed-races' element={<Races/>}> </Route>
              <Route exact path='/animated' element={<Animated/>}> </Route>

          <Route exact path='/homebrewed-classes' element={<Classes/>}> </Route>
              <Route exact path='/kaleido' element={<Kaleido/>}> </Route>
        </Routes>
      </div>
    </Router>

    

  );
}

export default App;
