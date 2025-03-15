import { Card } from '../Card'
import { Title } from '../Title'
import styles from './Home.module.scss'

export function Home() {
	return (
		<main className={styles.container}>
			<Title />
			<div className={styles.cardHolder}>
				<Card title="Создавай!" href="/uploadGame">
					Выложи свою игру
				</Card>
				<Card title="Играй!" href="/games">
					Играй
				</Card>
			</div>
		</main>
	)
}
