import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/HomeComponents/HeroSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero/>
      {/* Main Section */}
      <div className={styles.main}>
        <Image
          width="450"
          height="600"
          src="/tay-front-main.jpg"
          className={styles.image}
        />
        <div className={styles.bio}>
          <p className={styles.intro}>Hi, I'm Tay, a fitness<br/>enthusiast</p>
          <p className={styles.description}>I've been working as a health and fitness coach since<br/>2017. I started creating online fitness plans and offered<br/>online coaching to my clients. I can't wait to begin working<br/> with you!</p>
        </div>
      </div>

      {/* Featured Workout Programs */}
      <div>
        <h1>Featured Workout Programs</h1>
      </div>
    </>
  )
}
