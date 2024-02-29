import { useState, useEffect } from "react";

// Hook personnalisé pour gérer le redimensionnement
function useResponsiveChart(
  defaultWidth,
  defaultHeight,
  resizeWidth,
  resizeHeight
) {
  const [dimensions, setDimensions] = useState({
    width: defaultWidth,
    height: defaultHeight,
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1024 && window.innerHeight <= 780) {
        setDimensions({ width: resizeWidth, height: resizeHeight });
      } else {
        setDimensions({ width: defaultWidth, height: defaultHeight });
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [defaultWidth, defaultHeight, resizeWidth, resizeHeight]); // Redéclenche l'effet si les dimensions par défaut ou de redimensionnement changent

  return dimensions;
}

export default useResponsiveChart;
