import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './component/navbar.jsx';
import Contact from './pages/contact/contact.jsx';
import About from './pages/about/about.jsx';
import Detail from './pages/impact/impact.jsx';
import Home from './pages/homepage/home.jsx';
import { ThemeProvider } from './util/theme_component.jsx';
function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<NavBar />}>
              <Route index element={<Home />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/About' element={<About />} />
              <Route path='/Detail' element={<Detail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
