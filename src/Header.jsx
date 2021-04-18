import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <nav className="header">
        {/* logo on left */}
        <Link to="/">
        <img className="header_logo"
         src={process.env.PUBLIC_URL + "/image/logo4.jpg"}
         alt="my_image" />
         </Link>

        
        {/* search box */}
        <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
        </div>


        {/* 3 Link */}
        <div className="header_nav">

        {/* 1 Link */}
        <Link to="/Login" className="header_link">
            <div className="header_option">
                <span className="header_optionLineTwo"> Sign In </span>
            </div>
        </Link>

        {/* 2 Link */}
        <Link to="/service" className="header_link">
            <div className="header_option">
                <span className="header_optionLineOne"> Return </span>
                <span className="header_optionLineTwo"> Order </span>
            </div>
        </Link>

        {/* 3 Link */}
        <Link to="/contact" className="header_link">
            <div className="header_option">
                <span className="header_optionLineOne"> Contact </span>
                <span className="header_optionLineTwo"> About </span>
            </div>
        </Link>

        {/* 4 Link */}

        <Link to="Checkout" className="header_link">
            <div className="header_optionBasket">
                {/* Shopping cart icon*/}
                <ShoppingCartIcon />
                {/* Number of item in cart */}
                <span className="header_optionLineTwo header_basketCount">0</span>
            </div>
        </Link>

        </div>
       

            
        </nav>
    )
}

export default Header
