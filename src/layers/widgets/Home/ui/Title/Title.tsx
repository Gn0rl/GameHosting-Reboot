import styles from './Title.module.scss'

export function Title() {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.title}>GAMEHOSTING</div>
				<hr className={styles.underline} />
			</div>
		</div>
	)
}
