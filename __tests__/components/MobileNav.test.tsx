import MobileNav from '@/components/MobileNav';
import headerNavLinks from '@/data/headerNavLinks';
import { fireEvent, render, screen } from '@testing-library/react';

describe('MobileNav', () => {
  let button: HTMLButtonElement;
  let nav: HTMLElement;
  beforeEach(() => {
    render(<MobileNav />)
    button = screen.getByLabelText('Toggle Menu', { selector: 'button' })
    nav = screen.getByTestId('navigation')
  })

  it('renders the mobile nav button', () => {
    expect(button).toBeInTheDocument()
  })

  it('opens the mobile nav when the button is clicked', () => {
    expect(nav).toHaveClass('translate-x-full')
  })

  it('closes the mobile nav when the button is clicked again', () => {
    fireEvent.click(button)
    expect(nav).toHaveClass('translate-x-0')
  })

  it('renders the navigation links', () => {
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(headerNavLinks.length)
  })

  it('closes the mobile nav when a link is clicked', () => {
    fireEvent.click(button)
    const link = screen.getByText(headerNavLinks[0].title)
    fireEvent.click(link)
    expect(nav).toHaveClass('translate-x-full')
  })
})
