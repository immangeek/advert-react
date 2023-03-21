import React from "react"
import Header from "../header/artist"
import Navbar from "../navbar/artist"

function CustomLayout({ children }) {
    return (
      <div>
        <Header />
        <Navbar />
        {children}
      </div>
    )
  }
  
  export default CustomLayout