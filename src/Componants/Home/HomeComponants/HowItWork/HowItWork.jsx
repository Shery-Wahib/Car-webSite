import React from 'react'
import './HowItWork.css'

export default function HowItWork() {
    return (
        <>
            <div className="sec how-it-work">
                <div className="container">
                    <div className="main-title">
                        <h3 className='title-h3'>HOW IT WORK</h3>
                    </div>
                    <h1 className="text-center m-4">Rent with following 3 working steps</h1>

                    <div  className="d-flex justify-content-center flex-wrap my-5 ">
                        <div  className="small-card d-flex flex-column align-items-center px-4 mx-4 card-sec-3 my-2">
                            <div >
                                <img  src="/public/imges/landing-page/location.png" />
                            </div>
                            <h5  className="my-2">Choose location</h5>
                            <small  className="text-muted text-center">Choose your and find your best car</small>
                        </div>

                        <div  className="small-card d-flex flex-column align-items-center px-4 mx-4 card-sec-3 my-2">
                            <div >
                                <img  src="/public/imges/landing-page/car-icon.png" />
                            </div>
                            <h5  className="my-2">Pick-up date</h5>
                            <small  className="text-muted text-center">Select your pick up date and time to book your car</small>
                        </div>

                        <div  className="small-card d-flex flex-column align-items-center px-4 mx-4 card-sec-3 my-2">
                            <div >
                                <img  src="/public/imges/landing-page/calender.png" />
                            </div>
                            <h5  className="my-2">Book your car</h5>
                            <small  className="text-muted text-center">Book your car and we will deliver it directly to you</small>
                        </div>
                    </div>

                    
                    <section className="container px-4 d-flex justify-content-around flex-wrap my-5">
                        <img  src="/public/imges/landing-page/jaguar.png" className="mx-2"/>
                        <img src="/public/imges/landing-page/nissan.png" className="mx-2"/>
                        <img src="/public/imges/landing-page/volvo.png" className="mx-2"/>
                        <img src="/public/imges/landing-page/audi.png" className="mx-2"/>
                    </section>
                </div>
            </div>
        </>
    )
}
