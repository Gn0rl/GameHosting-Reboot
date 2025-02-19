import Image from 'next/image'

import styles from './Header.module.scss'

export function Header() {
	return (
		<div className={styles.container}>
			<div className={styles.contentContainer}>
				<Image
					src="/logo.png"
					alt="GameHosting Reboot"
					width={80}
					height={80}
				></Image>
				<div className={styles.headername}>
					<div className={styles.headerText}>GAMEHOSTING</div>
					<div className={styles.headerText}>REBOOT</div>
				</div>
			</div>
			<hr className={styles.underline} />
		</div>
	)
}
