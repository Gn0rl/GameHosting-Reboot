import { Card } from '../Card'
import { Title } from '../Title'
import styles from './Home.module.scss'

export function Home() {
	return (
		<div className={styles.container}>
			<Title />
			<div className={styles.cardHolder}>
				<Card title="Создавай!" href="/uploadGame">
					Выложи свою игру
				</Card>
				<Card title="Играй!" href="/play">
					Играй
				</Card>
			</div>
		</div>
	)
}
