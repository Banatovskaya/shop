import {NavLink,} from "react-router-dom";
import './menu.css';
import logo from './logo.png';
import { useState } from "react";

const  UsersMenu = () => {

    const [menuState, setMenuState] = useState('close');

    const changeActive = (isActive)=>{
        if (isActive) {
            return {fontWeight: 'bold'}
            } 
    };
    const clickHamburger = () => {
        if (menuState === 'open'){
            setMenuState ('close')
        } else setMenuState('open');
   };
   
    return (
        <div className="menu_wrap">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="hamburger_wrap" onClick={()=>clickHamburger()}>
                {menuState === 'open' ? <div className='crossHamburger'/> : <div className='hamburger'/>}

            </div>  
            <nav>
                {menuState === 'open' ? <div className='mobileMenuOpen'> 
                <div className="menu_item" >
                        <NavLink style={({isActive}) => changeActive(isActive)} to="/">главная</NavLink>
                    </div>
                    <div className="menu_item">
                        <NavLink  style={({isActive}) => changeActive(isActive)} to="/category">категория товара</NavLink>
                    </div>
                </div> 
                : null  }
            </nav>
        </div>
    )
}

export default UsersMenu;