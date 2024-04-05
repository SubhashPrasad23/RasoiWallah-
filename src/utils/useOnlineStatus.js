import React, { useEffect, useState } from 'react'

function useOnlineStatus() {
const[onlineStatus, setOnlineState]=useState(true)
useEffect(()=>{
window.addEventListener("offline",()=>{
setOnlineState(false)
})
window.addEventListener("online",()=>{
setOnlineState(true)
})

},[]);
  return onlineStatus
}

export default useOnlineStatus
