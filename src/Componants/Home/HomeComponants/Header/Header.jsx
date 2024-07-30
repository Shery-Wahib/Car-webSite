import React from 'react'
import 'animate.css';
import './Header.css'

export default function Header() {
    return (
        <>
            <header>
                <div className="header-container container-fluid">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <img src="/public/imges/nav/logo.png" alt="Logo"/>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className=" nav-list navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Become a renter</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page" href="#">Rental deals</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page" href=".how-it-work">How it work</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page" href="#">Why choose us</a>
                                    </li>
                                </ul>
                                <form className="nav-form d-flex ">
                                    <button className="btn btn-outline-transperant " type="submit">Sign In</button>
                                    <button className="btn btn-primary" type="submit">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </nav>


                    <div className="header-body">
                        <div className="text-part col-md-6">
                            <div className="article">
                                <h1 className='fw-bold'>Find, book and rent a car <span className=' text-primary'>Easily</span></h1>
                                <p>Get a car wherever and whenever you need it with your IOS and Android device.</p>
                            </div>
                        </div>
                        <div className="img-part col-md-6">
                            <img className='w-100' src="/public/imges/landing-page/car 2 1.png" alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
