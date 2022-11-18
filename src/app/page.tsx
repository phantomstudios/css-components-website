import Image from 'next/image'
import HeroFeatures from '../components/HeroFeatures'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Componentize your CSS styles the right way
        </h1>
        <p className={styles.description}>
          CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience.
        </p>
        <HeroFeatures />
      </main>
    </div>
  )
}
