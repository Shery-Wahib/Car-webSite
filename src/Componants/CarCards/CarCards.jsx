import React from 'react'
import './CarCards.css'
import { Link, useNavigate } from 'react-router-dom';
export default function CarCards(props) {
    let { car } = props
    
    return (
        <>
            <div className="card col card-img-top  shadow m-2 p-0" style={{ width: "20%" }} >
                <div className="d-flex justify-content-center m-4" >
                    {(() => {
                        if (car.transmission === "Automatic") {
                            return <img alt="Card image cap" className="card-img-top " style={{height:"15vh"}} src="/public/imges/card/car1.png" />;
                        } else if (car.transmission === "Manual") {
                            return <img alt="Card image cap" className="card-img-top " style={{height:"15vh"}} src="/public/imges/card/car2.png" />;
                        } else { 
                            return <img alt="Card image cap" className="card-img-top "style={{height:"15vh"}} src="/public/imges/card/car3.png" />;
                        }
                    })()}
                </div>

                <div className="card-body" >

                    <div className=" d-flex card-title">
                        <h5 className='mx-2'>{car.make} </h5>
                        <h5>{car.model}</h5>
                    </div>

                    <div className="d-flex align-items-baseline">
                        <img src="/public/imges/card/star.png" />
                        <h6 className="mx-1">4.6</h6>
                        <small className="text-muted">(1345 reviews)</small>
                    </div>

                    <div className="d-flex justify-content-between">

                        <div className="d-flex justify-content-between flex-column">
                            <p className="card-text text-nowrap d-flex align-items-start">
                                <img src="/public/imges/card/user.png" alt="" />
                                <small className="text-muted"> 2 Passanger</small>
                            </p>
                            <p className="card-text text-nowrap d-flex align-items-start">
                                <i className="fa-solid fa-calendar-days me-2"></i>
                                <small className="text-muted">{car.year}</small>
                            </p>
                        </div>

                        <div className="d-flex justify-content-between flex-column">
                            <p className="card-text text-nowrap d-flex  align-items-start">
                                <img  src="/public/imges/card/d8wxke_2_.png" alt="" />
                                <small className="text-muted"> Air conditioning </small>
                            </p>

                            <p className="card-text text-nowrap d-flex align-items-start me-3">
                                <img src="/public/imges/card/Frame.png" alt="" />
                                <small className="text-muted">{car.transmission}</small>
                            </p>
                        </div>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between">
                        <p className="text-muted">Price</p>
                        <div className="d-flex">
                            <h6 >{car.price} $</h6>
                        </div>
                    </div>

                    <div>
                        <Link className="btn btn-primary w-100" to= {`/carDetails/${car.id}`}>  View details
                            <img src="/public/imges/card/arrow-right.png" className="ms-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

