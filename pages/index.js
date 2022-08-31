import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Button from '../components/Button'
import ScrollIndicator from '../components/ScrollIndicator'
import TextInput from '../components/TextInput'
import styles from '../styles/Home.module.css'

import {toast} from 'react-toastify'
import {addDoc, collection} from 'firebase/firestore'
import {database} from '../services/firebase'


export default function Home() {

  const [email, setEmail] = useState('')

  const addQuery = () => {
    toast.promise(
      addDoc(collection(database,'schoolcompetitionsqueries'), {
          email: email,
          message: 'Coming Soon Enquiry'
      }), 
      {
        pending: 'Adding details to support queue',
        success: 'Added details to support queue',
        error: 'An error occured while adding details to support queue Please try again later or contact us directly'
      }
    )
  }

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
            <TextInput placeholder={"Enter your email address"} value={email} onChange={e => setEmail(e.target.value)} name="email" />
            <Button onClick={addQuery}>Notify</Button>
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
