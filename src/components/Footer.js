import React from 'react'
import './footer.css'
const footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Royal Bhyamsala. All rights reserved.</p>
      </div>
    </footer>

  )
}

export default footer

