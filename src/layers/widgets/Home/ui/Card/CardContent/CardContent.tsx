import Link from 'next/link'
import React from 'react'

import styles from './CardContent.module.scss'

interface Props {
	href?: string
	children: React.ReactNode
	title: string
}

export function CardContent(props: Props) {
	return getCard(props)
}

function getCard({ title, href, children }: Props) {
	if (href) {
		return (
			<Link href={href}>
				<div className={styles.card}>
					<div className={styles.title}>{title}</div>
					<div className={styles.content}>{children}</div>
				</div>
			</Link>
		)
	} else {
		return (
			<div className={styles.card}>
				<div className={styles.title}>{title}</div>
				<div className={styles.content}>{children}</div>
			</div>
		)
	}
}
