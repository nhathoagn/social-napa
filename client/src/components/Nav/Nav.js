import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {Avatar, Dropdown, Navbar} from "flowbite-react";

const Menu = () => {
    const navLinks = [
        { label: 'Home', icon: 'home', path: '/'},
        { label: 'Message', icon: 'near_me', path: '/message'},
        { label: 'Discover', icon: 'explore', path: '/discover'}
    ]

    const { auth, theme, notify } = useSelector(state => state)
    const dispatch = useDispatch()
    const { pathname } = useLocation()

    const isActive = (pn) => {
        if(pn === pathname) return 'active'
    }

    return (
       <div className="head-nav">
           <Navbar fluid={true} rounded={true}>
               <div className="flex md:order-2">
                   <Dropdown
                       arrowIcon={false}
                       inline={true}
                       label={
                           <Avatar
                               alt="User settings"
                               img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                               rounded={true}
                           />
                       }
                   >
                       <Dropdown.Header>
                           <span className="block text-sm">Bonnie Green</span>
                           <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
                       </Dropdown.Header>
                       <Dropdown.Item>Dark Theme</Dropdown.Item>
                       <Dropdown.Item>Profile</Dropdown.Item>
                       <Dropdown.Divider />
                       <Dropdown.Item>Sign out</Dropdown.Item>
                   </Dropdown>
                   <Navbar.Toggle />
               </div>
               <Navbar.Collapse>
                   <Navbar.Link href="/navbars" active={true}>
                       Home
                   </Navbar.Link>
               </Navbar.Collapse>
           </Navbar>
       </div>
    )
}

export default Menu
