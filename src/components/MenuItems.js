import Dropdown from "./Dropdown";
import { useState, useEffect, useRef } from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes
  } from 'react-router-dom'
  import Home from './Home/Home'
  import PlayerBios from './PlayerBios/PlayerBios';
  import CharacterSheets from './CharacterSheets/CharacterSheetsYiuLai'
  import Campaigns from './SessionSummaries/SessionSummariesAelith'
  import Homebrewed from './Homebrewed/HomebrewedRaces'

const MenuItems = ({ items, depthLevel }) => {
const [dropdown, setDropdown] = useState(false);

let ref = useRef();
    useEffect(() => {
    const handler = (event) => {
     if (dropdown && ref.current && !ref.current.contains(event.target)) {
      setDropdown(false);
     }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
     // Cleanup the event listener
     document.removeEventListener("mousedown", handler);
     document.removeEventListener("touchstart", handler);
    };
   }, [dropdown]);

   const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
   };
   
   const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
   };
   
 return (
  <li className="menu-items" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
   {items.submenu ? (
    <>
     <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"}
      onClick={() => setDropdown((prev) => !prev)}>
      {items.title}{" "}
      {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
     </button>
     <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown}/>
    </>
   ) : (
    <a href={'/'+ items.path}>{items.title}</a>
   )}
  </li>
 );
};

export default MenuItems;