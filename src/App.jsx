import React from "react";
import { Container, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css'

import ShopTitle from './components/ShopTitle'
import ShopContact from './components/ShopContact'
import ShopProducts from './components/ShopProducts'
import ShopSelection from './components/ShopSelection'

const App = () => (
  <Container>
    <Row>
      <Col>
        <ShopTitle />
      </Col>
      <Col>
        <ShopContact />
      </Col>
    </Row>
    <Row>
      <Col>
        <ShopProducts />
      </Col>
    </Row>
    <Row>
      <Col>
        <hr />
        <ShopSelection />
      </Col>
    </Row>
  </Container>
);

export default App