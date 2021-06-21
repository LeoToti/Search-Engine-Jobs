// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// import CartIndicator from "./components/CartIndicator";
import JobSearch from "./components/JobSearch";
// import Cart from "./components/Cart";
import { Route, Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <Container>
      <Row>
        <Col sm={12} className="text-center background-div">
          <Link to="/">
            <h1>Strivazon Job Store</h1>
          </Link>
        </Col>
        {/* <CartIndicator /> */}
      </Row>
      <hr />
      <Route path="/" exact component={JobSearch} />
      {/* <Route path="/cart" exact component={Cart} /> */}
    </Container>
  </Router>
);

export default App;
