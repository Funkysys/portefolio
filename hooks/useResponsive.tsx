import { useEffect, useState } from "react";

const useResponsivePlanets = () => {
  const [breakpoint, setBreakpoint] = useState("md");

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 640) setBreakpoint("sm"); // Petit écran
      else if (width < 1024) setBreakpoint("md"); // Écran moyen
      else if (width < 1280) setBreakpoint("lg"); // Grand écran
      else setBreakpoint("xl"); // Très grand écran
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  const getPlanetSizeAndDistance = (baseSize: number, baseDistance: number) => {
    switch (breakpoint) {
      case "sm":
        return {
          size: baseSize * 2, // Réduction pour petits écrans
          firstDistance: baseDistance,
          distance: baseDistance,
        };
      case "md":
        return {
          size: baseSize * 1.2, // Taille intermédiaire
          distance: baseDistance * 1.2,
        };
      case "lg":
        return {
          size: baseSize, // Taille par défaut
          distance: baseDistance,
        };
      case "xl":
        return {
          size: baseSize * 0.9, // Augmentation pour grands écrans
          distance: baseDistance,
        };
      default:
        return { size: baseSize, distance: baseDistance };
    }
  };

  return { getPlanetSizeAndDistance };
};
export const useResponsive = useResponsivePlanets;
