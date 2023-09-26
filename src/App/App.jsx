import Header from "../components/Header.jsx";
import './../style.scss'
import {Route, Router, Routes} from "react-router";
import Blog from "../components/Blog.jsx";
import Contacts from "../components/Contacts.jsx";
import {Link, NavLink} from "react-router-dom";

function App() {

	return (
		<>
			<div className="container">
				<div className="header__top-row">
					<h1>Molly Dog</h1>
					{/*<img src="/img/logo.png" alt="Logo"/>*/}
					<div className="header__nav">
						<div className="nav">
							<ul className="nav__list">
								{/*<NavLink to="/">Главная</NavLink>*/}
								<NavLink
									to="/"
									className={({isActive}) => (isActive ? "link-active" : "nav__list")}
								>Главная</NavLink>
								<NavLink
									to="/blog"
									className={({isActive}) => (isActive ? "link-active" : "nav__list")}
								>Блог</NavLink>
								<NavLink
									to="/contacts"
									className={({isActive}) => (isActive ? "link-active" : "nav__list")}
								>Контакты</NavLink>

							</ul>
						</div>
					</div>
				</div>

			</div>

			<Routes>
				<Route path="/" element={<Header/>}/>
				<Route path="/blog" element={<Blog/>}/>
				<Route path="/contacts" element={<Contacts/>}/>
			</Routes>
		</>

	)
}

// The Navigation Bar
// This component will be used on all three pages: Home, About, and Contact


export default App
