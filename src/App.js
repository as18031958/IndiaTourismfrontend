import {Routes,Route} from 'react-router-dom'
import Homepage from './AllPage/Homepage';
import Register from './Authpage/Register';
import Login from './Authpage/Login';
import IndiaTourism from './AllPage/IndiaTourism';
import Placestovisit from './AllPage/Placestovisit';
import TourOffers from './AllPage/TourOffers';
import TourPackages from './AllPage/TourPackages';
import Contact from './AllPage/Contact';
import Dyanamic from './AllPage/Dyanamic';
import Pnf from './Layoutpage/Pnf';
import Layout from './Layoutpage/Layout';
import PaymentProcedure from './Layoutpage/PaymentProcedure';
import TermsandCondition from './Layoutpage/TermsandCondition';
 
  
  
  
  
  function App() {
    return (
      
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='register' element={<Register/>}/> 
        <Route path='/login' element={<Login/>}/>
        <Route path='/indiatourism' element={<IndiaTourism/>}/>
        <Route path='/placestovisit' element={<Placestovisit/>}/>
        <Route path='/touroffers' element={<TourOffers/>}/>
        <Route path='/tourpackages' element={<TourPackages/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='dyanamic' element={<Dyanamic/>}/>
        <Route path='layout'   element={<Layout/>}/>
        <Route path='paymentprocedure' element={<PaymentProcedure/>}/>
        <Route path='termsandcondition' element={<TermsandCondition/>}/>
        {/* <Route path='' element={</>}/> */}
        <Route path='/dynamic/:id' element={<Dyanamic/>}/>
        <Route path='*' element={<Pnf/>}/> 
      </Routes>
      
  
    );
  }
  
  export default App;
  

