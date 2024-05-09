import React from 'react'
import "./Navbar.css" 
import { IoLogoBuffer } from 'react-icons/io'
import {tabs} from "../../source"
import { Link } from 'react-scroll'

export const Navbar = () => {
  return (
    <div>
        <nav id="navbar">
            <div className="logo__container">
            <IoLogoBuffer className="icon"/>
            <h1 className='name'>Laro<span className="gradient__text">el</span></h1>
            </div>
            <div className="hamburger">
              <div className="tab__group">
                {
                  tabs.map((list, index) =>(

                  ))
                }
              </div>

            </div>
        </nav>

    </div>
  )
}
