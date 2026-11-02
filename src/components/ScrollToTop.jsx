import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there's a hash (like #apply), don't scroll to top smoothly, let the browser handle it or handle it separately
        if (!hash) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
