import React, { use, useState } from 'react'
import { FaStar } from "react-icons/fa";


const StarRating = ({starnum = 10 }) => {

   const [rating, setRating] = useState(0)
   const [hover, setHiver] = useState(0)

    const mouseMoveFunc = (getCurrentId) => {
       console.log("Mouse Move is",getCurrentId)
    }

     const mouseLeaveFunc = () => {
        console.log("Mouse Leave is")
    }

     const mouseClickedFunc = (getCurrentId) => {
        console.log("Mouse clicked is",getCurrentId)
    }
  return (
    <div className = "stars">
       {[...Array(starnum)].map((_, index) => {
        
        index+=1
        return (
         <FaStar  key={index}
         
         onClick={()=>mouseClickedFunc(index)}
         onMouseMove={()=> mouseMoveFunc(index)}
         onMouseLeave={()=> mouseLeaveFunc()}
         size={40}
         />)
         
})}
    </div>
  )
}

export default StarRating
