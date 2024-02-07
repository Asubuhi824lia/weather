import s from './Home.module.scss';
import Days from './components/Days/Days';
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';


function Home() {
	return (
		<main className={s.home}>
			<article className={s.today_info}>
				<ThisDay/>
				<ThisDayInfo/>
			</article>
			<Days/>
		</main>
	)
}

export default Home;