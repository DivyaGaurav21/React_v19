import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1.5 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item bg-slate-500 h-40" data-value="1">1</div>,
    <div className="item bg-black h-40" data-value="2">2</div>,
    <div className="item bg-gray-50 h-40" data-value="3">3</div>,
    <div className="item bg-stone-600 h-40" data-value="4">4</div>,
    <div className="item bg-zinc-800 h-40" data-value="5">5</div>,
];

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
);

export default Carousel;