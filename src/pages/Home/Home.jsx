/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css'
import Destinations from '../Destinations/Destinations';
import SpotDetails from '../SpotDetails/SpotDetails';


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
    // console.log(spotsData);


    const handlePrevSlide = () => {
        setCurrentSlide((currentSlide - 1 + spotsData.length) % spotsData.length);
    };

    const handleNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % spotsData.length);
    };



    return (
        <div className='background'>
            <div className='background-color'>

                <div className='overflow-x-hidden '>

                    <div className='md:grid md:grid-cols-3 md:gap-4 md:absolute md:top-2/4 md:left-1/4'>
                        <SpotDetails></SpotDetails>

                        <div className="carousel relative mt-4 md:mt-0 md:col-span-2 md:h-80 h-4/6">
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
                    </div>

                    <div className="absolute flex left-1/2 top-3/4 mt-8 md:mt-24  md:mr-2 right-5">
                        <a
                            href={`#slide${(currentSlide === 0 ? spotsData.length : currentSlide)}`}
                            className="btn btn-circle mr-4"
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
