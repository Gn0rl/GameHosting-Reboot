import Link from 'next/link'

import styles from './Card.module.scss'
import React from 'react'

interface Props {
	title: string
	href?: string
	children: React.ReactNode
}

export function Card(props: Props) {
	return (
		<div className={styles.container}>
			<div className={styles.circle}></div>
			{getCard(props)}
		</div>
	)
}

function getCard({title, href, children}: Props){
	if(href) {
		return (
			<Link href={href}>
				<div className={styles.card}>
					<div className={styles.title}>{title}</div>
					<div className={styles.content}>{children}</div>
				</div>
			</Link>
		)
	} 
	else {
		return (
			<div className={styles.card}>
				<div className={styles.title}>{title}</div>
				<div className={styles.content}>{children}</div>
			</div>
		)
	}
}