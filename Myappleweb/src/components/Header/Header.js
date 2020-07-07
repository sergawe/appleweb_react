import React from 'react';
import './Hdrstyles.css';
import HeaderLink from '../Hdrlinks/HeaderLinks';
import logo from '../images/icons/logo-sm.png';
import icon from '../images/icons/search-icon-sm.png';
import cart from '../images/icons/cart-sm.png';

class Header extends React.Component {
    render(){
        return(
            <div className="nav-wrapper fixed-top">
                <div className="container">
                    <nav className="navbar navbar-toggleable-sm navbar-expand-md">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                            ☰
                        </button>
                        <a className="navbar-brand mx-auto" href="#"><img src={logo} /></a>
        
                        <div className="navbar-collapse collapse">
                            <ul className="navbar-nav nav-justified w-100 nav-fill">
                                <HeaderLink linkName= "mac" linkUrl="/mac"/>
                                <HeaderLink linkName= "iphone" linkUrl="/#"/>
                                <HeaderLink linkName= "watch" linkUrl="/#"/>
                                <HeaderLink linkName= "tv" linkUrl="/#"/>
                                <HeaderLink linkName= "Muic" linkUrl="/#"/>
                                <HeaderLink linkName= "support" linkUrl="/#"/>
                                <HeaderLink linkName= "Mac" linkUrl="/mac"/>
                                <HeaderLink linkName= "Mac" linkUrl="/mac"/>
                                <HeaderLink image={<img src={icon}/>}/>
                                <HeaderLink image={<img src={cart}/>}/>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
    
        )
    }
}
export default Header;