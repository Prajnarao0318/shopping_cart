import React from 'react';
import './Navbar.css'; // Optional: for custom styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Quickkart</a>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li className="dropdown">
          <button className="dropbtn">Groceries <i className="fa fa-caret-down"></i></button>
          <div className="dropdown-content">
            <div className="dropdown-submenu">
              <a href="#" className="test">Fruits & Vegetables</a>
              <div className="dropdown-menu">
                <a href="#">Fresh Fruits</a>
                <a href="#">Fresh Vegetables</a>
                <a href="#">Exotic Fruits</a>
                <a href="#">Leafy Greens</a>
                <a href="#">Root Vegetables</a>
                <a href="#">Herbs & Spices</a>
                <a href="#">Organic Produce</a>
                <a href="#">Cut & Packed</a>
                <a href="#">Seasonal Specials</a>
                <a href="#">Berries & Citrus</a>
              </div>
            </div>
            <div className="dropdown-submenu">
              <a href="#" className="test">Rice, Atta & Dal</a>
              <div className="dropdown-menu">
                <a href="#">Basmati Rice</a>
                <a href="#">Brown Rice</a>
                <a href="#">Whole Wheat Atta</a>
                <a href="#">Multigrain Atta</a>
                <a href="#">Chana Dal</a>
                <a href="#">Toor Dal</a>
                <a href="#">Urad Dal</a>
                <a href="#">Moong Dal</a>
                <a href="#">Specialty Rice</a>
                <a href="#">Gluten-Free Flour</a>
              </div>
            </div>
            <a href="#">Oil, Masala & Sauces</a>
            <a href="#">Snacks & Biscuits</a>
            <a href="#">Eggs, Meat & Fish</a>
            <a href="#">Diet & Nutrition</a>
            <a href="#">Cleaning & Household</a>
            <a href="#">Hygiene & Personal Care</a>
            <a href="#">Bath & Body</a>
            <a href="#">Baby Care</a>
          </div>
        </li>
        <li className="dropdown">
          <button className="dropbtn">Clothing <i className="fa fa-caret-down"></i></button>
          <div className="dropdown-content">
            <a href="#">New Arrivals</a>
            <a href="#">Top Brands</a>
            <a href="#">All Western Wear</a>
            <a href="#">Shirts, Tops & Tees</a>
            <a href="#">Dresses</a>
            <a href="#">Jeans & Jeggings</a>
            <a href="#">Kurtas</a>
            <a href="#">Salwar Suits</a>
            <a href="#">Sarees</a>
            <a href="#">Lingerie, Sleep & Lounge</a>
            <a href="#">Sports wear</a>
          </div>
        </li>
        <li className="dropdown">
          <button className="dropbtn">Electronics <i className="fa fa-caret-down"></i></button>
          <div className="dropdown-content">
            <a href="#">Cameras & Photography</a>
            <a href="#">Car & Vehicle Electronics</a>
            <a href="#">Computers & Accessories</a>
            <a href="#">GPS & Accessories</a>
            <a href="#">Home Audio</a>
            <a href="#">Home Theater, TV & Video</a>
            <a href="#">Mobiles & Accessories</a>
            <a href="#">Portable Media Players</a>
            <a href="#">Radio Communication</a>
            <a href="#">Tablets</a>
            <a href="#">Telephones & Accessories</a>
            <a href="#">Electronic Equipment Warranties</a>
            <a href="#">eBook Readers & Accessories</a>
            <a href="#">Wearable Technology</a>
            <a href="#">General Purpose Batteries & Battery Chargers</a>
            <a href="#">Headphones, Earbuds & Accessories</a>
            <a href="#">Power Accessories</a>
          </div>
        </li>
        <li><a href="/Cart">Cart</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
