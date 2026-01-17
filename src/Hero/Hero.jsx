import { useState } from "react";
import Service from "../pages/Service";
import "./hero.css";
// Import images - this is required in Vite/React!
import poster1 from "../assets/poster1.jpg";
import poster2 from "../assets/poster2.jpg";
import poster3 from "../assets/poster3.jpg";
import poster4 from "../assets/poster4.jpeg";
function Hero() {
    // Array of poster images with their info
    const posters = [
        {
            image: poster1,
            title: "Shree namonaryan Surya chandra Rimal ",
            description: "Pandit Ji is a dedicated Sanatani Pandit who has been serving Dharma through Vedic rituals and spiritual guidance. He performs all kinds of Pujas and Karmakanda Vidhi, conducts Chhina rituals as per Shastra, and carefully analyzes Kundalis to guide devotees in important life matters. His work is rooted in faith, purity, and the timeless wisdom of Sanatan Dharma."
        },
        {
            image: poster2,
            title: "Shree sundar Maharaj Kamal nayan poudel",
            description: "Pandit Ji is a dedicated Sanatani Pandit who has been serving Dharma through Vedic rituals and spiritual guidance. He performs all kinds of Pujas and Karmakanda Vidhi, conducts Chhina rituals as per Shastra, and carefully analyzes Kundalis to guide devotees in important life matters. His work is rooted in faith, purity, and the timeless wisdom of Sanatan Dharma."
        },
        {
            image: poster3,
            title: "Shree Ankhada bholabhakta Sagarmani",
            description: "Pandit Ji is a dedicated Sanatani Pandit who has been serving Dharma through Vedic rituals and spiritual guidance. He performs all kinds of Pujas and Karmakanda Vidhi, conducts Chhina rituals as per Shastra, and carefully analyzes Kundalis to guide devotees in important life matters. His work is rooted in faith, purity, and the timeless wisdom of Sanatan Dharma."
        }, {
            image: poster4,
            title: "Creator Soham Thapaliya",
            description: "Pandit Ji is a dedicated Sanatani Pandit who has been serving Dharma through Vedic rituals and spiritual guidance. He performs all kinds of Pujas and Karmakanda Vidhi, conducts Chhina rituals as per Shastra, and carefully analyzes Kundalis to guide devotees in important life matters. His work is rooted in faith, purity, and the timeless wisdom of Sanatan Dharma."
        }
    ];

    // Track which poster is currently showing (starts at 0)
    const [currentIndex, setCurrentIndex] = useState(0);

    // Total number of posters
    const totalPosters = posters.length;

    // Go to next slide
    function goToNext() {
        if (currentIndex === totalPosters - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    // Go to previous slide
    function goToPrevious() {
        if (currentIndex === 0) {
            setCurrentIndex(totalPosters - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    // Go to a specific slide when clicking a dot
    function goToSlide(index) {
        setCurrentIndex(index);
    }

    return (
        <div className="hero-container">
            <h1 className="text-2xl font-bold text-4xl tracking-tight  mb-8 text-amber-600">Our Guru</h1>

            {/* Main hero section - image and content side by side */}
            <div className="hero">
                {/* Left side - Image */}
                <div className="hero-image-section">
                    <img
                        src={posters[currentIndex].image}
                        alt={`Poster ${currentIndex + 1}`}
                        className="hero-img"
                    />

                    {/* Arrow buttons on the image */}
                    <button className="arrow left" onClick={goToPrevious}>
                        ←
                    </button>
                    <button className="arrow right" onClick={goToNext}>
                        →
                    </button>
                </div>

                {/* Right side - Content/Text area */}
                <div className="hero-content">
                    <h1 className="hero-title" style={{ color: "#db9119ff", fontWeight: "bold" }}>{posters[currentIndex].title}</h1>
                    <p className="hero-description" style={{ color: "#ddcc13ff", fontWeight: "bold" }}>{posters[currentIndex].description}</p>
                    <button className="hero-btn">Contact</button>
                </div>
            </div>

            {/* Navigation dots below hero */}
            <div className="dots-container">
                {posters.map((poster, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
            <Service />


        </div>

    );
}

export default Hero;
