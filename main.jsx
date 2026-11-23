import React, {useState} from 'react';
import{Navbar,Nav,Container,Card,Button,Form,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.main.css';
import './main.css';
export default function MainApp(){
    const [page,setPage]=useState(1);
    const[selectedHotel,setSelectedHotel]=useState(null);
    const[shrinkingHotelId,setShrinkingHotleId]=useState(null);
    const hotels =[
        {
        id : 1,
        name:'Nile Grand Hotle',
        stars:'*****',
        location:'Khartoum-Nile Street',
        img:'./A.jpeg',
        desc:'Stunning river views with full premium hoteel services ,pool,and fine dining.'
    },
      {
        id : 2,
        name:'Al-Salam Resort',
        stars:'*****',
        location:'Khartoum-Al Riyed',
        img:'./B.jpeg',
        desc:'Stunning river views with full premium hoteel services ,pool,and fine dining.'
    },
      {
        id : 3,
        name:'Red Sea Palace',
        stars:'*****',
        location:'Port Sudan-Corniche',
        img:'./c.jpeg',
        desc:'Stunning river views with full premium hoteel services ,pool,and fine dining.'
    },
      {
        id : 4,
        name:'Royal Crown Hotel',
        stars:'*****',
        location:'Khartoum-Nile Street',
        img:'./D.jpeg',
        desc:'Stunning river views with full premium hoteel services ,pool,and fine dining.'
    },
    ];
    const handleHotelClick = (hotel)=>
        setShrinkingHotleId(hotel.id);
    setTimeout(()=>{
        selectedHotel(hotel);
        setPage(3);
        setShrinkingHotleId(null);
    },200)

};
return(
    <div dir="ltr" className="bg-light min-vh-100">
        <Navbar bg="dark" variant="dark" expand="lg" className="px-4 shadow-sm md-4">
        <Navbar.Brand href="#"onClick={()=>setPage(1)}>Hotel BookingBooking</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms=auto">
                <Nav.Link onClick={()=>setPage(1)}>Home</Nav.Link>
                <Nav.Link onClick={()=>setPage(2)}>Hotles</Nav.Link>
                <Nav.Link  href="#contact">Contact Us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Navbar>
              <Container className="p-flex justify-content-center pb-5" >
                {page ===1 &&(
                    <Card className="p-4 shadow-sm" style={{maxWidth:'420px',width:'100%'}}>
                        <h4 className="tex-center mb-4 text-primary">Login/Register</h4>
                        <Form onSubmit={(e)=>{e.preventDefault();setPage(2);}}>
                            <Form.Group className="mb-3">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" required placeholder="Enter your full name"/>
                                </Form.Group>

                       <Form.Group className="mb-3">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="emsil" required placeholder="name@example.com"/>
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100 py-2 mt-2">Next</Button>
                               </Form>
                               </Card>)}
                               {page === 2 &&(
                                <Row className="g-4 w-100">
                                    {hotels.map((h)=>(
                                        <Col key={h.id} md={6}>
                                            <Card className="shadow-sm h-100 hotel-card">
                                                <Card.Img
                                                variant="top"
                                                src={h.img}
                                                className={`hotel-caed-img ${shrinkingHotelId === h.id ?'shrinking' :''}`}
                                                onClick={()=>handleHotelClick(h)}
                                                />
                                                <Card.Body className="d-flex flex-colum justify-content-between">
                                                    <div>
                                                        <Card.Title className="fw-bold">{h.name}</Card.Title>
                                                        <Card.Text className="text-warning mb-1">{h.stars}</Card.Text>
                                                        <Card.Text className="text-muted small mb-2">{h.location}</Card.Text>
                                                        <Card.Text>{h.desc}</Card.Text>
                                                    </div>
                                                    <Button variant="outline-primary" className="mt-3 w-100 "onClick={()=> handleHotelClick(h)}>Book Now</Button>
                                                  </Card.Body></Card></Col>))}
                                                  </Row> )}  
                                                  {page === 3 && selectedHotel &&(
                                                    <Card className="p-4 shadow-sm w-100" style ={{maxWidth:'900px'}}>
                                                        <Row className="align-items-center">
                                                            <Col md={6}><h4 className="mb-4 text-success">Booking Information</h4>
                                                            <Form onSubmit={(e)=>{e.preventDefault();setPage(4);}}>
                                                                <Form.Group className="mb-3">
                                                                  <Form.Label>Check-in Data</Form.Label>
                                                                  <Form.Control type="date" required/></Form.Group>
                                                                  <Form.Group className="mb-3">
                                                                    <Form.Label>Check-out Date</Form.Label>
                                                                    <Form.Control type="date" required/></Form.Group>
                                                                    <Form.Group className="mb-4">
                                                                        <Form.Label>Number of Guests</Form.Label>
                                                                        <Form.Control type="number"min="1" defaultValue="1" required/>
                                                                    </Form.Group>
                                                                    <Button variant="success" type="submit"className="w-100 py-2">Submit Booking</Button>
                                                                    </Form></Col>
                                                                    <Col md={6}className="text-center mt-4 mt-md-0 border-start-md pt-3 pt-md-0">
                                                                    <img
                                                                    src={selectedHotel.img}
                                                                    alt={selectedHotel.name}
                                                                    className="img-fluid rounded mb-3 shadow-sm"/>
                                                                    <h5 className="fw-bold">{selectedHotel.name}</h5>
                                                                    <p className="text-warning mb-1">{selectedHotel.stars}</p>
                                                                    <p className="text-muted small mb-2">{selectedHotel.location}</p>
                                                                    <p className="text-secondary">{selectedHotel.desc}</p>
                                                                    </Col></Row></Card>)}
                                                                    {page === 4 &&(
                                                                        <Card className="p-5 text-center shadow-sm" style={{maxWidth:'450px',width:'100%'}}>
                                                                            <div className="text-success mb-2" style={{fontSize:'80px',lineHeight:'1'}}>Done</div>
                                                                            <h3 className="text-successs fw-bold">Congratulations!</h3>
                                                                            <p className="text-muted mt-2">Your reservation has been compleated successfully.</p>
                                                                            <Button variant= "primary" className="mt-3 py-2" onClick={()=>setPage(2)}>Back to Hotels</Button>

                                                                        </Card>
                                                                    )}                             
                                  </Container> </div>);
                                  