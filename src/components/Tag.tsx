import Link from 'next/link';

interface Props {
  text: string
  href?: string
}

const Tag = ({ text, href }: Props) => {
  const label = text.split(' ').join('-')

  return href ? (
    <Link
      href={href as string}
      className={`mr-3
      text-sm
      font-medium
      uppercase
      text-primary-500
      hover:text-primary-600
      dark:hover:text-primary-400`}
    >
      {label}
    </Link>
  ) : (
    label
  )
}

export default Tag
