import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialState: boolean) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialState);
    const ref = useRef(null);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
    };

    return { ref, isComponentVisible, setIsComponentVisible };
}