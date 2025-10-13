import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, theme) => {

    const [value, setValue] = useState(()=> {
        let currentTheme;

        try {
        currentTheme = JSON.parse(localStorage.getItem(key) || String(theme))
        } catch(e) {
            console.log(e);
            currentTheme = theme;
        }

        return currentTheme;
    })

    useEffect(()=> {
    localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    
  return [value, setValue]
}

export default useLocalStorage
