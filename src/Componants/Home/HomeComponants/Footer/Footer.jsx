import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <>
            <section className="w-100 py-5" style={{backgroundColor:'#051C34'}}>
                <section className="text-white container">
                    <section className="sec-8 col-md-12 d-flex flex-wrap mx-2 justify-content-between">
                        <div className="col-md-3 me-3 mb-5">
                            <img src="/public/imges/footer/logo-footer.png" className="mb-4" />
                            <div className="d-flex">
                                <img src="/public/imges/footer/location.png" className="align-self-center me-2" />
                                <div className="d-flex flex-column">
                                    <small >25566 Hc 1, Glenallen,</small>
                                    <small > Alaska, 99588, USA</small>
                                </div>
                            </div>
                            <div className="d-flex my-2">
                                <img src="/public/imges/footer/call.png" className="me-2" />
                                <small >+603 4784 273 12</small>
                            </div>
                            <div className="d-flex">
                                <img src="/public/imges/footer/sms.png" className="me-2" />
                                <small >rentcars@gmail.com</small>
                            </div>
                        </div>
                        <div className="col-md-2 d-flex flex-column me-3 mb-5">
                            <p className="mb-4">Our Products</p>
                            <small >Career</small>
                            <small >Car</small>
                            <small >Packages</small>
                            <small >Features</small>
                            <small >Priceline</small>
                        </div>
                        <div className="col-md-2 d-flex flex-column me-3 mb-5">
                            <p className="mb-4">Resources</p>
                            <small >Download</small>
                            <small >Help Centre</small>
                            <small >Guides</small>
                            <small >Partner Network</small>
                            <small >Cruises</small>
                            <small >Developer</small>
                        </div>
                        <div className="col-md-2 d-flex flex-column me-3 mb-5">
                            <p className="mb-4">About Rentcars</p>
                            <small >Why choose us</small>
                            <small >Our Story</small>
                            <small >Investor Relations</small>
                            <small >Press Center</small>
                            <small >Advertise</small>
                        </div>
                        <div className="col-md-2 d-flex flex-column mb-5">
                            <p className="mb-4">Follow Us</p>
                            <div >
                                <img src="/public/imges/footer/facebook.png" alt="facebook" />
                                <img src="/public/imges/footer/instagram.png" alt="instagram" className="mx-3" />
                                <img src="/public/imges/footer/youtube.png" alt="youtube"/>
                            </div>
                        </div>
                    </section>
                    <hr />
                    <section >
                        <small className="text-md-center">Copyright 2023 ・ Rentcars, All Rights Reserved</small>
                    </section>
                </section>
            </section>
        </>
    )
}
