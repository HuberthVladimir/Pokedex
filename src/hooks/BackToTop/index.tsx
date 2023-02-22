import { useEffect, useState } from "react"
import { IoCaretUpSharp } from "react-icons/io5"
import { IconContext } from "react-icons"
import "./styles.scss"

export const BackToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  console.log(scrollPosition)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      className="backToTop"
      onClick={scrollTop}
      style={{ display: `${scrollPosition > 80 ? "flex" : "none"}` }}
    >
      <IconContext.Provider value={{ size: "2.5rem", color: "#FFF" }}>
        <IoCaretUpSharp aria-hidden="true" />
        <span className="sr-only">back to the top of the page</span>
      </IconContext.Provider>
    </button>
  )
}
