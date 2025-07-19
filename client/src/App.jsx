import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import PrivacyPolicy from './components/PrivacyPolicy'
import About from './components/About'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'
import HotelReg from './components/HotelReg'
import Layout from './pages/HotelOwner/Layout'
import DashBoard from './pages/HotelOwner/DashBoard'
import AddRoom from './pages/HotelOwner/AddRoom'
import ListRoom from './pages/HotelOwner/ListRoom'

const App = () => {

  // isOwnerPath me T/F store hoga based on path me "owner" word hain ki nahi
  const isOwnerPath=useLocation().pathname.includes("owner")
  return (
    <div>
      {/* navbar tabhi dikhegi jab path me owner naa ho, sirf user ko dikhega, owner kya karega dekh kar*/}
      {!isOwnerPath && <Navbar/>}
      {false && <HotelReg/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/rooms" element={<AllRooms/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/rooms/:id" element={<RoomDetails/>}/>
          <Route path="/my-booking" element={<MyBookings/>}/>
          <Route path="/owner" element={<Layout/>}>
              <Route index element={<DashBoard/>} />
              <Route path="add-room" element={<AddRoom/>} />
              <Route path="list-room" element={<ListRoom/>} />
          </Route>

        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App