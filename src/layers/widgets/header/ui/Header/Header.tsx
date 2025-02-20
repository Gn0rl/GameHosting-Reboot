import { Logo } from '../Logo'
import { Profile } from '../Profile'
import styles from './Header.module.scss'

export function Header() {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<Logo />
				<Profile />
			</div>
			<hr className={styles.underline} />
		</div>
	)
}
