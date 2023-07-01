import Link from 'next/link'

const TagItem = ({ tag }) => (
  <Link href={`/tag/${encodeURIComponent(tag)}`} scroll={false}>
    <p className='mr-2 rounded-full px-2 py-1 bg-neutral-200/50 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 leading-none text-sm'>
      {tag}
    </p>
  </Link>
)

export default TagItem
