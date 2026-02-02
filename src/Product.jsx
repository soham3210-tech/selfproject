import { useRef } from 'react';
import puga from "./assets/Puga.png";
import pugaSamagri from "./assets/PugaSamagri.png";
import education from "./assets/Education.png";
import tritha from "./assets/Tritha.png";
import jyotishi from "./assets/jyotishi.png";

const products = [
    { id: 1, name: 'Puja', href: '#', imageSrc: puga, imageAlt: "Puga product", color: 'Black' },
    { id: 2, name: 'Puja Samagri', href: '#', imageSrc: pugaSamagri, imageAlt: "Puga Samagri product", color: 'Aspen White' },
    { id: 3, name: 'Education', href: '#', imageSrc: education, imageAlt: "Education product", color: 'Charcoal' },
    { id: 4, name: 'Tritha', href: '#', imageSrc: tritha, imageAlt: "Tritha product", color: 'Iso Dots' },
    // Adding more for demo scroll
    { id: 5, name: 'Jyotishi', href: '#', imageSrc: jyotishi, imageAlt: "Jyotishi product", color: 'Black' },
    { id: 6, name: 'Puja Samagri 2', href: '#', imageSrc: pugaSamagri, imageAlt: "Puga Samagri product", color: 'Aspen White' },
];

export default function Product() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Our Products</h2>

                <div className="relative group/container">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll('left')}
                        className="scroll-arrow left"
                        aria-label="Scroll left"
                    >
                        ←
                    </button>

                    {/* Scroll Container */}
                    <div
                        ref={scrollRef}
                        className="scroll-container no-scrollbar snap-x"
                    >
                        {products.map((product) => (
                            <div key={product.id} className="min-w-[280px] sm:min-w-[320px] snap-start group relative">
                                <div className="aspect-square w-full rounded-md bg-gray-200 overflow-hidden lg:aspect-auto lg:h-80">
                                    <img
                                        alt={product.imageAlt}
                                        src={product.imageSrc}
                                        className="h-full w-full object-cover object-center  transition-opacity"
                                    />
                                </div>
                                <div className="mt-4 flex flex-col items-center">
                                    <h3 className="text-xl font-bold text-gray-800 text-center">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0 z-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <button className="hero-btn mt-6 relative z-10">Book</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll('right')}
                        className="scroll-arrow right"
                        aria-label="Scroll right"
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
    );
}
