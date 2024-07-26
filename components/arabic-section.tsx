import { plexSansArabic, amiri, rakas } from '@/lib/fonts'
import Image from 'next/image'
import React from 'react'

export default function ArabicSection() {
  return (
    <div dir={"rtl"} className='space-y-10'>
      <div className={plexSansArabic.className}>
        <h3 className='my-3 text-4xl text-center font-black'>Plex Sans Arabic</h3>
        <div className='space-y-2'>
          <p className="font-extralight text-xl">أنا ضياء، طالب في علوم الحاسوب، وأعيش في تونس.</p>
          <p className="font-medium text-2xl">أنا ضياء، طالب في علوم الحاسوب، وأعيش في تونس.</p>
          <p className="font-extrabold text-3xl">أنا ضياء، طالب في علوم الحاسوب، وأعيش في تونس.</p>
        </div>
      </div>
      <Image src={"sep.svg"} height={20} width={750} alt='' className='mx-auto' />
      <div className={amiri.className}>
        <h3 className='my-3 text-4xl text-center font-black'>Amiri</h3>
        <div className='space-y-2'>
          <p className="font-normal text-2xl">أنا ضياء، طالب في علوم الحاسوب، وأعيش في تونس.</p>
          <p className="font-bold text-3xl">أنا ضياء، طالب في علوم الحاسوب، وأعيش في تونس.</p>
        </div>
      </div>
      <Image src={"sep.svg"} height={20} width={750} alt='' className='mx-auto' />
      <div className={rakas.className}>
        <h3 className='my-3 text-4xl text-center font-black tracking-wider'>Rakas</h3>
        <div className='space-y-2'>
          <p className="font-normal text-2xl">أنا ضياء، طالب في علوم الحاسوب، وأعيش في تونس.</p>
        </div>
      </div>
    </div>
  )
}
