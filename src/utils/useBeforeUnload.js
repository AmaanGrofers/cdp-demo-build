import { useEffect } from "react";

function useBeforeUnload() {
  useEffect(() => {
    const alertUser = (e) => {
      e.preventDefault();
      e.returnValue = ""; // For most browsers
    };

    window.addEventListener("beforeunload", alertUser);

    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
}

export default useBeforeUnload;
