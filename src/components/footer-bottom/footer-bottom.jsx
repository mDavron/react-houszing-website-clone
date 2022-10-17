import React, { Component } from 'react';
import './style.css'
import logo from "../../assets/images/logo.png";

class FooterBottom extends Component {
    state = {  } 
    render() { 
        return (
            <footer className='footer_bottom'>
                <div className="container footer_bottom-flex">
                <img src={logo} alt="logo" />
                <p>Copyright © 2021 CreativeLayers. All Right Reserved.</p>
                </div>
            </footer>
        );
    }
}
 
export default FooterBottom;