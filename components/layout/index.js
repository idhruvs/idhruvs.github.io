import Head from 'next/head'
import Link from 'next/link'

import Header from '@components/header'

import styles from './layout.module.css'

export const siteTitle = 'Dhruv Shah '

export default function Layout({ children, home }) {
  return (
    <section className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Description"
          content="Dhruv Shah Full Stack Developer Portfolio Javascript Tata Consultancy Services"
        />
      </Head>
      <Header />
      <main>{children}</main>
    </section>
  )
}
