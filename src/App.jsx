import './scss/app.scss';

import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import Contacts from './pages/Contacts.jsx';
import Navigation from './components/Navigation.jsx';

import { Route, Routes } from 'react-router';
import { NotFound } from './pages/NotFound.jsx';
import SocialMedia from './components/ContactsBlock/index.jsx';

function App() {
  return (
    <>
      <SocialMedia />
      <div className="container">
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
