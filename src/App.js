import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

import Product from "./pages/ShowProduct/ShowProduct";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Header />
      <main className="app" >
        <Container className="py-4">
          <Route path="/" component={Home} exact />
          <Route path="/products/:id" component={Product} />
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
