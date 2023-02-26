import { useState, useEffect } from "react";

function useScrollPosition(): number {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPos(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPos;
}

export default useScrollPosition;
