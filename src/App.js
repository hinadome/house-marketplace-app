import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore';
import Offers from './pages/Offers';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Category from './pages/Category';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import CreateListing from './pages/CreateListing';
import Listing from './pages/Listing';
import Contact from './pages/Contact';
import EditListing from './pages/EditListing';
import PrivateRoute from './components/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
  <>
  <Router>
    <Routes>
    <Route path='/' element={<Explore />}/>
    <Route path='/offers' element={<Offers />}/>
    <Route path='/category/:categoryName' element={<Category />}/>
    <Route path='/profile' element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />} />
    </Route>
    <Route path='/sign-in' element={<SignIn />}/>
    <Route path='/sign-up' element={<SignUp />}/>
    <Route path='/forgot-password' element={<ForgotPassword />}/>
    <Route path='/create-listing' element={<PrivateRoute />}>
        <Route path='/create-listing' element={<CreateListing />}/>
    </Route>
    <Route path='/edit-listing/:listingId' element={<PrivateRoute />}>
        <Route path='/edit-listing/:listingId' element={<EditListing />}/>
    </Route>
    <Route path='/category/:categoryName/:listingId' element={<Listing />}/>
    <Route path='/contact/:landlordId' element={<Contact />}/>
    </Routes>
    <Navbar />
  </Router>
  <ToastContainer />
  </>
  );
}

export default App;
