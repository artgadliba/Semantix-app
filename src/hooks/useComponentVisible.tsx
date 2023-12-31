import { useState, useEffect, useRef, SyntheticEvent } from 'react';

export default function useComponentVisible(initialState: boolean) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialState);
    const ref = useRef(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { ref, isComponentVisible, setIsComponentVisible };
}