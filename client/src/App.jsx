
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import UpdateUser from './UpdateUser'
import CreateUser from './CreateUser'
import Sections from './Sections'
import Navbar from './Navbar'
import Footer from './Footer'
import UpdateSection from './UpdateSection'
import CreateSection from './CreateSection'
function App() {


  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     
      <Routes>
        <Route path='/' element={<Users/>}></Route> 
        
        
         <Route path='/create' element={<CreateUser/>}></Route> 
         <Route path='/update/:id' element={<UpdateUser/>}></Route> 
          
         <Route path='/createsection' element={<CreateSection/>}></Route> 
         <Route path='/updatesection/:id' element={<UpdateSection/>}></Route>
        
         <Route path='/sections' element={<Sections/>}></Route>  
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App
