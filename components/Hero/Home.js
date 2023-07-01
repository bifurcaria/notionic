import BLOG from '@/blog.config'
import Link from 'next/link'
import Avatar from './NotionAvatar.js'
import Social from '../Common/Social.js'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  MailIcon,
  RssIcon,
  ClipboardCheckIcon
} from '@heroicons/react/outline'
import NotionRenderer from '@/components/Post/NotionRenderer'

const Hero = ({ blockMap }) => {
  const [showCopied, setShowCopied] = useState(false)
  const { locale } = useRouter()
  const t = lang[locale]

  const clickCopy = async () => {
    setShowCopied(true)
    navigator.clipboard.writeText(BLOG.link + '/feed')
    setTimeout(() => {
      setShowCopied(false)
    }, 1000)
  }

  return (
    <>
      <div className='container mx-auto flex px-5 py-2 mb-10 md:flex-row flex-col items-center'>
        <div className='flex flex-col md:items-start mb-6 md:mb-0 text-left'>
          <NotionRenderer
            className='md:ml-0'
            blockMap={blockMap}
            frontMatter={{}}
            subPageTitle={null}
          />
          <Social />
        
        </div>
      </div>
    </>
  )
}

export default Hero
