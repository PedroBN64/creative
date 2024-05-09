import React from 'react'
import "./Navbar.css" 
import { IoLogoBuffer } from 'react-icons/io'
import {tabs} from "../../source"
import { Link } from 'react-scroll'
import { FaBars } from 'react-icons/fa'

export const Navbar = () => {
  return (
    <div>
        <nav id="navbar">
            <div className="logo__container">
            <IoLogoBuffer className="icon"/>
            <h1 className="name">Laro<span className="gradient__text gradient__text-visible">el</span></h1>
            </div>
            <div className="hamburger">
              <div className="tab__group">
                <span className="icon__container close__btn"></span>
                {
                  tabs.map((list, index) =>(
                      <Link 
                      className="tab__item"
                      to={list.id}
                      offset={-70}
                      duration={500}
                      spy={true}
                      smooth={true}
                      activeClass="active"
                      key={index}>
                        {list.name}
                      </Link>
                  ))
              }
              </div>

            </div>

        <div className="buttons__container">
          <Link to="contact" smooth={true} className="contact__btn btn btn__primary">Contact US</Link>      
          <FaBars className="menu"/>
        </div>
        </nav>

    </div>
  )
}
