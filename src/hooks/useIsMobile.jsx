import { useEffect, useState } from "react"

const getIsMobile = () => window.innerWidth <= 992;

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(getIsMobile());

    useEffect(() => {
        const onResize = () => setIsMobile(getIsMobile());

        window.addEventListener('resize', onResize);

        return () => window.removeEventListener('resize', onResize);
    }, []);

    return isMobile;
}

export { useIsMobile }