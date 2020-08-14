import Head from 'next/head'
import Link from 'next/link'

import Header from '@components/header';

import styles from './layout.module.css'


export const siteTitle = 'Dhruv S'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  )
}
