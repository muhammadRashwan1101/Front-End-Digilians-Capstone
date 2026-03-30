import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function TopScroller() {
    const path = useLocation().pathname;
    useEffect(() => {
      window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    }, [path])
}