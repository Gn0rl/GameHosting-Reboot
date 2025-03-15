import Link from 'next/link'

import styles from './Card.module.scss'

interface Props {
	title: string
	href?: string
	children: React.ReactNode
}

export function Card({title, href, children}: Props) {
	return (
		<div className={styles.container}>
			<div className={styles.circle}></div>
			{href ? (
				<Link href={href}>
					<div className={styles.card}>
						<div className={styles.title}>{title}</div>
						<div className={styles.content}>{children}</div>
					</div>
				</Link>
			) : (
				<div className={styles.card}>
					<div className={styles.title}>{title}</div>
					<div className={styles.content}>{children}</div>
				</div>
			)}
		</div>
	)
}
