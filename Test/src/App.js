// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './app.css'

// // import required modules
// import { Pagination } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper
//       slidesPerView={1.2}
//         spaceBetween={10}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//           },
//           1440: {
//             slidesPerView: 5,
//             spaceBetween: 50,
//           },
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const App = () => {
  return (
    <div className='App'>
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        Life is simple{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Eat Divya Gaurav', 'Sleep Divya Gaurav', 'Code Divya Gaurav', 'Repeat! Divya Gaurav']}
            loop={2}
            cursor
            cursorStyle='|'
            typeSpeed={200}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  )
}

export default App;