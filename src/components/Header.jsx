function Header() {
	return (
		<header className="header">
			<div className="header__top">
				<div className="container">
					<div className="header__top-row">
						<h1>Molly Dog</h1>
						{/*<img src="/img/logo.png" alt="Logo"/>*/}
						<div className="header__nav">
							<div className="nav">
								<ul className="nav__list">
									<li><a href="#!">Главная</a></li>
									<li><a href="#!">Блог</a></li>
									<li><a href="#!">Контакты</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<h1 className="header__title">
					Жизнь с собакой в квартире – это увлекательный,<br/> интересный и познавательный
					процесс.<br/><br/>Блог о нашей собаке Молли.
				</h1>
			</div>

		</header>
	);
}

export default Header;