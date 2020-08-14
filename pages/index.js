import Head from 'next/head'

import Layout, { siteTitle } from '@components/layout'
import Hello from '@components/hello'
import SocialIcons from '@components/socialicons'

import utilStyles from '@styles/utils.module.css'

export default function Home({}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Hello />
      <section className={utilStyles.intro}>
        <article>
          I'm Dhruv, a Full-Stack Web Developer currently living in Stockholm,
          Sweden. I enjoy building solutions and have a keen interest in
          creating effective User Experience. I have a diverse set of skills
          ranging from HTML + CSS + Javascript + Angular + React + Redux, to
          deployment of Containerized Applications on Kubernetes.
        </article>
        <SocialIcons />
      </section>
    </Layout>
  )
}
