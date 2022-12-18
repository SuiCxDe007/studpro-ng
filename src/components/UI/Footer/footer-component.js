import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon,

    MDBBtn } from 'mdb-react-ui-kit';

import './footer-component-styles.css'

export default function FooterComponent() {
    return (
        <MDBFooter style={{marginTop:"20px", paddingTop:"15px"}} bgColor='light' className='text-center text-lg-start text-muted noselect'>

                <section className='mb-4' style={{display:"flex" , justifyContent:"center"}}>
                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#3b5998' }}
                        href='https://www.facebook.com/ieeestudpro/'
                        role='button'
                        target="_blank"
                    >
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>

                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#f3450b' }}
                        href='https://www.instagram.com/ieee.studpro/'
                        role='button'
                        target="_blank"
                    >
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>

                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#0082ca' }}
                        href='https://lk.linkedin.com/company/ieeeypsl?trk=public_post_main-feed-card_reshare-text'
                        role='button'
                        target="_blank"
                    >
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>

                </section>


            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>

                                Powered By IEEE Young Professionals Sri Lanka
                            </h6>
                            <p>
                                IEEE Young Professionals Sri Lanka formed on October 2011 is an integral part of IEEE Sri Lanka Section, and has a history of eight years.   </p>
                        </MDBCol>

                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>National Projects</h6>
                            <p>
                                <a href='#!' target="_blank" className='text-reset'>
                                    Lets Talk
                                </a>
                            </p>
                            <p>
                                <a href='#!' target="_blank" className='text-reset'>
                                    SL Inspire
                                </a>
                            </p>
                            <p>
                                <a href='#!' target="_blank" className='text-reset'>
                                    AI Driven
                                </a>
                            </p>
                            <p>
                                <a href='#!' target="_blank" className='text-reset'>
                                    Y2NPro
                                </a>
                            </p>
                            <p>
                                <a href='#!' target="_blank" className='text-reset'>
                                    IEEE Innovation Nation
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='https://www.ieee.org/'  target="_blank" className='text-reset'>
                                    IEEE
                                </a>
                            </p>
                            <p>
                                <a href='https://ieee.lk/'  target="_blank" className='text-reset'>
                                    IEEE SL
                                </a>
                            </p>
                            <p>
                                <a href='https://yp.ieee.org/' target="_blank" className='text-reset'>
                                    IEEE YP
                                </a>
                            </p>
                            <p>
                                <a href='https://ieeeyp.lk/' target="_blank" className='text-reset'>
                                    IEEE YPSL
                                </a>
                            </p>
                            <p>
                                <a href='https://www.ieeer10.org/' target="_blank" className='text-reset'>
                                    IEEE R10
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>

                            <p>
                                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                studpro2022@gmail.com
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 94 76 697 6656
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4 noselect' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022-2023 <b><span style={{color:"#1c6282"}}>IEEE</span>  <span style={{color:"#eb8135"}}>Stud</span><span style={{color:"black"}}>Pro 5.0</span></b>
            </div>
        </MDBFooter>
    );
}