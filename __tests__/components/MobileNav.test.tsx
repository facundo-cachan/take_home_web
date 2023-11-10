import MobileNav from '@/components/MobileNav'
import headerNavLinks from '@/data/headerNavLinks'
import { fireEvent, render, screen } from '@testing-library/react'

describe('MobileNav', () => {
  beforeEach(() => {
    render(<MobileNav />)
  })

  it.skip('renders the mobile nav button', () => {
    const button = screen.getByLabelText('Toggle Menu')
    expect(button).toBeInTheDocument()
  })

  it.skip('opens the mobile nav when the button is clicked', () => {
    const button = screen.getByLabelText('Toggle Menu')
    fireEvent.click(button)
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveClass('translate-x-0')
  })

  it.skip('closes the mobile nav when the button is clicked again', () => {
    const button = screen.getByLabelText('Toggle Menu')
    fireEvent.click(button)
    fireEvent.click(button)
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveClass('translate-x-full')
  })

  it.skip('renders the navigation links', () => {
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(headerNavLinks.length)
  })

  it.skip('closes the mobile nav when a link is clicked', () => {
    const button = screen.getByLabelText('Toggle Menu')
    fireEvent.click(button)
    const link = screen.getByText(headerNavLinks[0].title)
    fireEvent.click(link)
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveClass('translate-x-full')
  })
})