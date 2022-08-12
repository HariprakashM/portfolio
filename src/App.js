import logo from './logo.svg';
import './App.css';
import './stylesheets/home.css'
import './stylesheets/header-footer.css'
import './stylesheets/courosel.css'
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration:500
});
function App() {
  return (
    <div className="App">
      <Home/>
      {/* <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
