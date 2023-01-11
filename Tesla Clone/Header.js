import React from 'react'
  
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
function Header() {
    const[menu, setmenu]  = useState(false)
        function ShowList(e){
        e.preventDefault();
        setmenu(true)
}

    function HideLIst (){
        setmenu(false)
    }
  return (
    <header>

        
            
    <img src = 'tesla images/logo.svg'/>
    <nav>
        <ul>
            <li><a href="">Model S</a></li>
            <li><a href="">Model 3 </a></li>
            <li><a href="">Model X</a></li>
            <li><a href="">Model Y</a></li>
            <li><a href="">Solar Roof</a></li>
            <li><a href="">Solar Panels</a></li>
        </ul>
    </nav>
    <nav>
        <ul>
            <li><a href="">Shop</a></li>
            <li><a href="">Account </a></li>
            <li><a href="" onClick={ShowList}>Menu</a></li>
        </ul>
    </nav>
    <ul className='sidebar' style={{right:(menu===false)? '-200px':'0'}}>
        <CloseIcon onClick = {HideLIst} className = 'Licon'/>
        <li> <a href=''>Existing Inventory</a></li>
        <li> <a href=''>Used Inventory</a></li>
        <li> <a href=''>Trade-IN</a></li>
        <li> <a href=''>Demo Drive</a></li>
        <li> <a href=''>Insurance</a></li>
        <li> <a href=''>CyberTruck</a></li>
        <li> <a href=''>Roadster</a></li>
        <li> <a href=''>Semi</a></li>
        <li> <a href=''>Charging</a></li>
        <li> <a href=''>Powerwall</a></li>
        <li> <a href=''>Comercial Energy</a></li>
        <li> <a href=''>Utilties</a></li>
        <li> <a href=''>Find Us</a></li>
        <li> <a href=''>About Us</a></li>
        
    </ul>

</header>
  )
}

export default Header