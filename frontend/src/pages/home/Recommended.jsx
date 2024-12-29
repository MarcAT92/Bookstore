import React, { useEffect ,useState } from 'react'
import BookCard from '../book/BookCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Recommended = () => {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        fetch("books.json")
        .then(res => res.json())
        .then((data) => setBooks(data))
    } , [])
return (
    <div className='py-16'>
        <h2 className='text-3xl font-semibold mb-6'>Recommended for you</h2>

        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        breakpoints={{
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        853: {
            slidesPerView: 1.7,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1180: {
            slidesPerView: 2.3,
            spaceBetween: 50,
        },
        1280: {
            slidesPerView: 2.5,
            spaceBetween: 50,
        },
        1366: {
            slidesPerView: 2.8,
            spaceBetween: 50,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"    
    >
        {
        books.length > 0 && books.slice(8, 18).map((book, index) => (
            <SwiperSlide key={index}>
            <BookCard book={book} />
            </SwiperSlide>         
        ))
        }

    </Swiper>
    </div>
)
}

export default Recommended