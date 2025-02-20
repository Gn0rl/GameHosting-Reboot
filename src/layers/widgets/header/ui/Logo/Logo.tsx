import Image from 'next/image'

import styles from './Logo.module.scss'

export function Logo() {
	return (
		<div className={styles.logoContainer}>
			<Image
				src="/logo.png"
				alt="GameHosting Reboot"
				width={80}
				height={80}
			/>
			<div className={styles.text}>
				<div className={styles.word}>GAMEHOSTING</div>
				<div className={styles.word}>REBOOT</div>
			</div>
		</div>
	)
}
