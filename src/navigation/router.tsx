import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router'
import App from '../App'
import SignIn from '../component/sign-in/sign-in.component'

function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent
