import React from 'react';
import logo from ".././images/logo.png"
import menu_icon from ".././images/ham-menu-icon.png"
import close_icon from ".././images/close-icon.png"
import search_icon from ".././images/search-icon-dark.png"
import header from ".././images/header.png"


function Header() {
    const toggle = () => {
        const navbarShowBtn = document.querySelector('.navbar-show-btn');
        const navbarCollapseDiv = document.querySelector('.navbar-collapse');
        const navbarHideBtn = document.querySelector('.navbar-hide-btn');

        navbarShowBtn.addEventListener('click', function(){
            navbarCollapseDiv.classList.add('navbar-show');
        });

        navbarHideBtn.addEventListener('click', function(){
            navbarCollapseDiv.classList.remove('navbar-show');
});
    }
  return (<div>
    <nav class = "navbar bg-blue">
    <div class = "container flex">
        <a href = "index.html" class = "navbar-brand">
            <img src = {logo} alt = "site logo"/>
        </a>
        <button type = "button" class = "navbar-show-btn" onClick={toggle}>
            <img src = {menu_icon}/>
        </button>

        <div class = "navbar-collapse bg-white">
            <button type = "button" class = "navbar-hide-btn">
                <img src = {close_icon}/>
            </button>
            <ul class = "navbar-nav">
                <li class = "nav-item">
                    <a href = "#" class = "nav-link">Home</a>
                </li>
                <li class = "nav-item">
                    <a href = "#" class = "nav-link">About</a>
                </li>
                <li class = "nav-item">
                    <a href = "#" class = "nav-link">Service</a>
                </li>
                <li class = "nav-item">
                    <a href = "#" class = "nav-link">Doctors</a>
                </li>
                <li class = "nav-item">
                    <a href = "#" class = "nav-link">Departments</a>
                </li>
                <li class = "nav-item">
                    <a href = "#" class = "nav-link">Blog</a>
                </li>
                <li class = "nav-item">
                    <a href = "#" class = "nav-link">Contact</a>
                </li>
            </ul>
            <div class = "search-bar">
                <form>
                    <div class = "search-bar-box flex">
                        <span class = "search-icon flex">
                  <img src={search_icon} />
                        </span>
                        <input type = "search" class = "search-control" placeholder="Search here"/>
                    </div>
                </form>
            </div>
        </div> 
    </div>
</nav>

<div class = "header-inner text-white text-center">
    <div class = "container grid">
        <div class = "header-inner-left">
            <h1>your most trusted<br /> <span>health partner</span></h1>
            <p class = "lead">the best match services for you</p>
            <p class = "text text-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nulla odit esse necessitatibus corporis voluptatem?</p>
            <div class = "btn-group">
                <a href = "#" class = "btn btn-white">Learn More</a>
                <a href = "#" class = "btn btn-light-blue">Sign In</a>
            </div>
        </div>
        <div class = "header-inner-right">
            <img src = {header} />
        </div>
    </div>
</div>
    </div>
    )
}

export default Header;
