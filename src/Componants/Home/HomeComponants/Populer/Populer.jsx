import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Populer.css'; 
import { Link} from 'react-router-dom';
import CarCards from '../../../CarCards/CarCards';


export default function Populer() {
    const [cars, setCars] = useState([]);

    const [query, setQuery] = useState(''); 
    const [filteredCars, setFilteredCars] = useState([]);

    const [currentPage, setCurrentPage] = useState(1); 
    const [itemsPerPage] = useState(4);

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
            <div className="sec populer">
                <div className="container">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <i className='fas fa-map-marker-alt'></i>
                        </span>
                        <input type="text" className="form-control" placeholder="Search by name" aria-label="Search"
                            aria-describedby="basic-addon1" value={query} onChange={(e) => setQuery(e.target.value)}/>
                        
                        <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
                    </div>
                    <div className="main-title">
                        <h3 className='title-h3'>POPULER RENTAL DEALS</h3>
                    </div>
                    <h1 className='text-center m-4'>Most popular cars rental deals</h1>

                    
                    
                    <div className="row row-cols-2 row-cols-lg-3 d-flex flex-wrap justify-content-center ">
                        {currentItems.length > 0 ? (
                            currentItems.map((car) => (
                                <CarCards key={car.id}  car ={car} />
                            ))
                            ) : (
                                <h1> No Result</h1>
                            )
                        }
                    </div>

                    <div className="d-flex justify-content-center my-5">
                        <Link className="btn btn-outline-secondary px-5" to="/cars"> Show all vehicles
                            <i className="px-2 fas fa-long-arrow-alt-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
