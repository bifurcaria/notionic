import { TranslateIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LangSwitcher = () => {
  const { locale, asPath } = useRouter()

  return (
    <>
      <Link passHref href={asPath} locale={locale === 'es' ? 'en' : 'es'} scroll={false}>
        <button
          aria-label='LangSwitcher'
          className='p-2 hover:bg-neutral-200/50 dark:hover:bg-neutral-700 cursor-pointer rounded-lg dark:text-neutral-100'
        >
          <TranslateIcon className='h-5 w-5' />
        </button>
      </Link>
    </>
  )
}

export default LangSwitcher
