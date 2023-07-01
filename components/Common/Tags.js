import Link from 'next/link'

const Tags = ({ tags, currentTag }) => {
  if (!tags) return null
  return (
    <div className='tag-container'>
      <div className='flex flex-wrap justify-center mt-4'>
        {Object.keys(tags).map((key) => {
          const selected = key === currentTag
          return (
            <div
              key={key}
              className={`m-1 font-medium rounded-lg whitespace-nowrap hover:text-neutral-100 dark:text-neutral-300 hover:bg-neutral-400 dark:hover:bg-neutral-600 ${
                selected
                  ? 'text-neutral-100 bg-neutral-400 dark:bg-neutral-600'
                  : 'text-neutral-400 bg-neutral-100 dark:bg-night'
              }`}
            >
              <Link key={key} scroll={false}
                href={selected ? '/search' : `/tag/${encodeURIComponent(key)}`}
                className='px-4 py-2 block'
              >
                {`${key} (${tags[key]})`}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tags
