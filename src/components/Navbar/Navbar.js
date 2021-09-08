import React from 'react';
import './Navbar.css';
const Navbar = () => {
    return(
       <div>
            <nav class="navMenu absolute md:z-20">
                <a href="/">Home</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a class='ml-10' href="#about">About</a>
                <div class="dot"></div>
            </nav>
        </div>
    ); 
}
export default Navbar;
