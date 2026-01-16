import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './PageTransition.css';

function PageTransition({ children }) {
    const location = useLocation();
    const [displayContent, setDisplayContent] = useState(children);
    const [isFlipping, setIsFlipping] = useState(false);
    const [flipDirection, setFlipDirection] = useState('next');
    const prevPathRef = useRef(location.pathname);

    // Define page order for determining flip direction
    const pageOrder = ['/', '/about', '/service', '/blog', '/book', '/contact'];

    useEffect(() => {
        if (prevPathRef.current !== location.pathname) {
            const prevIndex = pageOrder.indexOf(prevPathRef.current);
            const currentIndex = pageOrder.indexOf(location.pathname);

            // Determine flip direction based on page order
            setFlipDirection(currentIndex > prevIndex ? 'next' : 'prev');
            setIsFlipping(true);

            // After half the animation, swap the content
            const halfDuration = setTimeout(() => {
                setDisplayContent(children);
            }, 400);

            // After full animation, reset
            const fullDuration = setTimeout(() => {
                setIsFlipping(false);
                prevPathRef.current = location.pathname;
            }, 800);

            return () => {
                clearTimeout(halfDuration);
                clearTimeout(fullDuration);
            };
        } else {
            setDisplayContent(children);
        }
    }, [location.pathname, children]);

    return (
        <div className="book-container">
            <div className={`page ${isFlipping ? `flipping-${flipDirection}` : ''}`}>
                <div className="page-front">
                    {displayContent}
                </div>
                <div className="page-back"></div>
            </div>
        </div>
    );
}

export default PageTransition;
