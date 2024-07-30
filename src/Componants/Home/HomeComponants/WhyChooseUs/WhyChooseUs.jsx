import React from 'react'
import './WhyChooseUs.css'

export default function WhyChooseUs() {
    return (
        <>
            <section className="sec-why d-flex my-5 py-5 ">
                <div className="d-flex align-items-center w-50">
                    <img src="/public/imges/landing-page/sec-5/Audi 1.png" alt=""/>
                </div>
                <div>
                    <div className="sec-title">
                        <h3 className='sec-h3'>WHY CHOOSE US</h3>
                    </div>
                    <h2 className="text-left my-3 w-75">We offer the best experience with our rental deals</h2>

                    <div className="d-flex align-items-center">
                        <img src="/public/imges/landing-page/sec-5/user.png" className="p-3 ps-0"/>
                            <article>
                                <h6 className="mb-0">Best price guaranteed</h6>
                                <small >Find a lower price? We’ll refund you 100% of the difference.</small>
                            </article>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src="/public/imges/landing-page/sec-5/user.png" className="p-3 ps-0"/>
                            <article>
                                <h6 className="mb-0">24 hour car delivery</h6>
                                <small >Book your car anytime and we will deliver it directly to you.</small>
                            </article>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src="/public/imges/landing-page/sec-5/message.png" className="p-3 ps-0"/>
                            <article>
                                <h6 className="mb-0">Best price guaranteed</h6>
                                <small>Find a lower price? We’ll refund you 100% of the difference.</small>
                            </article>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src="/public/imges/landing-page/sec-5/chat.png" className="p-3 ps-0"/>
                            <article >
                                <h6 className="mb-0">24/7 technical support</h6>
                                <small >Have a question? Contact Rentcars support any time when you have problem.</small>
                            </article>
                    </div>
                </div>
            </section>
        </>
    )
}
