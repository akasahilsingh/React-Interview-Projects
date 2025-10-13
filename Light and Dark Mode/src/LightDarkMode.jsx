import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage'

const LightDarkMode = () => {
    // const [mode, setMode] = useState(false)
    const [mode, setMode] = useLocalStorage("key", "dark")

    const handleMode = () => {
       setMode(mode === "light" ? "dark" : "light")
    }
  // return (
  //   <div className={mode === false ? "light-mode" : "dark-mode"}>
  //     <h1 className={mode === false ? "light-mode-h1" : "dark-mode-h1"}>Hello, You</h1>
  //     <button onClick={()=>setMode(!mode)}>{mode === false ? "Set to Dark Mode" : "Set to Light Mode"}</button>
  //   </div>
  // )

  // Dark N Light Mode using custom hook
  return (
    <div className='container' data-theme={mode}>
    <h1>Hello, You</h1>
    <button onClick={()=>handleMode()}>Change Theme</button>
    </div>
  )
}

export default LightDarkMode
