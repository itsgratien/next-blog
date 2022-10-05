import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home = ()=> {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Blog</title>
        <meta name="description" content="Blog Web App Built With Next JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       
      </main>

    </div>
  )
}

export default Home;