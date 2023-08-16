/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css'
import Destinations from '../Destinations/Destinations';


const Home = () => {
    const [spotsData, setSpotsData] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(1);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://travel-guru-server-mehedihasan023.vercel.app/spots');
                const data = await response.json();
                setSpotsData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    console.log(spotsData);


    const handlePrevSlide = () => {
        setCurrentSlide((currentSlide - 1 + spotsData.length) % spotsData.length);
    };

    const handleNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % spotsData.length);
    };


// absolute top - 2 / 4 left - 1 / 2 right - 0

    return (
        <div className='background '>
            <div className='background-color '>

                <div className='overflow-x-hidden '>



                    <div className="carousel w-auto  absolute top-2/4 left-1/2 right-0 ">
                        {spotsData.map((spot, index) => (
                            <div
                                id={`slide${index + 1}`}
                                key={spot.id}
                                className={`carousel-item relative mr-5 ml-2 ${index === currentSlide ? 'active' : ''}`}
                            >
                                <Destinations spot={spot}></Destinations>
                            </div>
                        ))}
                      
                    </div>
                    <div className="absolute flex   left-1/2 top-3/4 mt-16 mr-2 right-5  ">
                        <a
                            href={`#slide${(currentSlide === 0 ? spotsData.length : currentSlide)}`}
                            className="btn btn-circle mr-2"
                            onClick={handlePrevSlide}
                        >
                            ❮
                        </a>
                        <a
                            href={`#slide${(currentSlide + 2 > spotsData.length ? 1 : currentSlide + 2)}`}
                            className="btn btn-circle"
                            onClick={handleNextSlide}
                        >
                            ❯
                        </a>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Home;

// {
//     spotsData.map(spot => <Destinations
//         key={spot.id}
//         spot={spot}
//     ></Destinations>)
// }