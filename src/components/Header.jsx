import bgImage from './../../public/img/bg.jpg'
function Header() {
	return (

		<header className="header">
			{/*<NavBar />*/}
			<div className="header__top">
			</div>
			<div className="container">
				<div className="bg__home">
					<img className="bg__logo" src={bgImage} alt="BG"/>
				</div>
				<h1 className="header__title">
					Жизнь с собакой в квартире – это увлекательный,<br/> интересный и познавательный
					процесс.<br/><br/>Блог о нашей собаке Молли.
				</h1>
			</div>

		</header>
	);
}

export default Header;