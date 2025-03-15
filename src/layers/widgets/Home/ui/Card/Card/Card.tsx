import React from 'react'

import { CardContent } from '../CardContent'
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
			<CardContent href={href} title={title}>
				{children}
			</CardContent>
		</div>
	)
}
