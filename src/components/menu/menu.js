import {NavLink,} from "react-router-dom";
import './menu.css';
import logo from './logo.png';
import { useState } from "react";

const  UsersMenu = () => {

    const [hamburgerClass, setHamburgerClass] = useState('hamburger');
    const [mobileMenuClass, setMobileMenuClass] = useState('menu');

    const changeActive = (isActive)=>{
        if (isActive) {
            return {fontWeight: 'bold'}
            } 
    };

    const changeHamburgerClass = () =>{
        if (hamburgerClass === 'hamburger') {
            setHamburgerClass('crossHamburger')
        }
         else setHamburgerClass('hamburger')
    };

    const changeMobileMenu = () => {
        if (mobileMenuClass === 'menu') {
            setMobileMenuClass('mobileMenuOpen')
        } else setMobileMenuClass('menu')
    };

    const clickHamburger = () => {
         changeMobileMenu();
         changeHamburgerClass();
    };
    
    return (
            <div className="menu_wrap">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="hamburger_wrap" onClick={()=>clickHamburger()}>
                    <div className={hamburgerClass}></div>
                </div>  
                <nav>
                    <div className={mobileMenuClass}>
                        <NavLink className="menu_item" style={({isActive}) => changeActive(isActive)} to="/">главная</NavLink>
                        <NavLink className="menu_item" style={({isActive}) => changeActive(isActive)} to="/category">категория товара</NavLink>
                    </div>  
                </nav>
        </div>
    )
}

export default UsersMenu;