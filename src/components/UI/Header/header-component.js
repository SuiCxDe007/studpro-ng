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

import React from 'react';
import './header-styles.css'


export default function Header() {
    return (
        <header>
            <div
                className='p-5 text-center bg-image'
                style={{backgroundImage: `url(${require("../../../media/img/landing-img.webp")})`, height: '400px'}}
            >

                <div className='mask' style={{backgroundColor: 'rgba(0,0,0,0.3)'}}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <div className="header-title-div" style={{width: "800px"}}>
                                <h5><span className="animate-ieee" style={{fontSize: '50px'}}>IEEE&nbsp;</span> <span
                                    className="animate-stud" style={{fontSize: '50px'}}>Stud</span>
                                    <span
                                        className="animate-pro" style={{fontSize: '50px'}}>Pro</span></h5>
                                <center>
                                    <div
                                        style={{backgroundColor: "#085c84", borderRadius: "20px", width: "290px"}}><span
                                        style={{color: "white", fontSize: "20px"}} className="typing-demo">Step to your Career</span>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}