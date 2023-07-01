import BLOG from '@/blog.config'
import { useState } from 'react'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'

import WechatPay from '@/components/Post/WechatPay'
import { MailIcon, ThumbUpIcon } from '@heroicons/react/outline'

const PostFooter = () => {
  const [showPay, setShowPay] = useState(false)
  const { locale } = useRouter()
  const router = useRouter()
  const t = lang[locale]

  return (
    <div className='w-full pb-12 justify-between font-medium text-neutral-500 dark:text-neutral-400'>
      <div className='flex flex-wrap sm:flex-nowrap sm:justify-between items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-700 relative gap-3 px-4 py-3'>
        <div className='w-full sm:w-auto max-w-screen-sm inline-block text-sm font-light md:text-base mb-2 sm:mb-0'>
          {t.LAYOUT.NOTICE_TEXT}
        </div>
        <div className='flex flex-wrap gap-3'>
          {BLOG.showWeChatPay && (
            <button
              onClick={() => setShowPay((showPay) => !showPay)}
              className='flex gap-1 bg-neutral-200/50 dark:bg-neutral-600 hover:bg-neutral-300 dark:hover:bg-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 text-sm rounded-lg px-4 py-2'
            >
              <ThumbUpIcon className='flex flex-col justify-center items-center select-none cursor-pointer relative w-5 h-5' />
              {t.LAYOUT.PAY_BUTTON}
            </button>
          )}
        </div>
      </div>
      {showPay && <WechatPay />}
    </div>
  )
}

export default PostFooter
