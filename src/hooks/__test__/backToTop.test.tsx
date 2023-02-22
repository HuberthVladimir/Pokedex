// Test:
import { render, fireEvent, screen } from "@testing-library/react"
import { BackToTop } from "hooks/BackToTop"
import "@testing-library/jest-dom"

describe("BackToTop", () => {
  it("should render the button with the correct style", () => {
    render(<BackToTop />)

    const button = screen.getByTestId("back-to-top-button")
    expect(button).toHaveStyle("display: none")
  })

  it("should render the button with the correct style when scroll position is greater than 80", () => {
    render(<BackToTop />)
    window.pageYOffset = 81
    fireEvent.scroll(window)

    const button = screen.getByTestId("back-to-top-button")
    expect(button).toHaveStyle("display: flex")
  })

  it("should scroll to the top of the page when the button is clicked", () => {
    window.scrollTo = jest.fn()
    render(<BackToTop />)

    const button = screen.getByTestId("back-to-top-button")
    fireEvent.click(button)
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" })
  })
})
