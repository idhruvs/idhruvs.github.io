import Github from '@components/icons/github'
import StackOverflow from '@components/icons/stackoverflow'
import Twitter from '@components/icons/twitter'
import Medium from '@components/icons/medium'
import LinkedIn from '@components/icons/linkedin'

import styles from './socialicons.module.css'

const SocialIcons = (props, context) => {
  return (
    <div className={styles.socialIcons}>
      <a target="_blank" href="https://github.com/idhruvs" passHref={true}>
        <Github size={20} color="var(--fg)" />
      </a>

      <a target="_blank" href="https://twitter.com/idhruvs">
        <Twitter size={20} color="var(--fg)" />
      </a>

      <a target="_blank" href="https://stackoverflow.com/story/idhruvs">
        <StackOverflow size={20} color="var(--fg)" />
      </a>

      <a target="_blank" href="https://linkedin.com/dhruv-shah-">
        <LinkedIn size={20} color="var(--fg)" />
      </a>

      <a target="_blank" href="https://medium.com/@idhruv">
        <Medium size={20} color="var(--fg)" />
      </a>
    </div>
  )
}

export default SocialIcons
