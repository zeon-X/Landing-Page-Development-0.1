import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Blog from './components/Blog/Blog';
import AppointmentPoster from './components/AppointmentPoster/AppointmentPoster';
import Departments from './components/Departments/Departments';
import Suggestion from './components/Suggestion/Suggestion';
import Service3 from './components/Service3/Service3';
import WhyWeSpecial from './components/WhyWeSpecial/WhyWeSpecial';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Services></Services>
      <Blog></Blog>
      <AppointmentPoster></AppointmentPoster>
      <Departments></Departments>
      <Service3></Service3>
      <WhyWeSpecial></WhyWeSpecial>
      <Suggestion></Suggestion>
      <Footer></Footer>


    </div>
  );
}

export default App;
