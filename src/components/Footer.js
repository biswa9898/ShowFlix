import React from 'react'
import Menu from './Menu';

const Footer = function()  {
    const copyrightYear = 2021;
    return (
        <footer>
           <hr/>
           <Menu/>
           <p> Copyright {copyrightYear} | Biswarup</p> 
        </footer>
    )
}

export default Footer
