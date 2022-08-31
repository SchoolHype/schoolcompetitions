import Head from 'next/head'
import Image from 'next/image'
import ScrollIndicator from '../components/ScrollIndicator'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Competitions made easy for schools</h1>
          <h2>Just register yourself and we'll handle everything else</h2>
          <h2 className={styles.mainText}>COMING SOON</h2>
          <h2>All school competitions at one place!</h2>
          <p>
            School, District, State, Zonal or National Level <br/>
            100s of competitions to choose from
          </p>
        </div>
        <ScrollIndicator />
      </main>
    </div>
  )
}
