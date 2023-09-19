import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    {/*Header */}

    <HomeHeader/>

    {/*Body */}

    <div className='hidden sm:flex sm:flex-col sm:items-center sm:mt-24 sm:pb-40'>
      <Image width={'300'} height={'100'} src={'/Google-Logo.png'} alt='Google Logo'/>
      <HomeSearch/>
    </div>
    <div className='flex flex-col justify-center items-center mt-5 pb-60'>
      <Image width={'150'} height={'50'} src={'/Google-Logo.png'} alt='Google Logo'/>
      <HomeSearch/>
    </div>
    </>
  )
}
