import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
const err = useRouteError()
// console.log(err)
  return (
    <>
      <h1>OPPS!</h1>
      <h2>Something Went Wrong</h2>
<h3>{err.status} : {err.statusText}</h3>
    </>
  )
}

export default Error
