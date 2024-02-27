import React, { useEffect, useRef } from 'react';
import nll from '../assets/nll.png';
import nourish from '../assets/nourish.png';
import movies from '../assets/movies.png';
import bug1 from '../assets/bug1.png';
import bug2 from '../assets/bug2.png';
import bug3 from '../assets/bug3.png';
import fishadelphia from '../assets/fishadelphia.png';
import ReactTag from './tags/ReactTag'
import TailwindTag from './tags/TailwindTag'
import UXTag from './tags/UXTag'
import Three from './tags/Three'
import GraphicTag from './tags/GraphicTag'
import ProjectTag from './tags/ProjectTag';


export default function Web() {
    const carouselRef = useRef(null);
    let currentImageIndex = 0;

    useEffect(() => {
        const carousel = carouselRef.current;
        const images = carousel.children;

        const interval = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            carousel.appendChild(images[currentImageIndex].cloneNode(true));
            carousel.removeChild(images[currentImageIndex]);
        }, 1000); // Adjust the interval time as needed

        return () => clearInterval(interval);
    }, []);
    
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 md:gap-0.5">            
            <div className='border p-6'>
                <div className='flex justify-between'>
                    <h2 className='hover:text-green-300 border border-green-300 rounded-t px-2'><a href="https://nllphl.netlify.app/">Next Level Lounge</a></h2>
                    <h3>2024</h3>
                </div>
                <div className='h-56 overflow-scroll'>
                <a href="https://nllphl.netlify.app/"><img src={nll} alt="Next Level Lashes" /></a>
                </div>
                <p className='py-2 text-sm'>Next Level Lounge offers specialized beauty services focusing on lash extensions, facials, and brow transformations. Initially established as an Instagram presence, my goal with this website is to streamline operations, scale business, and present a unified brand experience.</p>
                <div className='flex space-x-2'>
                    <ReactTag />
                    <TailwindTag />
                    <UXTag />
                </div>
            </div>
            <div className='border p-6'>
                <div className='flex justify-between'>
                <h2 className='hover:text-green-300 border border-green-300 rounded-t px-2'><a href="https://nourish.up.railway.app/">Nourish</a></h2>
                    <h3>2023</h3>
                </div>
                <div className='h-56 overflow-scroll'>
                <a href="https://nourish.up.railway.app/"><img src={nourish} alt="Nourish app" /></a>
                </div>
                <p className='py-2 text-sm'>Nourish is a network of community fridges in Philadelphia that connects users to get food or volunteer at fridges. The community board allows users to interact in real time creating community and communication amongst all fridges in Philadelphia.</p>
                <div className='flex space-x-2'>
                    <ReactTag />
                    <TailwindTag />
                    <UXTag />
                </div>
            </div>
            <div className='border p-6'>
                <div className='flex justify-between'>
                    <h2 className='hover:text-green-300 border border-green-300 rounded-t px-2'><a href="https://codedbycass.github.io/Movies-and-More/">Movies & More</a></h2>
                    <h3>2023</h3>
                </div>
                <div className='h-56 overflow-scroll'>
                <a href="https://codedbycass.github.io/Movies-and-More/"><img src={movies} alt="Movies and More" /></a>
                </div>
                <p className='text-sm py-2'>This app enables users to enter a movie title to learn about the movie and latest news about the director. This simple app implements multiple API's to create a dynamic website.</p>
                <Three />
            </div>
            <div className='border p-6'>
                <div className='flex justify-between'>
                    <h2 className='hover:text-green-300 border border-green-300 rounded-t px-2'><a href='https://codedbycass.github.io/Programming-Quotes/'>Programmer Quotes</a></h2>
                    <h3>2023</h3>
                </div>
                <div className='h-56 overflow-scroll'>
                    <div className="carousel flex" ref={carouselRef}>
                        <img src={bug1} alt="Bug 1" className="w-full object-cover" />
                        <img src={bug2} alt="Bug 2" className="w-full object-cover" />
                        <img src={bug3} alt="Bug 3" className="w-full object-cover" />
                    </div>
                </div>
                <p className='text-sm py-2'>This site is recommend for engineers stuck on a bug. This app makes a request to an external server using an API, showing the simple beauty of programming! </p>
                <Three />
            </div>
            <div className='border p-6'>
                <div className='flex justify-between'>
                    <h2 className='hover:text-green-300 border border-green-300 rounded-t px-2'><a href='https://web.archive.org/web/20220512011039/https://www.fishadelphia.com/'>Fishadelphia</a></h2>
                    <h3>2021</h3>
                </div>
                <div className='h-56 overflow-scroll'>
                <a href='https://web.archive.org/web/20220512011039/https://www.fishadelphia.com/'><img src={fishadelphia} alt="Movies and More" /></a>
                </div>
                <p className='text-sm py-2'>Fishadelphia connects seafood harvesters with Philadelphians through a seafood subscription program. I led the website redesign through UX Research and design.</p>
                <div className='flex space-x-2 flex-wrap'>
                    <UXTag />
                    <GraphicTag />
                    <ProjectTag />
                </div>
            </div>
        </div>
    );
}
