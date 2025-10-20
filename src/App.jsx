import './App.css'
import SignIn from "./comps/SignIn";
import Onboarding from "./comps/Onboarding"
import { BrowserRouter, Routes, Route } from 'react-router';
import LoadingScreen from './comps/LoadingScreen';
import Password from "./comps/Password"

export default function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/pass" element={<Password />} />
    </Routes>

</BrowserRouter>
</>
  )
}
