import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import Community from './components/community/Community';
import Footer from './components/footer/Footer';
import Contacts from './components/contacts/Contacts';
import Specials from './components/specials/Specials';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='app'>
       <Navbar />
       <Menu />
       <Specials /> 
       <Community />
       <Contacts />
       <Footer />
      </div>
  )
}

export default App
