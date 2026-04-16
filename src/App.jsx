import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Index from "./Pages/Index/Index"
import NotFound from "./Pages/NotFound/NotFound"
import { Toaster } from "sonner"
import CartProvider from "./context/CartProvider"


function App() {

  return (
    <>
      <CartProvider>
        <Toaster />
        <BrowserRouter>
          {/* NAVBAR  */}
          <Navbar />

          <Routes>
            <Route index element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* FOOTER  */}
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
