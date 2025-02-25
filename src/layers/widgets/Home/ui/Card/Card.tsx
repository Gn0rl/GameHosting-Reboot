import Link from 'next/link'

import styles from './Card.module.scss'

interface Props {
	title: string
	href?: string
	children: React.ReactNode
}

export function Card(Props: Props) {
	return (
		<div className={styles.container}>
			<div className={styles.circle}></div>
			{Props.href ? (
				<Link href={Props.href}>
					<div className={styles.card}>
						<div className={styles.title}>{Props.title}</div>
						<div className={styles.content}>{Props.children}</div>
					</div>
				</Link>
			) : (
				<div className={styles.card}>
					<div className={styles.title}>{Props.title}</div>
					<div className={styles.content}>{Props.children}</div>
				</div>
			)}
		</div>
	)
}
