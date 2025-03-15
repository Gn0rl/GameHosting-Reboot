import Image from 'next/image'
import Link from 'next/link'

import styles from './Profile.module.scss'

export function Profile() {
	return (
		<div className={styles.container}>
			<Link href="/profile">
				<Image
					src="/user.png"
					alt="profile"
					width={80}
					height={80}
				/>
			</Link>
		</div>
	)
}
