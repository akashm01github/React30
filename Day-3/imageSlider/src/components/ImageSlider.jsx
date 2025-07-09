import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const ImageSlider = ({ url, limit = 10, page = 1 }) => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMessage, seterrorMessage] = useState(null);
    const [loading, setloading] = useState(false);

    async function fetchImages(getUrl) {
        try {
            setloading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data);
                setloading(false)
            }
        } catch (e) {
            seterrorMessage(e.message);
            setloading(false);
        }
    }

    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url, limit, page])

    console.log(images)

    if (loading) {
        return (
            <h1 className='text-xl text-green-800 text-center mt-[20%]'>
                Loading....
            </h1>
        )
    }

    if (errorMessage !== null) {
        return (
            <h1 className='text-xl font-semibold text-red-600 text-center mt-[10%]'>
                Some Error Occuried... {errorMessage}
            </h1>
        )
    }

    const HandelPrevious  = ()=>{
        setCurrentSlide(currentSlide === 0 ? images.length-1:currentSlide-1)
    }


    const HandelNext  = ()=>{
        setCurrentSlide(currentSlide === images.length-1 ? 0 :currentSlide+1)
    }

    return (
        <div className='relative mt-20 w-full max-w-4xl mx-auto h-100 overflow-hidden rounded-lg shadow-lg bg-gray-100'>
            
            <BsArrowLeftCircleFill onClick={HandelPrevious} className='absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-white hover:text-gray-300 cursor-pointer z-10 drop-shadow-lg' />
            
            <div className='flex transition-transform duration-500 ease-in-out h-full'>
                {
                    images && images.length ?
                        images.map((imageItem, index) => {
                            return (
                                <img 
                                    className='w-full h-full object-cover flex-shrink-0 transition-transform duration-500 ease-in-out' 
                                    key={imageItem.id} 
                                    src={`${imageItem.download_url}`} 
                                    style={{transform: `translateX(-${currentSlide*100}%)`}}
                                />
                            )
                        })
                        : null
                }
            </div>
            
            <BsArrowRightCircleFill onClick={HandelNext} className='absolute right-4 top-1/2 -translate-y-1/2 text-4xl text-white hover:text-gray-300 cursor-pointer z-10 drop-shadow-lg' />
            
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10'>
                {
                    images && images.length
                        ?
                        images.map((_, index) => {
                            return (
                                <button 
                                    className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide ? "bg-gray-700": "bg-white"}`}
                                    key={index}
                                />
                            )
                        })
                        : null
                }
            </div>
        </div>
    )
}

export default ImageSlider