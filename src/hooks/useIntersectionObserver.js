import { useEffect } from 'react';

function useIntersectionObserver(isScrolling, ref, onIntersect, threshold) {
  useEffect(() => {
    if(!isScrolling) {
        const currentRef = ref;
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            onIntersect();
            }
        },
        { 
            threshold
        }
        );

        if (currentRef.current) {
        observer.observe(ref.current);
        }

        return () => {
        if (currentRef.current) {
            observer.unobserve(currentRef.current);
        }
        };
    }
  }, [isScrolling, ref, onIntersect, threshold]);
}

export default useIntersectionObserver;