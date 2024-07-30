import React, { useState } from 'react';
import './Pagination.css'
import { Link } from 'react-router-dom';
// مكون Pagination
const Pagination = ({ itemsPerPage, totalCars, paginate }) => {
  // حساب عدد الصفحات
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCars / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const [activePage, setActivePage] = useState(1)
    const handlePageClick = (number) => {
        setActivePage(number);
        
    }
    return (
        <nav className=' justify-content-center'>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${activePage === number? "active" : ""}`} >
                        <Link
                            onClick={() => {
                                handlePageClick(number)
                                paginate(number)
                        }}
                        to='#'
                        className='page-link'
                        >
                        {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;






