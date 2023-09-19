import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    {/*Header */}

    <HomeHeader/>

    {/*Body */}

    <div className='flex flex-col items-center mt-24 pb-40'>
      <Image width={'300'} height={'100'} src={'/Google-Logo.png'} alt='Google Logo'/>
      <HomeSearch/>
    </div>
    </>
  )
}
