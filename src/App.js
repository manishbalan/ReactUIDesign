import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from "react-bootstrap";
import img from './right.png';




import './App.css';

function App() {
  return (
    <div className="App" style={styles.text}>
      <h1 style={styles.simple} >Simple no-tricks Pricing</h1>
      <p style={styles.contact}>If you're not satisfied, Contact us within the first 14 days and we'll send you a full refund.</p>
      <Row style={styles.row}>
        <Card style={styles.card}>
          <Row >

            <Col xs="9" >
              <CardContent>
                <h1 style={styles.life} >Lifetime MemberShip </h1>
                <p style={styles.refund}>Lorem ipsum dolor sit amet conset etur adipisicing elit. ltaque amet indis perferendis blanditiis repellendusetur quidem assumenda.</p>
                <p style={styles.blue}>WHAT'S INCLUDED  <hr style={styles.dks} /></p>
              </CardContent>
              <Row style={styles.rws}>
                <Col xs="6" style={styles.sdc}>
                  <img src={img} style={styles.img} />

                  Private forum access
              </Col>
                <Col xs="6" style={styles.sdc}>
                  <img src={img} style={styles.img} />
                  Member resources
              </Col>
              </Row>
              <Row>
                <Col xs="6" style={styles.sdc}>
                  <img src={img} style={styles.img} />
                  Entry to annual conference
              </Col>
                <Col xs="6" style={styles.sdc}>
                  <img src={img} style={styles.img} />
                  Offcail member t-shirt
              </Col>
              </Row>
            </Col>

            <Col xs="3" style={styles.xss}>
              <CardContent>
                <p style={styles.pay}>Pay once, own it forever</p>
                <h1 style={{ fontWeight: 'bold' }}>$349 <span style={styles.usd}>USD</span></h1>
                <p style={styles.learn}>Learn about our membership policy</p>
              </CardContent>
              <Button style={styles.get} >Get Access</Button>
              <p style={styles.free}>Get a free Sample <span style={styles.mb}>(20MB)</span></p>
            </Col>
          </Row>
        </Card>
      </Row >
    </div >
  );
}


// Internal CSS Start
const styles = {
  text: {
    backgroundColor: 'rgb(240 240 240)',
    height: '70vh',
  },
  simple: {
    paddingTop: '70px', fontWeight: 'bold', fontSize: '50px',
  },
  contact: {
    fontSize: '20px', color: 'rgb(110 110 110)'
  },
  row: {
    paddingBottom: '180px', paddingRight: '40px', paddingLeft: '80px'
  },
  card: {
    height: '60vh', marginTop: '50px',
  },
  life: {
    paddingTop: '20px', fontWeight: 'bold', fontSize: '40px', textAlign: 'left'
  },
  refund: {
    fontSize: '15px', color: 'rgb(110 110 110)', textAlign: 'left'
  },
  blue: {
    color: 'blue', textAlign: 'left'
  },
  xss: {
    backgroundColor: 'rgb(242 247 252)', height: '60vh',
  },
  learn: {
    textDecorationLine: 'underline', color: 'rgb(110 110 110)'
  },
  get: {
    backgroundColor: '#000', height: '48px', width: '220px'
  },
  free: {
    fontSize: '14px', paddingTop: '10px'
  },
  dks: {
    margin: 'auto 20px'
  },
  usd: {
    color: 'rgb(110 110 110)', fontSize: '22px'
  },
  pay: {
    paddingTop: '30px'
  },
  sdc: {
    color: 'rgb(110 110 110)',
    fontSize: '15px',
    textAlign: 'left',
    paddingLeft: '45px'
  },
  img: {
    width: '15px', height: '15px',
    marginRight: '15px'
  },
  rws: {
    marginRight: '0px',
  }
};

export default App;

