import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/Carousel.css";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Header from "./components/Header";
import Slide from "./components/Carousel";

function App() {
  return (
    <Router>
      <Header />
      <Slide />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Container>
      </main>
      <hr />
      <Footer />
    </Router>
  );
}

export default App;
