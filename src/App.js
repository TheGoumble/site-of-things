import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./App.css"
import Header from "./components/Header"
import Home from "./pages/Home"
import ToyGunRoulette from "./pages/ToyGunRoulette"
import ConnectFour from "./pages/ConnectFour"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="connectfour" element={<ConnectFour />} />
        <Route path="roulette" element={<ToyGunRoulette />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
