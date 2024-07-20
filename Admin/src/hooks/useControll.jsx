import { useEffect } from "react";

const usePreventKeyCombinations = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.key === "F12" ||
        (event.ctrlKey && event.key === "p") ||
        (event.ctrlKey && event.shiftKey && event.key === "I")
      ) {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};

export default usePreventKeyCombinations;
