import React from "react";
import { Container, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css'

import ShopTitle from './ShopTitle'
import ShopContact from './ShopContact'
import ShopProducts from './ShopProducts'
import ShopSelection from './ShopSelection'

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