import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const  error = useRouteError();
    console.log(error);

  return (
    <div>
      <h1>OOps 404 Not Found</h1>
    </div>
  )
}
