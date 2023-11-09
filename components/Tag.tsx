import { slug } from 'github-slugger'
import Link from 'next/link'

interface Props {
  text: string
  href?: string
}

const Tag = ({ text, href }: Props) =>
  href ? (
    <Link
      href={slug(href)}
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {text.split(' ').join('-')}
    </Link>
  ) : (
    text
  )

export default Tag
