import React from 'react'
import Middle from "./components/Middle"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
     <img className='vitalik' src={"https://www.cryptotimes.io/wp-content/uploads/2022/02/ETH-DENVER-2022-vitalik-website-800x500.jpg"} alt="vitalik buterin" />
     <Middle/>
     <Footer/>
    </div>
  )
}

export default App
