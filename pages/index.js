import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import ScrollIndicator from '../components/ScrollIndicator'
import TextInput from '../components/TextInput'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>School Competitions</title>
        <meta name="description" content="Competitions made easy for schools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Competitions made easy for schools</h1>
          <h2>Just register yourself and we&apos;ll handle everything else</h2>
          <h2 className={styles.mainText}>COMING SOON</h2>
          <h2>All school competitions at one place!</h2>
          <p>
            School, District, State, Zonal or National Level <br/>
            100s of competitions to choose from
          </p>

          <div className={styles.notifyInput}>
            <TextInput placeholder={"Enter your email address"} name="email" />
            <Button>Notify</Button>
          </div>

        </div>
        <ScrollIndicator />
      </main>

      <div className={styles.categoriesSection}>

        <h2>All School Competitions at one place</h2>

        <div className={styles.categories}>
          <div className={styles.fillerImage}>
            <Image src='/images/filler.jpg' layout="fill" />
          </div>

          <div className={styles.categories_list}>
            <ul>
              <li>Crossword puzzle</li>
              <li>Poster making</li>
              <li>Debate</li>
              <li>Quiz</li>
              <li>Photography</li>
              <li>Essay writing</li>
              <li>Best out of waste</li>
              <li>Dancing</li>
              <li>Group dancing</li>
              <li>Singing</li>
              <li>Storytelling</li>
              <li>Standup comedy</li>
              <li>Modelling</li>
              <li>Code debugging</li>
              <li>App development</li>
            </ul>
            <p>And much more!</p>
          </div>
        </div>
      </div>

    </div>
  )
}
