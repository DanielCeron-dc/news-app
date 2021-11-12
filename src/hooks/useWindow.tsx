import { useCallback, useState, useEffect } from 'react';

const useWindow = (): { isMobile: boolean, isTablet: boolean, isDesktop: boolean } => {

    const [isMobile, setIsMobile] = useState(true);
    const [isTablet, setIsTablet] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    const handleResize = useCallback(() => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
            setIsTablet(false);
            setIsDesktop(false);
        }
        else if (window.innerWidth < 992) {
            setIsMobile(false);
            setIsTablet(true);
            setIsDesktop(false);
        }
        else {
            setIsMobile(false);
            setIsTablet(false);
            setIsDesktop(true);
        }
    }, []); 

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [handleResize]);

    return { isMobile, isTablet, isDesktop };
}
export default useWindow;