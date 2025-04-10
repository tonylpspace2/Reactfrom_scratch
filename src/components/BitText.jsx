import React from 'react'
import './BitText.css'

function BitText({ text }) {
  // Function to create 8-bit style text
  const createBitText = (inputText) => {
    return inputText.split('').map((char, index) => (
      <div key={index} className="bit-char">
        {char}
      </div>
    ))
  }

  return (
    <div className="bit-text-container">
      {createBitText(text.toUpperCase())}
    </div>
  )
}

export default BitText 