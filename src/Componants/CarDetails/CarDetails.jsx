import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import './CarDetails.css'
import 'animate.css'


export default function CarDetails() {
    const navigate = useNavigate();

    const { id } = useParams(); // الحصول على معرف السيارة من عنوان URL
    const [car, setCar] = useState(null);
    
    useEffect(() => {
    const fetchCarDetails = async () => {
    try {
        const response = await axios.get(`https://freetestapi.com/api/v1/cars/${id}`);
        setCar(response.data);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching car details:', error);
    }
    };

    fetchCarDetails();
    }, [id]);
    if (!car) return <div>Loading...</div>;
    return (
        <>
            <section className="container-fluid  vh-100">
                <div className=" p-5">
                    <button className=' btn border-0 bg-transparent text-primary ' onClick={() => navigate('/')}>Home</button> /
                    <button className=' btn border-0 bg-transparent text-primary ' onClick={() => navigate('/cars')}> Cars</button>
                </div>
                <section className="row  py-5 sec-5 justify-content-between car-detail" >  
                    <div className="d-flex align-items-center col-lg-5 img-animation p-0 img-part sec-con">
                        {car.transmission === "Automatic" ? (<img alt="Card image cap" className=" " src="/public/imges/landing-page/car 2 1 copy.png" />)
                            : (<img alt="Card image cap" className="card-img-top " src="/public/imges/landing-page/sec-5/Audi 1.png" />)}
                    </div>
                    <div className="col-lg-5">
                        <div >
                            <button className="popular-rental-deals-btn rounded-2">WHY CHOOSE US</button>
                            <h4 className="my-3">We offer the best experience with our rental deals</h4>
                        </div>
                        <p className="card-text text-nowrap d-flex align-items-start">
                            <img src="/public/imges/card/user.png" alt=""/>
                                <small className="text-muted"> 2 Passanger</small>
                        </p>
                        <p className="card-text text-nowrap d-flex align-items-start">
                            <img src="/public/imges/card/d8wxke_2_.png" alt=""/>
                                <small className="text-muted"> Air conditioning </small>
                        </p>
                        <p className="card-text text-nowrap d-flex align-items-start">
                            <img src="/public/imges/card/Frame.png" alt=""/>
                                <small className="text-muted"> {car.transmission} </small>
                        </p>
                        <p className="card-text text-nowrap d-flex align-items-start">
                            <img src="/public/imges/card/doors.png" alt=""/>
                                <small className="text-muted">  Doors</small>
                        </p>
                    </div>
                </section>
            </section>
        </>
    )
}