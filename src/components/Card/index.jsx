import styles from './card.scss'

function Index() {
	return (
		<div className="blog">
			<div className="meta">
				<img className="photo" src="/public/img/blog/molly.jpg" alt="Image1"></img>
			</div>
			<div className="description">
				<h1 className="title__h1">Молли 7 месяцев</h1>
				<h2>Хвост уже потихоньку пушится, а взгляд приобретает некую осмысленность</h2>
				<p> Уже не сидит на итальянском корме (потому что его не привозят), а ест русский Сириус (и он довольно неплох), а еще: морковь, яблоки, творог, огурцы и арахисовую пасту ммм.
					По-прежнему расставляет лапы в разные стороны и трется при встрече как кошка🐱
					Храпит как взорвавшаяся Бетельгейзе и топает как стадо слонов☺️
					Если что-то не получает, толкается как гопник🧢 или ворчит как старая перечница 👵🏻
					Мы довольны</p>
				{/*<p className="read-more">*/}
				{/*	<a href="#">Read More</a>*/}
				{/*</p>*/}
			</div>
		</div>
	);
}
export default Index;