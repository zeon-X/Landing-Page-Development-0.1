import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contactus from './components/Contactus/Contactus';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MeetUs from './components/MeetUs/MeetUs';
import Project from './components/Project/Project';
import Service2 from './components/Service2/Service2';
import Services from './components/Services/Services';

function App() {

  return (
    <div className="App w-full">
      <Header></Header>

      <Home></Home>
      {/* <Services></Services>
      <Service2></Service2> */}
      {/* <About></About> */}
      <Blog></Blog>
      <Contactus></Contactus>



      {/* <Routes>
        <Route path='/' element={<Home />}>
          <Route path='services' element={<Services/>}/>
          <Route path='services' element={<Service2/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='contact' element={<Contactus/>}/>
        </Route>
      </Routes> */}

      <Footer></Footer>

    </div>
  );
}

export default App;
