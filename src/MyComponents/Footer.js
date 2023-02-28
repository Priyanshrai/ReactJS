import React from 'react'

const Footer = () => {
  let footerStyle={
      position:"absolute",
      top: "100vh",
      width: "100%",
      border: "2px solid red"
  }
  return (
    
    <footer className="bg-dark text-light" style={footerStyle}>
      <p className="text-center">
      Copyright &copy; Priyanshrai.com
      </p>
     
    </footer>
  )
}

export default Footer
