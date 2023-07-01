import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import Social from '../Common/Social.js'
import Avatar from './NotionAvatar.js'
import NotionRenderer from '@/components/Post/NotionRenderer'

const NoteHero = ({ blockMap }) => {
  const { locale } = useRouter()
  const t = lang[locale]
  return (
    <>
      <div className='container mx-auto items-center'>
        <div className='flex flex-col md:items-start mb-6 md:mb-0 text-left'>
          <NotionRenderer
            className='md:ml-0'
            blockMap={blockMap}
            frontMatter={{}}
            subPageTitle={null}
          />
          <Social />
          <div className='text-neutral-400 text-xs font-light py-4'>
            {t.HERO.NOTES.TEXT_FOOTER}
          </div>
        </div>
      </div>
    </>
  )
}

export default NoteHero
