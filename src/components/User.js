import React from "react"

export default function User({ user }) {
  return (
    <>
      <h1>Id: {user.id}</h1>
      <h2>
        Name: {user.firstName} {user.lastName}
      </h2>
      <h3>City: {user.city}</h3>
      <h4>Rights: {user.rights}</h4>
    </>
  )
}
