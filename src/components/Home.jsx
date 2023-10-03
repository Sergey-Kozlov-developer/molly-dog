import bgImage from './../assets/img/bg.jpg';
function Home() {
  return (
    <header className="header">
      <div className="container">
        <div className="bg__home">
          <img className="bg__logo" src={bgImage} alt="BG" />
        </div>
        <h1 className="header__title">
          Жизнь с собакой в квартире – это увлекательный,
          <br /> интересный и познавательный процесс.
          <br />
          <br />
          Блог о нашей собаке Молли.
        </h1>
      </div>
    </header>
  );
}

export default Home;
