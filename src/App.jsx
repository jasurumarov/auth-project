import "./scss/style.scss"
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Components
import ScrollToTop from "./components/scrollToTop/ScrollToTop"
import AnimCursor from "./components/animCursor/AnimCursor"
import NotFound from "./components/notFound/NotFound" 
import HeaderTop from "./components/header-top/HeaderTop";
import HeaderBottom from "./components/header-bottom/HeaderBottom";
import Footer from "./components/footer/Footer";

// Pages
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'
import Auth from './pages/auth/Auth'
import SingleRoute from './pages/singleRoute/SingleRoute'

function App() {
  return (
    <>
      <ScrollToTop/>
      <AnimCursor/>
      
      <HeaderTop/>
      <HeaderBottom/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/product/:id" element={ <SingleRoute/> }/> {/* Dynamic Route */}
        <Route path="/register" element={<Login/>}/>

        <Route path="/" element={<Auth/>}>
          <Route path="admin" element={<Admin/>}/>
        </Route>

        <Route path="*" element={<NotFound/>}/>
      </Routes>

      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App
