import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/product/:id" element={<ProductPage />}></Route>
          </Routes>
        </Container>
      </main>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
