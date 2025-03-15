import React from 'react'

import { OptionalLink } from '@/layers/shared/OptionalLink/OptionalLink'

import styles from './Card.module.scss'

interface Props {
	title: string
	href?: string
	children: React.ReactNode
}

export function Card({ href, title, children }: Props) {
	return (
		<div className={styles.container}>
			<div className={styles.circle}></div>
			<OptionalLink href={href}>
				<div className={styles.card}>
					<div className={styles.title}>{title}</div>
					<div className={styles.content}>{children}</div>
				</div>
			</OptionalLink>
		</div>
	)
}
