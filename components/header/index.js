import useTheme from '@lib/theme'
import useMounted from '@lib/use-mounted'

import Moon from '@components/icons/moon'
import Sun from '@components/icons/sun'
import utilStyles from '@styles/utils.module.css'

import styles from './header.module.css'

const name = 'DHRUV SHAH'

export default function Header({}) {
  const isMounted = useMounted()
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <header className={styles.header}>
        <h1 className={`${utilStyles.headingMd} ${styles.title}`}>{name}</h1>
        <button
          className={styles.command}
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {isMounted &&
            (theme === 'light' ? (
              <Moon color="var(--fg)" size={30} key="icon-light" />
            ) : (
              <Sun color="var(--fg)" size={30} key="icon-dark" />
            ))}
        </button>
      </header>
    </>
  )
}
