import s from './Home.module.scss';
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';


function Home() {
	return (
		<main className={s.home}>
			<article className={s.today_info}>
				<ThisDay />
				<ThisDayInfo />
			</article>
		</main>
	)
}

export default Home;