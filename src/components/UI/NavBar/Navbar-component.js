/*
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Created by Kaveen Abeyrathne for StudPro 5.0 as a place for students to look
 *  into What they can learn,companies to understand what to expect. This website
 *  was developed as a first step to taking StudPro to a higher elevation. You are
 *  free to update,share & modify the work for IEEE purposes ONLY.
 *
 *  Content of the source code is not authorized to use for any commercial purpose.
 *
 *  SuiCxDe007 | https://github.com/SuiCxDe007 | kaveenmadawa@gmail.com
 *
 *  ~ Copyright © 2023 SuiCxDe
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

import React, {useContext, useState} from 'react';
import './Navbar-styles.css';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,MDBDropdown,
    MDBCollapse,
    MDBIcon,
    MDBNavbarNav, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from 'mdb-react-ui-kit';
import AuthContext from "../../store/auth-context";
import {useSelector} from "react-redux";

/**
 *
 * @returns Nav for Website
 *
 */

const Navbar = () => {

    const authContext = useContext(AuthContext);
    const isAuth = useSelector(state => state.isAuthenticated)

    const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

    return (
        <>
            <MDBNavbar style={{paddingBottom:20}} className={'font'} expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'><img id='nav-logo' src={require('../../../media/img/studpro-logo.png')} alt={'StudPro Logo'}/></MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarTogglerDemo02'
                        aria-controls='navbarTogglerDemo02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNavNoTogglerSecond}>
                        <MDBNavbarNav className='mr-auto' id='nav-content'>
                            <MDBNavbarItem>
                                <MDBNavbarLink aria-current='page' href='/'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='/sessions'>Sessions</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='/gallery'>Gallery</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                    Timelines
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link href={'/timeline'}>StudPro 5.0 Timeline</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                            <MDBNavbarItem>
                                <MDBNavbarLink  href='/login' tabIndex={-1} >
                                    Admin
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            {isAuth &&  <MDBNavbarItem>
                                <MDBNavbarLink  href='/dashboard' tabIndex={-1} >
                                    Dashboard
                                </MDBNavbarLink>
                            </MDBNavbarItem>}
                            {isAuth && <MDBNavbarItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                        Settings
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem link href={'/sponsor-settings'}>Sponsor Settings</MDBDropdownItem>
                                        <MDBDropdownItem link href={'/session-settings'}>Session Settings</MDBDropdownItem>
                                        <MDBDropdownItem link href={'/carousel-settings'}>Carousel Settings</MDBDropdownItem>
                                        <MDBDropdownItem link href={'/gallery-settings'}>Gallery Settings</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem>}
                            {isAuth &&  <MDBNavbarItem>
                                <MDBNavbarLink onClick={authContext.onLogout}  href='/' tabIndex={-1} >
                                    Logout
                                </MDBNavbarLink>
                            </MDBNavbarItem>}
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}


export default Navbar;