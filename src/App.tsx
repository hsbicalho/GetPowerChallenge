import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import {Router} from './Router'

export default function App() {
  return (
  <BrowserRouter>
  <Router />
  <GlobalStyle/>
  </BrowserRouter>
  )
}
