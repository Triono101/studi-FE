import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Router>
      <Header></Header>
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/product/:id" element={<ProductPage />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
