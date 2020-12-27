import useTheme from '@lib/theme'
import useMounted from '@lib/use-mounted'

import Moon from '@components/icons/moon'
import Sun from '@components/icons/sun'
import utilStyles from '@styles/utils.module.css'

import styles from './hello.module.css'

const salutations = [
  { text: 'नमस्ते', lang: 'Hindi' },
  { text: 'Hola', lang: 'Spanish' },
  { text: 'Hello', lang: 'English' },
  { text: 'Tjena', lang: 'Swedish' },
]
const index = Math.floor(Math.random() * salutations.length)
const salutation = salutations[index]

export default function Hello({}) {
  return (
    <section className={styles.wrapper}>
      <article className={styles.hello}>{salutation.text}!</article>
      <aside className={styles.lang}>[ {salutation.lang} ] </aside>
    </section>
  )
  }
