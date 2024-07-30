import React from 'react'
import './DownloadApp.css'

export default function DownloadApp() {
    return (
        <>
            <section className="sec-7  d-flex mt-5 justify-content-around">
                <div>
                    <article className="mx-5">
                        <h1 >Download Rentcars App for <span className="text-primary">FREE </span></h1>
                        <small >For faster, easier booking and exclusive deals.</small>
                        <div className="my-3 my-3 col-md-7 d-flex justify-content-center">
                            <img src="/public/imges/landing-page/andriod.png" className="me-2" />
                            <img src="/public/imges/landing-page/ios.png" />
                        </div>
                        <form noValidate="" className="d-flex flex-column col-md-7 ng-untouched ng-pristine ng-valid">
                            <input type="text" placeholder="Name" formcontrolname="name" className="contact-us-input my-1 px-3 ng-untouched ng-pristine ng-valid"/>
                            <input type="text" placeholder="Phone Number" formcontrolname="phone" className="contact-us-input my-1 px-3 ng-untouched ng-pristine ng-valid"/>
                            <input type="text" placeholder="Email" formcontrolname="email" className="contact-us-input my-1 px-3 ng-untouched ng-pristine ng-valid"/>
                            <div className="d-flex justify-content-center my-2">
                                <button type="submit" id="button-addon2" className="btn bold btn-primary px-5"> Send </button>
                            </div>
                        </form>
                    </article>
                </div>
                <div className="d-flex justify-content-center align-items-end">
                    <img src="/public/imges/landing-page/sec-7/iPhone-14.png" alt="" className="mobile-img" />
                </div>
            </section>
        </>
    )
}
