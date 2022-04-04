import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router'
import App from '../App'
import SignIn from '../component/sign-in/sign-in.component'
import SignUpComponent from '../component/sign-up/sign-up'
import UserComponent from '../component/user/user.component'

function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUpComponent />} />
        <Route path="/users" element={<UserComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent
