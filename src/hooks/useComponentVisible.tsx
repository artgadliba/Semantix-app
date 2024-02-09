import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialState: boolean) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialState);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const handleClickOutside = (event: MouseEvent): void => {
        const target = event.target as Node;
        if (ref.current && !ref.current.contains(target)) {
            setIsComponentVisible(false);
        }
    };

    return { ref, isComponentVisible, setIsComponentVisible };
}