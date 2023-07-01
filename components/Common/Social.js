import Link from 'next/link'
import BLOG from '@/blog.config'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Social = () => {
  return (
    <div className='flex gap-4'>

      <Link
        href={`${BLOG.socialLink.instagram}`}
        scroll={false}
        target='_blank'
        aria-label='Instagram'
        className='text-neutral-400 hover:text-neutral-500 active:text-neutral-600 transition duration-100'
      >
        <InstagramIcon></InstagramIcon>
      </Link>

      <Link
        href={`${BLOG.socialLink.twitter}`}
        scroll={false}
        target='_blank'
        aria-label='Twitter'
        className='text-neutral-400 hover:text-neutral-500 active:text-neutral-600 transition duration-100'
      >
        <TwitterIcon></TwitterIcon>
      </Link>



    </div>
  )
}

export default Social
