import React, { useState, useRef, useEffect } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-100%";
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'services', 'work', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setMenu(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className='navbar'>
            <img src={logo} alt="" />
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
            <ul ref={menuRef} className="nav-menu">
                <img onClick={closeMenu} className='nav-mob-close' src={menu_close} alt="" />
                <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={() => { setMenu("home"); closeMenu(); }}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => { setMenu("about"); closeMenu(); }}>About Me</p></AnchorLink>{menu === "about" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => { setMenu("services"); closeMenu(); }}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => { setMenu("work"); closeMenu(); }}>Portfolio</p></AnchorLink>{menu === "work" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => { setMenu("contact"); closeMenu(); }}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt='' /> : <></>}</li>
            </ul>
            <AnchorLink className='anchor-link nav-connect' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
    )
}

export default Navbar