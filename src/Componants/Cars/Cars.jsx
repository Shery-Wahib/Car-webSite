import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pagination from '../Pagination/Pagination';
import CarCards from '../CarCards/CarCards';
import { Link, Outlet, useNavigate } from 'react-router-dom';


export default function Cars() {
    const navigate = useNavigate();

    const [cars, setCars] = useState([]);

    const [query, setQuery] = useState(''); 
    const [filteredCars, setFilteredCars] = useState([]); 

    const [currentPage, setCurrentPage] = useState(1); 
    const [itemsPerPage] = useState(8);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://freetestapi.com/api/v1/cars');
                setCars(response.data);
                setFilteredCars(response.data);
            } catch (error) {
                console.error('Error fetching the car data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (query.length > 0) {
            setFilteredCars(
                cars.filter(car =>
                    car.make.toLowerCase().includes(query.toLowerCase()) ||
                    car.model.toLowerCase().includes(query.toLowerCase()) 
                )
            );
        } else {
            setFilteredCars(cars); 
        }
    }, [query, cars]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredCars.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <>
            <div className="sec cars">
                <div className="container">
                    <div>
                        <button className=' btn border-0 bg-transparent text-primary ' onClick={() => navigate('/')}>Home</button>
                    </div>
                    <div className="main-title">
                        <h3 className='title-h3'>POPULER RENTAL DEALS</h3>
                    </div>
                    <h3 className='text-center m-4'>Most popular cars rental deals</h3>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className='fas fa-map-marker-alt'></i></span>
                        <input type="text" className="form-control"
                            placeholder="Search by name" aria-label="Search" value={query} onChange={(e) => setQuery(e.target.value)}
                            aria-describedby="basic-addon1" />
                        <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
                    </div>

                    <div className="row justify-content-center row-cols-1 row-cols-md-3 my-4 g-4">
                        {currentItems.length > 0 ? (
                            currentItems.map((car) => (
                                
                                <CarCards key={car.id}  car ={car} />
                            ))
                            ) : (
                                <h1> No Result</h1>
                            )
                        }
                    </div>
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalCars={cars.length}
                        paginate={paginate}
                    />
                </div>
            </div>

            
        </>
    )
}
