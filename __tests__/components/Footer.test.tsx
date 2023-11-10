import Footer from '@/components/Footer';
import { render, screen } from '@testing-library/react';

import siteMetadata from '@/data/siteMetadata';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('renders the author name', () => {
    const author = new RegExp(`${siteMetadata.author}.*`, 'i')
    const authorElement = screen.getByText(author)
    expect(authorElement).toBeInTheDocument()
  })

  it('renders the current year', () => {
    const year = new RegExp(`${new Date().getFullYear()}.*`, 'i')
    const yearElement = screen.getByText(year)
    expect(yearElement).toBeInTheDocument()
  })

  it('renders header title', () => {
    const title = new RegExp(`${siteMetadata.author}.*`, 'i')
    const headerTitleElement = screen.getByText(title)
    expect(headerTitleElement).toBeInTheDocument()
  })
})