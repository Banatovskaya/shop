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
    let munuParth = () => {
        return (
            <> 
                <div className="menu_item" >
                    <NavLink style={({isActive}) => changeActive(isActive)} to="/">главная</NavLink>
                </div>
                <div className="menu_item">
                    <NavLink  style={({isActive}) => changeActive(isActive)} to="/category/">категория товара</NavLink>
                </div> 
            </>
        )
    } 
   
    return (
        <div className="menu_wrap">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="hamburger_wrap" onClick={()=>clickHamburger()}>
                {menuState === 'open' ? <div className='crossHamburger'/> : <div className='hamburger'/>}
 
            </div>  
            <nav>
                {
                    menuState === 'close' ? <div className='menu'>{munuParth()}</div> 
                    : <div className='mobileMenuOpen'>{munuParth()}</div>   
                }
            </nav>
        </div>
    )
}

export default UsersMenu;