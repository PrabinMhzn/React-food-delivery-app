import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/pages/Home'
import FullMenu from './components/pages/FullMenu'
import MealPlans from './components/pages/MealPlans'
import AddOns from './components/pages/AddOns'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Footer from './components/pages/Footer'

function App() {


  return (
    <>
    
    <Router>
      <NavBar/>
        <div>
          <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/fullmenu' element= {<FullMenu/>}/>
            <Route path='/mealplans' element= {<MealPlans/>}/>
            <Route path='/addons' element= {<AddOns/>}/>
            <Route path='/contact' element= {<Contact/>}/>
            <Route path='/about' element= {<About/>}/>

            
          </Routes>
        </div>
        <Footer/>


    </Router>
      
        
    </>
  )
}

export default App
