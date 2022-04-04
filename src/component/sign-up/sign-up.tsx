/* eslint-disable */
import React, { useState, useEffect } from 'react'
import AuthService from "../../service/auth.service";

function SignUpComponent() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function onUsernameChange(event:any) {
    setUsername(event.target.value)
  }

  function onPasswordChange(event:any) {
    setPassword(event.target.value)
  }

  function onLoginClick() {
    AuthService.signup(username,password)
  }



  // const [counter, setCounter] = useState(0)
  // const [counter2, setCounter2] = useState(0)
  //
  // function increment() {
  //   setCounter(counter + 1)
  // }
  //
  // function increment2() {
  //   setCounter2(counter2 + 1)
  // }

  // useEffect(() => {
  //   console.log('rerender')
  // })
  // useEffect(() => {
  //   console.log('buna')
  // }, [counter])
  return (
    <div>

      {/* Hei, */}
      {/* {' '} */}
      {/* {counter} */}
      {/* <button type="button" onClick={increment}>Click me</button> */}
      {/* {counter2} */}
      {/* <button type="button" onClick={increment2}>Click me2</button> */}

      <input type="text" value={username} onChange={onUsernameChange} />
      <input type="password" value={password} onChange={onPasswordChange} />
      <button type="button" onClick={onLoginClick} >login</button>

    </div>
  )
}

export default SignUpComponent
