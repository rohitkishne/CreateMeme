import React, { useEffect, useState } from 'react'
export default function MemeForm() { 

  const [meme, setMeme] = useState({
    topText : "",
    bottomText : "",
    randomImage : "http://i.imgflip.com/1bij.jpg"
  })

  const [allmemes, setAllMemes] = useState([]);

 useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(response => response.json())
      .then(data => {
        setAllMemes(data.data.memes)
      })
  },[])

  function getMemeImage() {
    const randomIdx = Math.floor(Math.random() * allmemes.length)
    const url = allmemes[randomIdx].url;
    setMeme(prevState => ({
      ...prevState,
      randomImage : url
    }))
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name] : value
    }))
  }

  return (
    <section className='meme-section'>
        <div className='meme-form'>
            <div className="input-fields">
                <input 
                  type="text" 
                  name="topText" 
                  id="topText" 
                  className="giveMemeInput" 
                  placeholder='Top Text'
                  onChange={handleChange}
                  value={meme.topText}
                />
                <input 
                  type="text" 
                  name="bottomText" 
                  id="bottomText" 
                  className="giveMemeInput" 
                  placeholder='Bottom Text'
                  onChange={handleChange}
                  value={meme.bottomText}

                />
            </div>
            <button id="meme-submit" className="meme-submit" type="submit" onClick={getMemeImage}>Get a new meme image</button>
        </div>
        <div className="meme--show">
          <img src={meme.randomImage} alt="meme" className="meme-image"/>
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </section >
  )
}
