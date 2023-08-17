import React from 'react'

function Header() {
  return (
    <header className='navbar'>
        <div className="logo-title">
            <img src="src/assets/meme-logo.png" alt="meme logo" className='meme-logo'/>
            <span className="meme--nav-name">Meme Generator</span>
        </div>
        <div className="nav-project-course">React Course - Project 3</div>
    </header>
  )
}

export default Header