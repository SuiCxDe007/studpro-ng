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
import * as PropTypes from "prop-types";

const Navbar = () => {

    const authContext = useContext(AuthContext);

    const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

    return (
        <>
            <MDBNavbar expand='lg' light bgColor='light'>
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
                                <MDBNavbarLink  href='/login' tabIndex={-1} >
                                    Admin
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            {authContext.isLoggedIn &&  <MDBNavbarItem>
                                <MDBNavbarLink  href='/dashboard' tabIndex={-1} >
                                    Dashboard
                                </MDBNavbarLink>
                            </MDBNavbarItem>}
                            {authContext.isLoggedIn && <MDBNavbarItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                        Settings
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem link href={'/sponsor-settings'}>Sponsor Settings</MDBDropdownItem>
                                        <MDBDropdownItem link href={'/session-settings'}>Session Settings</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem>}
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}


export default Navbar;