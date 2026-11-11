import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cars from "./pages/Cars"
import CarDetails from "./pages/CarDetails"
import CompareCars from "./pages/CompareCars"
import BookTestDrive from "./pages/BookTestDrive"
import FindDealer from "./pages/FindDealer"
import Footer from "./components/Footer"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsConditions from "./pages/TermsConditions"
import Contact from "./pages/Contact"
import About from "./pages/About"
import ElectricVehiclesPage from "./pages/ElectricVehiclesPage"
import ElectricCarsPage from "./pages/ElectricCarsPage"
import ScrollToTop from "./components/ScrollToTop"
import NotFound from "./components/NotFound"



function App() {

  return (
    <>
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/cars" element={<Cars />} />
       <Route path="/cars/:slug" element={<CarDetails />} />
       <Route path="/compare" element={<CompareCars />} />
       <Route path="/book-test-drive" element={<BookTestDrive />} />
       <Route path="/dealer" element={<FindDealer />} />
       <Route path="/privacy-policy" element={<PrivacyPolicy />} />
       <Route
  path="/terms"
  element={<TermsConditions />}
/>
       <Route path="/contact" element={<Contact />} />
       <Route path="/about" element={<About />} />
       <Route path="/electric-cars" element={<ElectricCarsPage />} />
       <Route path="*" element={<NotFound />} />

      </Routes>
     
     <Footer/>
     </Router>
    </>
  )
}

export default App
