import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
    resWidth: number;
    resHeight: number;
  }>({
    width: undefined,
    height: undefined,
    resWidth: undefined,
    resHeight: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      const res = Math.ceil(window.devicePixelRatio);

      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        resWidth: window.innerWidth * res,
        resHeight: window.innerHeight * res,
      });
    };

    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
