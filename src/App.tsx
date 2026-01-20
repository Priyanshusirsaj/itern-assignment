
import './App.css'
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import SecondNav from './Component/SecondNav';

import CreateBlog from "./pages/CreateBlog";

function App() {


  return (
    <>
      <Navbar />
    <SecondNav />
   <CreateBlog />
   <Footer />
    </>
  )
}

export default App
