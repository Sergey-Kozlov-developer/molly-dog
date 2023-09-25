import Header from "../components/Header.jsx";
import {Route, Router, Routes} from "react-router";
import Blog from "../components/Blog.jsx";
import Contacts from "../components/Contacts.jsx";

function App() {

  return (
		<Header />
		// <Router>
		// 	<Routes>
		// 		<Router path="/" element={<Header />} />
		// 		<Router path="/blog" element={<Blog />} />
		// 		<Router path="/contacts" element={<Contacts />} />
		// 	</Routes>
		// </Router>



  )
}

export default App
