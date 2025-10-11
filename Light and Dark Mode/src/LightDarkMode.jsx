import React, { useState } from 'react'

const LightDarkMode = () => {
    const [mode, setMode] = useState(false)

    const handleMode = () => {

    }
  return (
    <div className={mode === false ? "light-mode" : "dark-mode"}>
      <h1 className={mode === false ? "light-mode-h1" : "dark-mode-h1"}>Hello, You</h1>
      <button onClick={()=>setMode(!mode)}>{mode === false ? "Set to Dark Mode" : "Set to Light Mode"}</button>
    </div>
  )
}

export default LightDarkMode
