import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    const setWindowSize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
    setWindowSize()
    window.addEventListener("resize", setWindowSize)
    return () => window.removeEventListener("resize", setWindowSize)
  }, [])

  return { width, height }
}