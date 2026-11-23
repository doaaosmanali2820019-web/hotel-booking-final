import React, {useState} from 'react';
import { Navbar,Nav,Container,Card,Button,Form,Row,Col ,Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
export default function App(){
    const [page,setPage]=useState(1);
    const[selectedHotel,setSelectedHotel]=useState(null);
    const[shrinkingHotelId,setShrinkingHotleId]=useState(null);
    const[selectedRoom,setSelectedRoom]=useState(null);
    const[payMethod,setPayMethod]=useState('bok');
    const[flightPage,setFlightPage]=useState(1);
    const[selectedFlight,setSelectedFlight]=useState(null);
    const[searched,setSearched]=useState(false);
    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const [restPage, setRestPage] = useState(1);
const [selectedRest, setSelectedRest] = useState(null);
const [activeRestImg, setActiveRestImg] = useState('');
const [restBooking, setRestBooking] = useState({
  date: '',
  time: '7:00 PM',
  guests: '2 People',
  table: 'Any Table',
  notes: ''
});
const [tourPage, setTourPage] = useState(1);
const [selectedTour, setSelectedTour] = useState(null);
const [tourBooking, setTourBooking] = useState({
  fullName: '',
  email: '',
  phone: '',
  travelDate: '',
  persons: 2
});

const [tourPaymentMethod, setTourPaymentMethod] = useState('Bank Transfer');
const [showTourConfirmModal, setShowTourConfirmModal] = useState(false);
const toursData = [
  {
    id: 1,
    title: 'Giza Pyramids & Sphinx',
    location: 'Giza, Egypt',
    duration: '2 Days',
    rating: '4.8',
    reviews: 30,
    price: 550,
    img: '/p1.jpeg',
    about: 'Explore the ancient wonders of Giza and the iconic Great Sphinx with expert historical insights, scenic desert views, and curated cultural stops.',
    activities: ['Camel riding', 'Scenic photography', 'Guided historical tour', 'Sound & light experience']
  },
  {
    id: 2,
    title: 'Maldives Water Villas',
    location: 'Malé, Maldives',
    duration: '5 Days',
    rating: '4.9',
    reviews: 45,
    price: 620,
    img: '/p2.jpeg',
    about: 'Relax in overwater villas surrounded by crystal-clear turquoise lagoons, white sandy beaches, and tranquil sunset views.',
    activities: ['Snorkeling & coral reef tour', 'Sunset boat cruise', 'Beachfront relaxation', 'Island hopping']
  },
  {
    id: 3,
    title: 'Luxor Karnak Temple',
    location: 'Luxor, Egypt',
    duration: '3 Days',
    rating: '4.8',
    reviews: 27,
    price: 364,
    img: '/p3.jpeg',
    about: 'Discover the grandeur of ancient Thebes through towering columns, sacred lakes, and timeless pharaonic architecture along the Nile.',
    activities: ['Temple guided walk', 'Nile riverbank view', 'Photography session', 'Local heritage exploration']
  },
  {
    id: 4,
    title: 'Alpine Mountain Trail',
    location: 'Interlaken, Switzerland',
    duration: '4 Days',
    rating: '4.7',
    reviews: 18,
    price: 480,
    img: '/p4.jpeg',
    about: 'Breathe fresh mountain air along scenic alpine trails framed by snow-capped peaks, green valleys, and crisp highland landscapes.',
    activities: ['Guided scenic hike', 'Mountain viewpoint photos', 'Nature trail walk', 'Local alpine tasting']
  },
  {
    id: 5,
    title: 'Great Wall of China',
    location: 'Beijing, China',
    duration: '4 Days',
    rating: '4.9',
    reviews: 34,
    price: 567,
    img: '/p5.jpeg',
    about: 'Walk along historic stone fortifications winding across dramatic mountain ridges while learning centuries of imperial engineering history.',
    activities: ['Wall ridge walk', 'Watchtower photography', 'History briefing', 'Scenic mountain views']
  },
  {
    id: 6,
    title: 'Dubai Marina & Beach',
    location: 'Dubai, UAE',
    duration: '3 Days',
    rating: '4.8',
    reviews: 36,
    price: 410,
    img: '/p6.jpeg',
    about: 'Enjoy modern waterfront promenades, golden coastal beaches, and vibrant city views blending contemporary architecture with seaside leisure.',
    activities: ['Marina walk', 'Beach leisure time', 'City skyline photos', 'Waterfront dining']
  },
  {
    id: 7,
    title: 'Highland Summit Hike',
    location: 'Scottish Highlands',
    duration: '2 Days',
    rating: '4.8',
    reviews: 30,
    price: 320,
    img: '/p7.jpeg',
    about: 'Experience sweeping highland overlooks, rugged terrain, and peaceful open skies on a memorable guided outdoor adventure.',
    activities: ['Summit trek', 'Panoramic photography', 'Wildlife spotting', 'Outdoor rest stops']
  },
  {
    id: 8,
    title: 'Taj Mahal Royal Tour',
    location: 'Agra, India',
    duration: '6 Days',
    rating: '4.9',
    reviews: 52,
    price: 456,
    img: '/p8.jpeg',
    about: 'Admire the symmetry and white marble craftsmanship of the Taj Mahal, paired with rich architectural stories and garden walks.',
    activities: ['Monument guided tour', 'Garden & reflection photos', 'Architectural overview', 'Cultural market visit']
  }
];
const [myBookings, setMyBookings] = useState([
  {
    id: 'TR-1001',
    type: 'hotel',
    title: 'Nile Grand Hotel',
    date: '20/12/2026',
    persons: 2,
    total: 100,
    status: 'Confirmed',
    guestName: 'Guest User',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 'TR-1002',
    type: 'tour',
    title: 'Cairo Pyramids Tour',
    date: '25/12/2026',
    persons: 2,
    total: 120,
    status: 'Confirmed',
    guestName: 'Guest User',
    paymentMethod: 'Bank of Khartoum (BoK)'
  },
  {
    id: 'TR-1003',
    type: 'restaurant',
    title: 'Sky Restaurant',
    date: '28/12/2026',
    persons: 1,
    total: 50,
    status: 'Confirmed',
    guestName: 'Guest User',
    paymentMethod: 'Visa / MasterCard'
  }
]);
const [selectedBookingItem, setSelectedBookingItem] = useState(null);
    const flightsData = [
  { id: 1, name: 'Sudan Airways', code: 'SD 101', from: 'Sudan', to: 'Egypt', dep: '08:00', arr: '10:30', dur: '2h 30m', type: 'Direct Flight', price: 250 },
  { id: 2, name: 'EgyptAir', code: 'MS 854', from: 'Sudan', to: 'Egypt', dep: '13:00', arr: '15:30', dur: '2h 30m', type: 'Direct Flight', price: 280 },
  { id: 3, name: 'Badr Airlines', code: 'J4 202', from: 'Sudan', to: 'Egypt', dep: '18:30', arr: '21:00', dur: '2h 30m', type: 'Direct Flight', price: 240 },
  { id: 4, name: 'Saudia', code: 'SV 450', from: 'Sudan', to: 'Saudi Arabia', dep: '09:00', arr: '11:00', dur: '2h 00m', type: 'Direct Flight', price: 310 },
  { id: 5, name: 'Flydubai', code: 'FZ 602', from: 'Sudan', to: 'Dubai', dep: '10:30', arr: '15:30', dur: '4h 00m', type: '1 Stop', price: 380 }
];
const restaurantsData = [
  {
    id: 1,
    name: 'Sky Lounge Restaurant',
    rating: '4.8',
    reviews: '1.2k reviews',
    city: 'Khartoum, Nile Street',
    cuisine: 'Fine Dining & Grills',
    hours: '10:00 AM – 12:00 AM',
    desc: 'Enjoy a luxurious rooftop dining experience with panoramic views and freshly grilled specialties.',
    img: '/rest1.jpeg',
    gallery: ['/rest1.jpeg', '/grilled steak.jpeg', '/pasta.jpeg', '/lava caka.jpeg'],
    menu: [
      { name: 'Grilled Steak', img: '/grilled steak.jpeg' },
      { name: 'Pasta Alfredo', img: '/pasta.jpeg' },
      { name: 'Roasted Chicken', img: '/chicken.jpeg' },
      { name: 'Lava Cake', img: '/lava caka.jpeg' }
    ]
  },
  {
    id: 2,
    name: 'The Golden Fork',
    rating: '4.7',
    reviews: '856 reviews',
    city: 'Port Sudan, Red Sea',
    cuisine: 'International Cuisine',
    hours: '9:00 AM – 11:00 PM',
    desc: 'Enjoy a delightful dining experience with delicious international dishes in a cozy atmosphere.',
    img: '/rest2.jpeg',
    gallery: ['/rest2.jpeg', '/steak.jpeg', '/pasta.jpeg', '/salad.jpeg'],
    menu: [
      { name: 'Grilled Steak', img: '/steak.jpeg' },
      { name: 'Pasta Alfredo', img: '/pasta.jpeg' },
      { name: 'Roasted Chicken', img: '/chicken.jpeg' },
      { name: 'Fresh Salad', img: '/salad.jpeg' }
    ]
  },
  {
    id: 3,
    name: 'Riverside Restaurant',
    rating: '4.6',
    reviews: '743 reviews',
    city: 'Aswan, Corniche',
    cuisine: 'Mediterranean & Grills',
    hours: '11:00 AM – 11:30 PM',
    desc: 'Relax by the riverside with authentic Mediterranean flavors, fresh salads, and gourmet burgers.',
    img: '/rest3.jpeg',
    gallery: ['/rest3.jpeg', '/burger.jpeg', '/salad2.jpeg', '/cake.jpeg'],
    menu: [
      { name: 'Classic Burger', img: '/burger.jpeg' },
      { name: 'Greek Salad', img: '/salad2.jpeg' },
      { name: 'Grilled Chicken', img: '/chicken.jpeg' },
      { name: 'Chocolate Cake', img: '/cake.jpeg' }
    ]
  },
  {
    id: 4,
    name: 'Bella Vista',
    rating: '4.7',
    reviews: '612 reviews',
    city: 'Cairo, Zamalek',
    cuisine: 'Italian & Continental',
    hours: '10:00 AM – 12:00 AM',
    desc: 'Authentic Italian wood-fired pizza, creamy pasta, and artisan desserts in an elegant setting.',
    img: '/rest4.jpeg',
    gallery: ['/rest4.jpeg', '/pizza.jpeg', '/pasta.jpeg', '/lava caka.jpeg'],
    menu: [
      { name: 'Italian Pizza', img: '/pizza.jpeg' },
      { name: 'Pasta Alfredo', img: '/pasta.jpeg' },
      { name: 'Cheese Burger', img: '/burger1.jpeg' },
      { name: 'Lava Cake', img: '/lava caka.jpeg' }
    ]
  }
];
const [passenger, setPassenger] = useState({ name: '', passport: '', email: '', phone: '' });
    const hotels =[
        {
        id : 1,
        name:'Nile Grand Hotle',
        stars:'*****',
        location:'Khartoum-Nile Street',
        img:'/H.jpeg',
        desc:'Stunning river views with full premium hoteel services ,pool,and fine dining.'
    },
      {
        id : 2,
        name:'Al-Salam Resort',
        stars:'*****',
        location:'Khartoum-Al Riyed',
        img:'/B.jpeg',
        desc:'Stunning river views with full premium hoteel services ,pool,and fine dining.'
    },
      {
        id : 3,
        name:'Red Sea Palace',
        stars:'*****',
        location:'Port Sudan-Corniche',
        img:'/C.jpeg',
        desc:'Stunning river views with full premium hoteel services ,pool,and fine dining.'
    },
      {
        id : 4,
        name:'Royal Crown Hotel',
        stars:'*****',
        location:'Khartoum-Nile Street',
        img:'/D.jpeg',
        desc:'Stunning river views with full premium hoteel services ,pool,and fine dining.'
    },
    ];
    const [bookingFilter, setBookingFilter] = useState('all');
    const [clientMessages] = useState([
  {
    id: 'MSG-1',
    type: 'Confirmed',
    title: 'Booking Confirmed - Nile Grand Hotel',
    body: 'Your reservation for 2 persons on 20/12/2026 has been confirmed.',
    time: 'Today'
  },
  {
    id: 'MSG-2',
    type: 'Payment Reminder',
    title: 'Payment Pending - Cairo Pyramids Tour',
    body: 'Please complete your payment to keep your tour seats reserved.',
    time: 'Yesterday'
  },
  {
    id: 'MSG-3',
    type: 'Cancelled',
    title: 'Reservation Cancelled Notice',
    body: 'Any unpaid booking past the due window is automatically cancelled.',
    time: '2 days ago'
  }
]);
    const handleHotelClick = (hotel)=>{
        setSelectedHotel(hotel);
        setPage(3);
    // setTimeout(()=>{
    //     selectedHotel(hotel);
    //     setPage(3);
    //     setShrinkingHotleId(null);
    // },200)

};
return(
    <div dir="ltr" className="bg-light min-vh-100">
        <Navbar bg="dark" variant="dark"className="px-4 py-3 shadow-sm" style={{minHeight:'85px'}}>
          <Container fluid className="d-flex align-items-center justify-content-start" >
        <Navbar.Brand onClick={()=>setPage(1)}className="fw-bold fs-4 text-white me-4"style={{cursor:'pointer',letterSpacing:'0,5px'}}>Hotel Booking</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav"/> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
            <Nav className="d-flex align-items-center ms-3"style={{gap:'45px'}}>
                <Nav.Link onClick={()=>setPage(1)} className="text-whit  text-decoratinon-none p-0"  style={{cursor:'pointer',fontSize:'15px'}}>Home</Nav.Link>
            
                <Nav.Link onClick={()=>setPage(2)}className="text-whit  text-decortion-none p-0"style={{cursor:'pointer',fontSize:'15px'}}>Hotles</Nav.Link>
                <Nav.Link onClick={()=>{ setPage('flights'); setFlightPage(1); }} className=" text-decoration-none p-0">Flights</Nav.Link>
                <Nav.Link onClick={() => { setPage('restaurants'); setRestPage(1); }} className="text-decoration-none">Restaurants</Nav.Link>
                <Nav.Link onClick={() => { setPage('tours'); setTourPage(1); }} className=" text-decoration-none p-0">Tours</Nav.Link>
                <Nav.Link onClick={() => setPage('myBookings')} className=" text-decoration-none p-0" style={{ cursor: 'pointer', fontSize: '15px' }}>My Bookings</Nav.Link>
                <Nav.Link  onClick={()=>setPage(7)}className="text-whit text-decoration-none p-0" style={{cursor:'pointer',fontSize:'15px'}}>Contact Us</Nav.Link>
        
                {/* </Nav> */}
                </Nav>
                </Container>
                </Navbar>
               
              <Container className="p-flex justify-content-center pb-5" >
                {page ===1 &&(
                  <Row className="w-100 align-items-center justify-content-center g-4  my-2">
                    <Col lg={5}md={6}>
                    <Card className="p-4 shadow-sm border-0" style={{width:'100%',
                      minHeight:'480px',
                      display:'flex',
                      flexDirection:'column',
                      justifyContent:'center'
                    }}>
                        <h4 className="tex-center mb-4 fw-bold" style={{color:'#ddb531'}}>Login/Register</h4>
                        <Form onSubmit={(e)=>{e.preventDefault();setPage(2);}}>
                            <Form.Group className="mb-4">
                                <Form.Label className="fw-semiboid">Full Name</Form.Label>
                                <Form.Control type="text" required placeholder="Enter your full name"
                                style={{padding:'12px'}}
                                />
                                </Form.Group>

                       <Form.Group className="mb-5">
                                <Form.Label className="fw-semibold">Email Address</Form.Label>
                                <Form.Control type="email" required placeholder="name@example.com"
                                style={{padding:'12px'}}
                                />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100 py-2 border-0 fw-bold"
                                style={{backgroundColor:'#ddb531',color:'#fff'}}
                                >Next</Button>
                               </Form>
                               </Card>
                               </Col>
                               <Col lg={7} md={6}>
                               <Card className="p-4 shadow-sm border-0 text-center"style={{minHeight:'480px'}}>
                                <div className="mb-3 p-3 rounded" style={{backgroundColor:'#fdfbf7',border:'1px solid#f1e4c3'}}>
                                  <h4 className="fw-bold mb-2"style={{color:'#d4af37'}}>Welcome to Hotel Booking</h4>
                                  <p className="text-muted mb-0 " style={{fontSize:'15px'}}>We Wish you a Wonderful stay and excellent service! Explore our luxury hotels below. </p>
                                </div>
                                <div className="rounded overflow-hidden  shadow-sm">
                                  <Carousel interval={2500} controls={false}indicators={true}fade>
                                    {hotels.map((hotel)=>(
                                      <Carousel.Item key={hotel.id}>
                                        <img
                                        src={hotel.img}
                                        className="d-block w-100"
                                        alt={hotel.name}
                                        style={{height:'280px',objectfit:'cover',borderRadius:'9px'}}/>
                                        <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-1 mb-2">
                                          <h6 className="m-0 text-white fw-bold">{hotel.name}</h6>
                                        </Carousel.Caption>
                                      </Carousel.Item>
                                    )
                                    )}
                                  </Carousel>
                                  </div>
                                  </Card>
                                  </Col>
                                  </Row>
                                 )}
                               {page === 2 &&(
                                <Row className="g-4 w-100 justify-content-center">
                                    {hotels.map((h)=>(
                                        <Col key={h.id} md={6}>
                                            <Card className="shadow-sm h-100 border-0 rounded-3 overflow-hidden">
                                                <Card.Img
                                                variant="top"
                                                src={h.img}
                                                style={{height:'190px',objectFit:'cover',cursor:'pointer'}}
                                                onClick={()=>{handleHotelClick(h);
                                                  setPage(3);
                                                }}
                                                />
                                                <Card.Body className="d-flex flex-colum justify-content-between p-3 text-center">
                                                    <div>
                                                        <Card.Title className="fw-bold fs-5 mb-1">{h.name}</Card.Title>
                                                        <Card.Text className="text-warning mb-1">{h.stars}</Card.Text>
                                                        <Card.Text className="text-muted small mb-2">{h.location}</Card.Text>
                                                        <Card.Text className="small text-secondary">{h.desc}</Card.Text>
                                                    </div>
                                                    <Button className="fw-bold border-0px-4 py-4 shadow-sm"
                                                    style={{backgroundColor:'#d4af37',color:'#fff',fontSize:'11px',borderRadius:'6px',width:'120px', height:'30px',display:'flex',alignItems:'center',justifyContent:'center',padding:'0'}}
                                                    onClick={()=> {handleHotelClick(h);
                                                      setPage(3);
                                                    }}
                                                    >Book Now</Button>
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
                                                                    {page === 4 && (
  <div className="container my-5" style={{ maxWidth: '950px' }}>
    <button onClick={() => setPage(3)} className="btn btn-outline-secondary btn-sm mb-4">← Back</button>
    <h3 className="text-center mb-2 fw-bold" style={{ color: '#3b1e18' }}>Select Your Room & Guests</h3>
    <p className="text-center text-muted mb-4">Choose the ideal room configuration based on your family and guest size.</p>
    
    <div className="row g-4">
      {[
        { 
          id: 1, 
          name: 'Standard Room', 
          bed: '1 Queen Bed', 
          capacity: 'Max 2 Adults', 
          price: 80, 
          image: 'room1.jpeg' 
        },
        { 
          id: 2, 
          name: 'Family Deluxe Room', 
          bed: '1 King Bed + 1 Single Bed', 
          capacity: '2 Adults + 1-2 Children', 
          price: 130, 
          image: 'room2.jpeg' 
        },
        { 
          id: 3, 
          name: 'Executive Suite', 
          bed: '2 King Beds / Living Area', 
          capacity: 'Up to 4 Guests', 
          price: 200, 
          image: 'room3.jpeg' 
        },
      ].map((room) => (
        <div className="col-md-4" key={room.id}>
          <div className="card h-100 shadow-sm border-0">
            <img src={room.image} className="card-img-top" alt={room.name} style={{ height: '180px', objectFit: 'cover' }} />
            <div className="card-body d-flex flex-column">
              <h5 className="fw-bold">{room.name}</h5>
              <p className="text-muted small mb-1">🛏️ {room.bed}</p>
              <p className="text-secondary small mb-3">👥 {room.capacity}</p>
              
              <div className="mt-auto d-flex justify-content-between align-items-center">
                <span className="fw-bold fs-5">${room.price}</span>
                <button 
                  onClick={() =>{setSelectedRoom(room);setPage(5);}} 
                  className="btn btn-sm text-white px-3" 
                  style={{ backgroundColor: '#c68b19' }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
{page === 5 && (
  <div className="container my-5" style={{ maxWidth: '1000px' }}>
    <button onClick={() => setPage(4)} className="btn btn-outline-secondary btn-sm mb-3">← Back</button>
    
    <div className="row g-4">
      {/* ملخص الحجز */}
      <div className="col-md-4">
        <div className="card shadow-sm border-0 p-3" style={{ borderRadius: '12px', backgroundColor: '#fcfcfc' }}>
          <h5 className="fw-bold mb-3" style={{ color: '#3b1e18' }}>Booking Summary</h5>
          <div className="d-flex justify-content-between small text-muted mb-2">
            <span>Room Type</span>
            <span className="fw-bold text-dark">{selectedRoom?.name || 'Deluxe Room'}</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between fw-bold fs-5" style={{ color: '#3b1e18' }}>
            <span>Total Amount</span>
            <span style={{ color: '#c68b19' }}>${selectedRoom?.price || 360}</span>
          </div>
        </div>
      </div>

      {/* طرق الدفع والحقول */}
      <div className="col-md-8">
        <div className="card shadow-sm border-0 p-4" style={{ borderRadius: '12px', backgroundColor: '#fcfcfc' }}>
          <h5 className="fw-bold mb-3" style={{ color: '#3b1e18' }}>Choose Payment Method</h5>

          {/* خيارات الدفع */}
          <div className="mb-3">
            <div onClick={() => setPayMethod('bok')} className={`p-3 mb-2 border rounded ${payMethod === 'bok' ? 'border-warning bg-light' : 'bg-white'}`} style={{ cursor: 'pointer' }}>
              <input type="radio" checked={payMethod === 'bok'} onChange={() => setPayMethod('bok')} className="me-2" />
              <strong>Bank of Khartoum (بنكك)</strong>
            </div>

            <div onClick={() => setPayMethod('card')} className={`p-3 mb-2 border rounded ${payMethod === 'card' ? 'border-warning bg-light' : 'bg-white'}`} style={{ cursor: 'pointer' }}>
              <input type="radio" checked={payMethod === 'card'} onChange={() => setPayMethod('card')} className="me-2" />
              <strong>Visa / Mastercard</strong>
            </div>

            <div onClick={() => setPayMethod('intl')} className={`p-3 mb-2 border rounded ${payMethod === 'intl' ? 'border-warning bg-light' : 'bg-white'}`} style={{ cursor: 'pointer' }}>
              <input type="radio" checked={payMethod === 'intl'} onChange={() => setPayMethod('intl')} className="me-2" />
              <strong>International Bank Transfer</strong>
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setPage(6); }}>
            
            {/* نموذج بنكك */}
            {payMethod === 'bok' && (
              <div className="p-3 mb-3 border rounded bg-light">
                <p className="small mb-2"><strong>Bank:</strong> Bank of Khartoum | <strong>Acc:</strong> 1234567890</p>
                <div className="row g-2">
                  <div className="col-md-6"><input type="text" className="form-control form-control-sm" placeholder="Full Name" required /></div>
                  <div className="col-md-6"><input type="text" className="form-control form-control-sm" placeholder="Transaction Reference ID" required /></div>
                  <div className="col-md-6"><input type="date" className="form-control form-control-sm" required /></div>
                  <div className="col-md-6"><input type="file" className="form-control form-control-sm" required /></div>
                </div>
              </div>
            )}

            {/* نموذج البطاقة */}
            {payMethod === 'card' && (
              <div className="p-3 mb-3 border rounded bg-white">
                <div className="mb-2"><input type="text" className="form-control form-control-sm" placeholder="Name on Card" required /></div>
                <div className="mb-2"><input type="text" className="form-control form-control-sm" placeholder="Card Number" required /></div>
                <div className="row g-2">
                  <div className="col-6"><input type="text" className="form-control form-control-sm" placeholder="MM/YY" required /></div>
                  <div className="col-6"><input type="password" className="form-control form-control-sm" placeholder="CVV" maxLength="3" required /></div>
                </div>
              </div>
            )}

            {/* نموذج التحويل الدولي */}
            {payMethod === 'intl' && (
              <div className="p-3 mb-3 border rounded bg-light">
                <p className="small mb-2"><strong>IBAN:</strong> SD980001234567890 | <strong>SWIFT:</strong> BOKHSDKA</p>
                <div className="row g-2">
                  <div className="col-md-6"><input type="text" className="form-control form-control-sm" placeholder="Sender Full Name" required /></div>
                  <div className="col-md-6"><input type="text" className="form-control form-control-sm" placeholder="Reference No." required /></div>
                  <div className="col-md-6"><input type="date" className="form-control form-control-sm" required /></div>
                  <div className="col-md-6"><input type="file" className="form-control form-control-sm" required /></div>
                </div>
              </div>
            )}

            <button type="submit" className="btn w-100 py-2 text-white fw-bold shadow-sm" style={{ backgroundColor: '#c68b19', borderRadius: '8px' }}>
              Confirm Payment (${selectedRoom?.price || 360})
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
)}
{page === 6 && (
  <div className="container my-5 text-center" style={{ maxWidth: '500px' }}>
    <div className="card shadow-sm border-0 p-4" style={{ borderRadius: '12px' }}>
      
      <div className="fs-1 mb-2">✅</div>
      <h3 className="fw-bold mb-2" style={{ color: '#3b1e18' }}>Booking Confirmed!</h3>
      <p className="text-muted small mb-3">Your booking has been successfully processed.</p>

      {/* تفاصيل سريعة */}
      <div className="bg-light p-3 rounded mb-3 text-start small">
        <div><strong>Room:</strong> {selectedRoom?.name || 'Deluxe Room'}</div>
        <div><strong>Total Paid:</strong> ${selectedRoom?.price || 360}</div>
      </div>

      <button 
        onClick={() => { setSelectedRoom(null); setPage(1); }} 
        className="btn text-white w-100 fw-bold" 
        style={{ backgroundColor: '#3b1e18' }}
      >
        Back to Home
      </button>

    </div>
  </div>
)}
{page === 'flights' && flightPage === 1 && (
  <div className="container my-5">
    <div className="row g-4">
      
      {/* العمود الأيسر: نموذج البحث */}
      <div className="col-lg-5">
        <h2 className="fw-bold mb-1" style={{ color: '#3b1e18' }}>✈️ Your Journey Begins</h2>
        <p className="text-muted small mb-4">Discover seamless travel experiences</p>

        <div className="card p-4 border-0 shadow-sm bg-white" style={{ borderRadius: '16px' }}>
          <div className="row g-3">
            <div className="col-6">
              <label className="small fw-bold text-muted">From</label>
              <input 
                type="text" 
                className="form-control bg-light border-0" 
                placeholder="Sudan" 
                value={fromCity} 
                onChange={(e) => setFromCity(e.target.value)} 
              />
            </div>
            <div className="col-6">
              <label className="small fw-bold text-muted">To</label>
              <input 
                type="text" 
                className="form-control bg-light border-0" 
                placeholder="Egypt" 
                value={toCity} 
                onChange={(e) => setToCity(e.target.value)} 
              />
            </div>
            <div className="col-6">
              <label className="small fw-bold text-muted">Departure</label>
              <input type="date" className="form-control bg-light border-0" />
            </div>
            <div className="col-6">
              <label className="small fw-bold text-muted">Class</label>
              <select className="form-select bg-light border-0">
                <option>Economy</option>
                <option>Business</option>
              </select>
            </div>
            <div className="col-12 mt-4">
              <button 
                onClick={() => { 
                  if (fromCity.trim() !== '' && toCity.trim() !== '') {
                    setSearched(true);
                  } else {
                    alert('Please enter both departure and destination cities.');
                  }
                }} 
                className="btn w-100 text-white fw-bold py-2" 
                style={{ backgroundColor: '#c68b19', borderRadius: '10px' }}
              >
                Find Flights &gt;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* العمود الأيمن: قائمة الرحلات المتاحة */}
      <div className="col-lg-7">
        <div className="mb-3">
          <h4 className="fw-bold mb-0" style={{ color: '#3b1e18' }}>Available Flights</h4>
          <small className="text-muted">
            {searched ? 'Showing matching flights for your search' : 'Enter your route on the left to see flights'}
          </small>
        </div>

        {searched && flightsData
          .filter(f => 
            f.from.toLowerCase().includes(fromCity.toLowerCase()) && 
            f.to.toLowerCase().includes(toCity.toLowerCase())
          )
          .map((f) => (
            <div key={f.id} className="card p-3 mb-3 border-0 shadow-sm bg-white" style={{ borderRadius: '16px' }}>
              <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
                <div>
                  <strong style={{ color: '#3b1e18' }}>✈️ {f.name}</strong>
                  <span className="text-muted small ms-2">({f.code})</span>
                </div>
                <span className="badge bg-light text-dark">⏱ {f.dur}</span>
                <div className="text-end">
                  <h5 className="fw-bold mb-0" style={{ color: '#c68b19' }}>${f.price}</h5>
                  <small className="text-muted" style={{ fontSize: '11px' }}>per person</small>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fw-bold mb-0">{f.dep}</h5>
                  <small className="text-muted">{f.from}</small>
                </div>
                <div className="text-center">
                  <span className="badge px-3 py-1" style={{ backgroundColor: '#fdf3e1', color: '#c68b19' }}>{f.type}</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-0">{f.arr}</h5>
                  <small className="text-muted">{f.to}</small>
                </div>
                <button 
                  onClick={() => { setSelectedFlight(f); setFlightPage(2); }} 
                  className="btn btn-sm text-white fw-bold px-3 py-2" 
                  style={{ backgroundColor: '#3b1e18', borderRadius: '8px' }}
                >
                  Select & Continue
                </button>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  </div>
)}
{page === 'flights' && flightPage === 2 && selectedFlight && (
  <div className="container my-5">
    <button onClick={() => setFlightPage(1)} className="btn btn-sm btn-outline-secondary mb-3">
      ← Back to Flights
    </button>

    <div className="row g-4">
      
      {/* العمود الأيسر: إدخال بيانات المسافرين والأسرة */}
      <div className="col-lg-6">
        <div className="card p-4 border-0 shadow-sm bg-white" style={{ borderRadius: '16px' }}>
          <h4 className="fw-bold mb-1" style={{ color: '#3b1e18' }}>✈️ Passengers Details (Family Booking)</h4>
          <p className="text-muted small mb-3">Book for yourself and your family members in one trip</p>

          {/* نوع الرحلة: ذهاب فقط أم ذهاب وإياب */}
          <div className="mb-3">
            <label className="small fw-bold text-muted">Trip Type</label>
            <select className="form-select bg-light border-0 py-2">
              <option>One-Way (ذهاب فقط)</option>
              <option>Round-Trip (ذهاب وإياب)</option>
            </select>
          </div>

          {/* عدد المسافرين */}
          <div className="mb-3">
            <label className="small fw-bold text-muted">Number of Passengers</label>
            <input 
              type="number" 
              min="1" 
              max="5" 
              defaultValue="1" 
              id="numPassengers"
              className="form-control bg-light border-0 py-2"
              onChange={(e) => {
                // تحديث عدد المسافرين ديناميكياً إذا أردتِ لاحقاً
              }}
            />
          </div>

          <hr className="text-muted my-3" />

          {/* بيانات المسافر الأساسي (رئيس الأسرة) */}
          <h6 className="fw-bold" style={{ color: '#3b1e18' }}>Primary Passenger / Head of Family</h6>
          <div className="mb-2">
            <input type="text" className="form-control bg-light border-0 py-2 mb-2" placeholder="Full Name (as in Passport)" />
            <input type="text" className="form-control bg-light border-0 py-2" placeholder="Passport Number" />
          </div>

          <div className="row g-2 mt-2">
            <div className="col-6"><input type="email" className="form-control bg-light border-0 py-2" placeholder="Shared Email" /></div>
            <div className="col-6"><input type="tel" className="form-control bg-light border-0 py-2" placeholder="Shared Phone Number" /></div>
          </div>

          {/* خانة إضافية لأفراد الأسرة المرافقين */}
          <div className="mt-3 p-3 bg-light rounded">
            <small className="fw-bold text-muted d-block mb-2">Family Members / Additional Passengers</small>
            <input type="text" className="form-control form-control-sm mb-2" placeholder="Passenger 2 Full Name & Passport" />
            <input type="text" className="form-control form-control-sm" placeholder="Passenger 3 Full Name & Passport (Optional)" />
          </div>

        </div>
      </div>

      {/* العمود الأيمن: الدفع المطابق لتصميم الفنادق */}
      <div className="col-lg-6">
        <div className="card p-4 border-0 shadow-sm bg-white" style={{ borderRadius: '16px' }}>
          <h4 className="fw-bold text-center mb-3" style={{ color: '#3b1e18' }}>Choose Payment Method</h4>

          {/* ملخص السعر */}
          <div className="p-2 rounded mb-3 text-center" style={{ backgroundColor: '#fdf8f2', border: '1px solid #f0e1c6' }}>
            <span className="small text-muted">Selected Flight: </span>
            <strong style={{ color: '#3b1e18' }}>{selectedFlight.name}</strong> | 
            <strong style={{ color: '#c68b19' }} className="ms-1">${selectedFlight.price} / person</strong>
          </div>

          {/* خيار 1: بنكك */}
          <div 
            onClick={() => setPayMethod('bok')}
            className="border rounded p-3 mb-2 text-center fw-bold"
            style={{ cursor: 'pointer', backgroundColor: payMethod === 'bok' ? '#fdf8f2' : '#fff', borderColor: payMethod === 'bok' ? '#c68b19' : '#dee2e6' }}
          >
            <input type="radio" checked={payMethod === 'bok'} readOnly className="me-2" />
            Bank of Khartoum (بنكك)
          </div>

          {/* خيار 2: فيزا / ماستركارد */}
          <div 
            onClick={() => setPayMethod('card')}
            className="border rounded p-3 mb-2 text-center fw-bold"
            style={{ cursor: 'pointer', backgroundColor: payMethod === 'card' ? '#fdf8f2' : '#fff', borderColor: payMethod === 'card' ? '#c68b19' : '#dee2e6' }}
          >
            <input type="radio" checked={payMethod === 'card'} readOnly className="me-2" />
            Visa / Mastercard
          </div>

          {/* خيار 3: تحويل بنكي دولي */}
          <div 
            onClick={() => setPayMethod('intl')}
            className="border rounded p-3 mb-3 text-center fw-bold"
            style={{ cursor: 'pointer', backgroundColor: payMethod === 'intl' ? '#fdf8f2' : '#fff', borderColor: payMethod === 'intl' ? '#c68b19' : '#dee2e6' }}
          >
            <input type="radio" checked={payMethod === 'intl'} readOnly className="me-2" />
            International Bank Transfer
          </div>

          {/* حقول بنكك المطابقة للصورة */}
          {payMethod === 'bok' && (
            <div className="border rounded p-3 mb-3 bg-light">
              <div className="text-center small fw-bold mb-3" style={{ color: '#3b1e18' }}>
                Bank: Bank of Khartoum | Acc: 1234567890
              </div>
              <div className="row g-2">
                <div className="col-6"><input type="text" className="form-control form-control-sm" placeholder="Full Name" /></div>
                <div className="col-6"><input type="text" className="form-control form-control-sm" placeholder="Transaction Reference ID" /></div>
                <div className="col-6"><input type="date" className="form-control form-control-sm" /></div>
                <div className="col-6"><input type="file" className="form-control form-control-sm" /></div>
              </div>
            </div>
          )}

          {/* حقول البطاقة البنكية */}
          {payMethod === 'card' && (
            <div className="border rounded p-3 mb-3 bg-light">
              <div className="row g-2">
                <div className="col-12"><input type="text" className="form-control form-control-sm" placeholder="Cardholder Name" /></div>
                <div className="col-12"><input type="text" className="form-control form-control-sm" placeholder="Card Number (XXXX-XXXX-XXXX-XXXX)" /></div>
                <div className="col-6"><input type="text" className="form-control form-control-sm" placeholder="MM/YY" /></div>
                <div className="col-6"><input type="text" className="form-control form-control-sm" placeholder="CVV" /></div>
              </div>
            </div>
          )}

          {/* حقول التحويل الدولي */}
          {payMethod === 'intl' && (
            <div className="border rounded p-3 mb-3 bg-light">
              <div className="text-center small fw-bold mb-2">IBAN: SD980001234567890 | SWIFT: BOKHSDKA</div>
              <div className="row g-2">
                <div className="col-6"><input type="text" className="form-control form-control-sm" placeholder="Sender Bank Name" /></div>
                <div className="col-6"><input type="text" className="form-control form-control-sm" placeholder="SWIFT / Transfer Ref" /></div>
              </div>
            </div>
          )}

          {/* زر تأكيد الحجز والدفع */}
          <button 
            onClick={() => setFlightPage(3)}
            className="btn w-100 text-white fw-bold py-2"
            style={{ backgroundColor: '#c68b19', borderRadius: '8px' }}
          >
            Confirm Payment (${selectedFlight.price})
          </button>

        </div>
      </div>

    </div>
  </div>
)}
{page === 'flights' && flightPage === 3 && selectedFlight && (
  <div className="container my-5" style={{ maxWidth: '700px' }}>
    <div className="card p-5 border-0 shadow-sm bg-white text-center" style={{ borderRadius: '20px', borderTop: '6px solid #c68b19' }}>
      
      {/* أيقونة النجاح */}
      <div className="mb-3">
        <span className="fs-1">🎉</span>
      </div>

      <h2 className="fw-bold mb-1" style={{ color: '#3b1e18' }}>Flight Booking Confirmed!</h2>
      <p className="text-muted small mb-4">Thank you for booking with us. Your e-ticket has been successfully generated.</p>

      {/* تفاصيل التذكرة والرحلة */}
      <div className="text-start p-4 rounded mb-4" style={{ backgroundColor: '#fdf8f2', border: '1px solid #f0e1c6' }}>
        <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
          <div>
            <span className="badge bg-dark text-white mb-1">E-TICKET</span>
            <h5 className="fw-bold mb-0" style={{ color: '#3b1e18' }}>✈️ {selectedFlight.name} ({selectedFlight.code})</h5>
          </div>
          <div className="text-end">
            <h4 className="fw-bold mb-0" style={{ color: '#c68b19' }}>${selectedFlight.price}</h4>
            <small className="text-muted">Paid Successfully</small>
          </div>
        </div>

        <div className="row g-3 small mb-3">
          <div className="col-6">
            <span className="text-muted d-block">Route</span>
            <strong>{selectedFlight.from} ➔ {selectedFlight.to}</strong>
          </div>
          <div className="col-6">
            <span className="text-muted d-block">Schedule / Duration</span>
            <strong>{selectedFlight.dep} - {selectedFlight.arr} ({selectedFlight.dur})</strong>
          </div>
          <div className="col-6">
            <span className="text-muted d-block">Payment Method</span>
            <strong className="text-uppercase">{payMethod === 'bok' ? 'Bank of Khartoum (بنكك)' : payMethod === 'card' ? 'Visa / Mastercard' : 'International Transfer'}</strong>
          </div>
          <div className="col-6">
            <span className="text-muted d-block">Booking Status</span>
            <strong className="text-success">Confirmed ✔</strong>
          </div>
        </div>

        <hr className="text-muted" />

        {/* بيانات المسافرين */}
        <div className="small">
          <span className="text-muted d-block mb-1">Passenger(s) Details:</span>
          <strong>👤 Head of Family / Primary Passenger</strong>
          <div className="text-muted">Shared Email & Contact Registered</div>
        </div>
      </div>

      {/* أزرار التحكم */}
      <div className="d-flex gap-3 justify-content-center">
        <button 
          onClick={() => window.print()} 
          className="btn text-white px-4 py-2 fw-bold" 
          style={{ backgroundColor: '#3b1e18', borderRadius: '8px' }}
        >
          🖨️ Print E-Ticket
        </button>
        <button 
          onClick={() => { setFlightPage(1); setSearched(false); }} 
          className="btn px-4 py-2 fw-bold" 
          style={{ backgroundColor: '#f0e1c6', color: '#3b1e18', borderRadius: '8px' }}
        >
          🏠 Back to Home
        </button>
      </div>

    </div>
  </div>
)}
{page === 'restaurants' && restPage === 1 && (
  <div style={{ backgroundColor: '#faf7f2', minHeight: '100vh', width: '100%', paddingBottom: '60px' }}>
    
    {/* 1. البانر العلوي بحجم أقل وميلان أكبر */}
    <div 
      className="position-relative d-flex align-items-center"
      style={{
        height: '310px',
        width: '100%',
        backgroundImage: `linear-gradient(to right, rgba(25, 14, 10, 0.82) 30%, rgba(25, 14, 10, 0.25) 100%), url('/restemt.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden'
      }}
    >
      <div className="container text-white position-relative" style={{ zIndex: 2, paddingBottom: '25px' }}>
        <h1 className="fw-bold mb-1" style={{ fontSize: '2.2rem', lineHeight: '1.15' }}>
          Discover the Best <br />
          <span style={{ color: '#e5a93c', fontSize: '2.8rem' }}>Restaurants</span> <br />
          Near Your Destination
        </h1>
        <p className="mt-2 mb-0" style={{ color: '#f5efe6', fontSize: '1rem' }}>
          Great food . Better mood
        </p>
      </div>

      {/* المنحنى الذهبي والأبيض بميلان أكبر وأوضح */}
      <svg 
        viewBox="0 0 1440 160" 
        preserveAspectRatio="none"
        style={{ position: 'absolute', bottom: '-1px', left: 0, width: '100%', height: '95px', zIndex: 1 }}
      >
        <path fill="#c68b19" d="M0,130 C520,175 1020,115 1440,0 L1440,160 L0,160 Z" opacity="0.9"></path>
        <path fill="#faf7f2" d="M0,142 C540,182 1060,122 1440,18 L1440,160 L0,160 Z"></path>
      </svg>
    </div>

    {/* 2. قسم أفضل المطاعم */}
    <div className="container mt-4">
      <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
        <div style={{ height: '1px', width: '80px', backgroundColor: '#dcd3c6' }}></div>
        <h3 className="fw-bold mb-0" style={{ color: '#2c2c2c' }}>
          🍴 Top Restaurants
        </h3>
        <div style={{ height: '1px', width: '80px', backgroundColor: '#dcd3c6' }}></div>
      </div>

      {/* البطاقات الأربعة */}
      <div className="row g-4">
        {restaurantsData.map((rest) => (
          <div key={rest.id} className="col-md-6 col-lg-3">
            <div 
              className="card h-100 border-0 shadow-sm p-3" 
              style={{ backgroundColor: '#ffffff', borderRadius: '18px' }}
            >
              <img 
                src={rest.img} 
                alt={rest.name} 
                className="w-100 mb-3" 
                style={{ height: '165px', objectFit: 'cover', borderRadius: '12px' }} 
              />

              <h5 className="fw-bold mb-1" style={{ color: '#2c2c2c', fontSize: '1.1rem' }}>
                {rest.name}
              </h5>

              <div className="small mb-1">
                <span style={{ color: '#c68b19' }}>★</span>{' '}
                <strong style={{ color: '#2c2c2c' }}>{rest.rating}</strong>{' '}
                <span className="text-muted">({rest.reviews})</span>
              </div>

              <div className="small text-muted mb-3">
                <span style={{ color: '#c68b19' }}>📍</span> {rest.city}
              </div>

              <button 
                onClick={() => {
                  setSelectedRest(rest);
                  setActiveRestImg(rest.img);
                  setRestPage(2);
                }}
                className="btn w-100 text-white fw-bold py-2 mt-auto"
                style={{ backgroundColor: '#c68b19', borderRadius: '10px' }}
              >
                📅 Book a Table
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
)}
{page === 'restaurants' && restPage === 2 && selectedRest && (
  <div style={{ backgroundColor: '#faf7f2', minHeight: '100vh', padding: '30px 0 60px' }}>
    <div className="container">
      
      {/* زر العودة لقائمة المطاعم */}
      <button 
        onClick={() => setRestPage(1)} 
        className="btn btn-sm mb-3 fw-bold"
        style={{ backgroundColor: '#ffffff', color: '#2c2c2c', border: '1px solid #e5dccb', borderRadius: '8px' }}
      >
        ← Back to Restaurants
      </button>

      <div className="row g-4">
        
        {/* العمود الأيسر: معرض الصور + قائمة الطعام (Our Menu Highlights) */}
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm p-3 mb-4" style={{ backgroundColor: '#ffffff', borderRadius: '18px' }}>
            {/* الصورة الرئيسية الكبيرة */}
            <img 
              src={activeRestImg || selectedRest.img} 
              alt={selectedRest.name} 
              className="w-100 mb-3" 
              style={{ height: '330px', objectFit: 'cover', borderRadius: '14px' }} 
            />

            {/* 4 صور مصغرة قابلة للنقر */}
            <div className="row g-2">
              {selectedRest.gallery.map((pic, index) => (
                <div key={index} className="col-3">
                  <img 
                    src={pic} 
                    alt="Gallery" 
                    onClick={() => setActiveRestImg(pic)}
                    className="w-100" 
                    style={{ 
                      height: '75px', 
                      objectFit: 'cover', 
                      borderRadius: '10px', 
                      cursor: 'pointer',
                      border: (activeRestImg || selectedRest.img) === pic ? '3px solid #c68b19' : '2px solid transparent'
                    }} 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* قسم Our Menu Highlights */}
          <div className="card border-0 shadow-sm p-4" style={{ backgroundColor: '#ffffff', borderRadius: '18px' }}>
            <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
              <div style={{ height: '1px', width: '60px', backgroundColor: '#e5dccb' }}></div>
              <h4 className="fw-bold mb-0" style={{ color: '#2c2c2c' }}>Our Menu Highlights</h4>
              <div style={{ height: '1px', width: '60px', backgroundColor: '#e5dccb' }}></div>
            </div>

            <div className="row g-3 text-center">
              {selectedRest.menu.map((item, idx) => (
                <div key={idx} className="col-6 col-md-3">
                  <div className="p-2 rounded-3 h-100" style={{ backgroundColor: '#faf7f2', border: '1px solid #f0e8d8' }}>
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="rounded-circle shadow-sm mb-2" 
                      style={{ width: '95px', height: '95px', objectFit: 'cover', border: '3px solid #ffffff' }} 
                    />
                    <div className="fw-bold small" style={{ color: '#2c2c2c' }}>{item.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* العمود الأيمن: تفاصيل المطعم + المميزات + نموذج حجز الطاولة */}
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm p-4 mb-4" style={{ backgroundColor: '#ffffff', borderRadius: '18px' }}>
            <h2 className="fw-bold mb-1" style={{ color: '#2c2c2c' }}>{selectedRest.name}</h2>
            
            <div className="small mb-3">
              <span style={{ color: '#c68b19', fontSize: '1.1rem' }}>★</span>{' '}
              <strong style={{ color: '#2c2c2c' }}>{selectedRest.rating}</strong>{' '}
              <span className="text-muted">({selectedRest.reviews})</span>
            </div>

            <div className="small text-muted mb-2">
              <span style={{ color: '#c68b19' }}>📍</span> {selectedRest.city}
            </div>
            <div className="small text-muted mb-2">
              <span style={{ color: '#c68b19' }}>🍴</span> {selectedRest.cuisine}
            </div>
            <div className="small text-muted mb-3">
              <span style={{ color: '#c68b19' }}>🕒</span> Open: {selectedRest.hours}
            </div>

            <p className="small text-muted mb-4" style={{ lineHeight: '1.6' }}>
              {selectedRest.desc}
            </p>

            {/* المميزات المتاحة (Available Facilities) */}
            <h6 className="fw-bold mb-3" style={{ color: '#2c2c2c' }}>Available Facilities</h6>
            <div className="row g-2 text-center small">
              <div className="col-3">
                <div className="p-2 rounded" style={{ backgroundColor: '#faf7f2' }}>
                  <div className="fs-5 mb-1">🪑</div>
                  <div style={{ fontSize: '0.72rem', color: '#2c2c2c' }}>Outdoor Seating</div>
                </div>
              </div>
              <div className="col-3">
                <div className="p-2 rounded" style={{ backgroundColor: '#faf7f2' }}>
                  <div className="fs-5 mb-1">📶</div>
                  <div style={{ fontSize: '0.72rem', color: '#2c2c2c' }}>Free Wi-Fi</div>
                </div>
              </div>
              <div className="col-3">
                <div className="p-2 rounded" style={{ backgroundColor: '#faf7f2' }}>
                  <div className="fs-5 mb-1">🅿️</div>
                  <div style={{ fontSize: '0.72rem', color: '#2c2c2c' }}>Parking</div>
                </div>
              </div>
              <div className="col-3">
                <div className="p-2 rounded" style={{ backgroundColor: '#faf7f2' }}>
                  <div className="fs-5 mb-1">👨‍👩‍👧‍👦</div>
                  <div style={{ fontSize: '0.72rem', color: '#2c2c2c' }}>Family Friendly</div>
                </div>
              </div>
            </div>
          </div>

          {/* بطاقة حجز الطاولة (Book a Table) بألوان الأبيض والبيج والذهبي */}
          <div className="card border-0 shadow-sm overflow-hidden" style={{ backgroundColor: '#ffffff', borderRadius: '18px' }}>
            <div className="py-3 text-center text-white fw-bold fs-5" style={{ backgroundColor: '#c68b19' }}>
              Book a Table
            </div>

            <div className="p-4">
              {/* التاريخ */}
              <div className="mb-3">
                <label className="small fw-bold mb-1" style={{ color: '#2c2c2c' }}>📅 Date</label>
                <input 
                  type="date" 
                  value={restBooking.date}
                  onChange={(e) => setRestBooking({ ...restBooking, date: e.target.value })}
                  className="form-control border-0 py-2" 
                  style={{ backgroundColor: '#faf7f2' }}
                />
              </div>

              {/* الوقت */}
              <div className="mb-3">
                <label className="small fw-bold mb-1" style={{ color: '#2c2c2c' }}>🕒 Time</label>
                <select 
                  value={restBooking.time}
                  onChange={(e) => setRestBooking({ ...restBooking, time: e.target.value })}
                  className="form-select border-0 py-2" 
                  style={{ backgroundColor: '#faf7f2' }}
                >
                  <option>1:00 PM</option>
                  <option>3:00 PM</option>
                  <option>7:00 PM</option>
                  <option>9:00 PM</option>
                  <option>10:30 PM</option>
                </select>
              </div>

              {/* عدد الضيوف */}
              <div className="mb-3">
                <label className="small fw-bold mb-1" style={{ color: '#2c2c2c' }}>👥 Number of Guests</label>
                <select 
                  value={restBooking.guests}
                  onChange={(e) => setRestBooking({ ...restBooking, guests: e.target.value })}
                  className="form-select border-0 py-2" 
                  style={{ backgroundColor: '#faf7f2' }}
                >
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>4 People</option>
                  <option>6 People (Family)</option>
                  <option>8+ People</option>
                </select>
              </div>

              {/* تفضيل الطاولة */}
              <div className="mb-4">
                <label className="small fw-bold mb-1" style={{ color: '#2c2c2c' }}>🪑 Table Preference</label>
                <select 
                  value={restBooking.table}
                  onChange={(e) => setRestBooking({ ...restBooking, table: e.target.value })}
                  className="form-select border-0 py-2" 
                  style={{ backgroundColor: '#faf7f2' }}
                >
                  <option>Any Table</option>
                  <option>Window View</option>
                  <option>Outdoor Garden</option>
                  <option>VIP Family Section</option>
                </select>
              </div>

              {/* زر تأكيد الحجز الذهبي */}
              <button 
                onClick={() => {
                  if (!restBooking.date) {
                    alert('Please select a booking date first!');
                    return;
                  }
                  setRestPage(3);
                }}
                className="btn w-100 text-white fw-bold py-2 shadow-sm"
                style={{ backgroundColor: '#c68b19', borderRadius: '10px', fontSize: '1.05rem' }}
              >
                Confirm Booking &gt;
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
)}
{page === 'restaurants' && restPage === 3 && selectedRest && (
  <div style={{ backgroundColor: '#faf7f2', minHeight: '100vh', padding: '40px 0 60px' }}>
    <div className="container">

      {/* زر العودة لتعديل التفاصيل */}
      <button 
        onClick={() => setRestPage(2)} 
        className="btn btn-sm mb-3 fw-bold"
        style={{ backgroundColor: '#ffffff', color: '#2c2c2c', border: '1px solid #e5dccb', borderRadius: '8px' }}
      >
        ← Back to Restaurant Details
      </button>

      {/* البطاقة الرئيسية المطابقة للتصميم */}
      <div className="card border-0 shadow-sm p-4" style={{ backgroundColor: '#ffffff', borderRadius: '20px' }}>
        <div className="row g-4 align-items-center">
          
          {/* العمود الأيسر: صورة المطعم المختار + 3 صور مصغرة */}
          <div className="col-lg-5">
            <img 
              src={selectedRest.img} 
              alt={selectedRest.name} 
              className="w-100 mb-3" 
              style={{ height: '275px', objectFit: 'cover', borderRadius: '14px' }} 
            />
            <div className="row g-2">
              {selectedRest.gallery.slice(0, 3).map((pic, idx) => (
                <div key={idx} className="col-4">
                  <img 
                    src={pic} 
                    alt="Preview" 
                    className="w-100" 
                    style={{ height: '80px', objectFit: 'cover', borderRadius: '10px' }} 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* العمود الأيمن: تفاصيل الحجز المدخلة (Booking Details) */}
          <div className="col-lg-7">
            <h4 className="fw-bold mb-1" style={{ color: '#2c2c2c' }}>
              <span style={{ color: '#c68b19' }}>🍴</span> Booking Details
            </h4>
            <p className="small text-muted mb-4">Complete your reservation below</p>

            <div className="row g-3">
              {/* اسم المطعم */}
              <div className="col-md-6">
                <label className="small fw-bold mb-1" style={{ color: '#2c2c2c' }}>Restaurant</label>
                <select 
                  value={selectedRest.id}
                  onChange={(e) => {
                    const found = restaurantsData.find(r => r.id === Number(e.target.value));
                    if (found) setSelectedRest(found);
                  }}
                  className="form-select border-0 py-2" 
                  style={{ backgroundColor: '#faf7f2', fontWeight: '500' }}
                >
                  {restaurantsData.map((r) => (
                    <option key={r.id} value={r.id}>{r.name}</option>
                  ))}
                </select>
              </div>

              {/* عدد الضيوف */}
              <div className="col-md-6">
                <label className="small fw-bold mb-1" style={{ color: '#2c2c2c' }}>Guests</label>
                <select 
                  value={restBooking.guests}
                  onChange={(e) => setRestBooking({ ...restBooking, guests: e.target.value })}
                  className="form-select border-0 py-2" 
                  style={{ backgroundColor: '#faf7f2' }}
                >
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>4 People</option>
                  <option>6 People (Family)</option>
                  <option>8+ People</option>
                </select>
              </div>

              {/* التاريخ */}
              <div className="col-md-6">
                <label className="small fw-bold mb-1" style={{ color: '#2c2c2c' }}>Date</label>
                <input 
                  type="date" 
                  value={restBooking.date}
                  onChange={(e) => setRestBooking({ ...restBooking, date: e.target.value })}
                  className="form-control border-0 py-2" 
                  style={{ backgroundColor: '#faf7f2' }}
                />
              </div>

              {/* رقم / تفضيل الطاولة */}
              <div className="col-md-6">
                <label className="small fw-bold mb-1" style={{ color: '#2c2c2c' }}>Table No. (Optional)</label>
                <select 
                  value={restBooking.table}
                  onChange={(e) => setRestBooking({ ...restBooking, table: e.target.value })}
                  className="form-select border-0 py-2" 
                  style={{ backgroundColor: '#faf7f2' }}
                >
                  <option>Any Table</option>
                  <option>Window View</option>
                  <option>Outdoor Garden</option>
                  <option>VIP Family Section</option>
                </select>
              </div>

              {/* الوقت */}
              <div className="col-md-6">
                <label className="small fw-bold mb-1" style={{ color: '#2c2c2c' }}>Time</label>
                <select 
                  value={restBooking.time}
                  onChange={(e) => setRestBooking({ ...restBooking, time: e.target.value })}
                  className="form-select border-0 py-2" 
                  style={{ backgroundColor: '#faf7f2' }}
                >
                  <option>1:00 PM</option>
                  <option>3:00 PM</option>
                  <option>7:00 PM</option>
                  <option>9:00 PM</option>
                  <option>10:30 PM</option>
                </select>
              </div>

              {/* الطلبات الخاصة */}
              <div className="col-12">
                <label className="small fw-bold mb-1" style={{ color: '#2c2c2c' }}>Special Requests (Optional)</label>
                <input 
                  type="text" 
                  placeholder="e.g. Window seat, Birthday celebration..."
                  value={restBooking.notes}
                  onChange={(e) => setRestBooking({ ...restBooking, notes: e.target.value })}
                  className="form-control border-0 py-2" 
                  style={{ backgroundColor: '#faf7f2' }}
                />
              </div>

              {/* زر التأكيد النهائي الذهبي */}
              <div className="col-12 mt-4">
                <button 
  onClick={() => setRestPage(4)}
  className="btn w-100 text-white fw-bold py-2 shadow-sm"
  style={{ backgroundColor: '#c68b19', borderRadius: '10px', fontSize: '1.05rem' }}
>
  ✓ Confirm Reservation
</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
)}
{page === 'restaurants' && restPage === 4 && selectedRest && (
  <div style={{ backgroundColor: '#faf7f2', minHeight: '100vh', padding: '55px 0 70px' }}>
    <div className="container" style={{ maxWidth: '780px' }}>
      
      <div 
        className="card border-0 shadow-sm text-center p-4 p-md-5 position-relative overflow-hidden" 
        style={{ backgroundColor: '#ffffff', borderRadius: '22px' }}
      >
        
        {/* علامة الصح الخضراء في الأعلى بنفس الشكل */}
        <div 
          className="mx-auto mb-3 d-flex align-items-center justify-content-center shadow-sm"
          style={{ 
            width: '74px', 
            height: '74px', 
            borderRadius: '50%', 
            backgroundColor: '#389e0d', 
            color: '#ffffff', 
            fontSize: '2.3rem',
            fontWeight: 'bold'
          }}
        >
          ✓
        </div>

        {/* العنوان الرئيسي */}
        <h2 className="fw-bold mb-2" style={{ color: '#1f1f1f', fontFamily: 'Georgia, serif' }}>
          Reservation Confirmed!
        </h2>

        {/* رسالة التأكيد باسم المطعم المختار */}
        <p className="mb-4" style={{ color: '#555555', fontSize: '1.05rem' }}>
          Your table at <strong style={{ color: '#c68b19' }}>{selectedRest.name}</strong> has been booked successfully.
        </p>

        {/* الشريط البيج الفاتح الذي يحتوي على تفاصيل الحجز الأربعة */}
        <div 
          className="rounded-4 p-3 p-md-4 mb-4 mx-auto w-100" 
          style={{ backgroundColor: '#faf7f2', border: '1px solid #f0e6d2', maxWidth: '660px' }}
        >
          <div className="row g-3 text-start align-items-center">
            
            {/* التاريخ */}
            <div className="col-6 col-md-3 d-flex align-items-center gap-2">
              <span style={{ fontSize: '1.35rem' }}>📅</span>
              <div>
                <div className="small fw-bold" style={{ color: '#2c2c2c' }}>Date</div>
                <div className="small text-muted">{restBooking.date}</div>
              </div>
            </div>

            {/* الوقت */}
            <div className="col-6 col-md-3 d-flex align-items-center gap-2">
              <span style={{ fontSize: '1.35rem' }}>🕒</span>
              <div>
                <div className="small fw-bold" style={{ color: '#2c2c2c' }}>Time</div>
                <div className="small text-muted">{restBooking.time}</div>
              </div>
            </div>

            {/* عدد الضيوف */}
            <div className="col-6 col-md-3 d-flex align-items-center gap-2">
              <span style={{ fontSize: '1.35rem' }}>👥</span>
              <div>
                <div className="small fw-bold" style={{ color: '#2c2c2c' }}>Guests</div>
                <div className="small text-muted">{restBooking.guests}</div>
              </div>
            </div>

            {/* الطاولة */}
            <div className="col-6 col-md-3 d-flex align-items-center gap-2">
              <span style={{ fontSize: '1.35rem' }}>🪑</span>
              <div>
                <div className="small fw-bold" style={{ color: '#2c2c2c' }}>Table</div>
                <div className="small text-muted">{restBooking.table}</div>
              </div>
            </div>

          </div>
        </div>

        {/* الزران في الأسفل بنفس التصميم وبباليت الألوان الذهبي والأوف وايت */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-2">
          <button 
            onClick={() => setPage('mybookings')} 
            className="btn text-white fw-bold px-4 py-2 shadow-sm"
            style={{ backgroundColor: '#c68b19', borderRadius: '50px', minWidth: '190px' }}
          >
            📅 View My Bookings
          </button>

          <button 
            onClick={() => setRestPage(1)} 
            className="btn fw-bold px-4 py-2"
            style={{ 
              backgroundColor: '#faf7f2', 
              color: '#2c2c2c', 
              border: '1.5px solid #c68b19', 
              borderRadius: '50px', 
              minWidth: '190px' 
            }}
          >
            🏠 Back to Restaurants
          </button>
        </div>

      </div>
    </div>
  </div>
)}
{page === 'tours' && tourPage === 1 && (
  <div style={{ backgroundColor: '#faf7f2', minHeight: '100vh', padding: '50px 0 70px' }}>
    <div className="container">
      
      {/* العنوان العلوي الصغير + العنوان الرئيسي */}
      <div className="mb-4">
        <span 
          className="badge px-3 py-1 mb-2 fw-semibold" 
          style={{ backgroundColor: '#f3e5c8', color: '#c68b19', borderRadius: '8px', fontSize: '0.85rem' }}
        >
          Featured Tour
        </span>
        <h2 className="fw-bold mb-0" style={{ color: '#1f1f1f', fontSize: '2.1rem' }}>
          Most Popular Tours
        </h2>
      </div>

      {/* شبكة البطاقات الثمانية */}
      <div className="row g-4">
        {toursData.map((tour) => (
          <div key={tour.id} className="col-12 col-sm-6 col-lg-3">
            <div 
              className="card h-100 border-0 shadow-sm overflow-hidden" 
              style={{ backgroundColor: '#ffffff', borderRadius: '18px' }}
            >
              
              {/* صورة الرحلة + شارة عدد الأيام */}
              <div className="position-relative p-2 pb-0">
                <img 
                  src={tour.img} 
                  alt={tour.title} 
                  className="w-100" 
                  style={{ height: '185px', objectFit: 'cover', borderRadius: '14px' }} 
                />
                <span 
                  className="position-absolute px-2 py-1 text-white small fw-semibold"
                  style={{ 
                    bottom: '10px', 
                    left: '18px', 
                    backgroundColor: 'rgba(28, 28, 28, 0.65)', 
                    backdropFilter: 'blur(4px)',
                    borderRadius: '8px',
                    fontSize: '0.78rem'
                  }}
                >
                  {tour.duration}
                </span>
              </div>

              {/* تفاصيل البطاقة */}
              <div className="card-body d-flex flex-column justify-content-between pt-3">
                <div>
                  <div className="small mb-1" style={{ color: '#6c757d', fontSize: '0.8rem' }}>
                    <span style={{ color: '#c68b19' }}>★ {tour.rating}</span> Overall Reviews ({tour.reviews} Reviews)
                  </div>

                  <h6 className="fw-bold mb-3" style={{ color: '#1f1f1f', fontSize: '1.02rem' }}>
                    {tour.title}
                  </h6>
                </div>

                {/* السعر وزر Book Now */}
                <div className="d-flex align-items-center justify-content-between pt-2 border-top" style={{ borderColor: '#f3ede2' }}>
                  <div>
                    <span className="fw-bold" style={{ color: '#c68b19', fontSize: '1.15rem' }}>
                      ${tour.price}
                    </span>
                    <span className="small text-muted">/Person</span>
                  </div>

                  <button 
                    onClick={() => {
                      setSelectedTour(tour);
                      setTourPage(2);
                    }}
                    className="btn btn-sm fw-bold px-3 py-1"
                    style={{ 
                      backgroundColor: '#faf7f2', 
                      color: '#c68b19', 
                      border: '1px solid #e6d5b8',
                      borderRadius: '10px',
                      transition: '0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#c68b19';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#faf7f2';
                      e.currentTarget.style.color = '#c68b19';
                    }}
                  >
                    Book Now
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
)}
{page === 'tours' && tourPage === 2 && selectedTour && (
  <div style={{ backgroundColor: '#faf7f2', minHeight: '100vh', padding: '40px 0 70px' }}>
    <div className="container">
      <div className="card border-0 shadow-sm p-4 p-md-5" style={{ backgroundColor: '#ffffff', borderRadius: '22px' }}>
        <div className="row g-5 align-items-start">

          {/* Left Column: Tour Image, Location, Duration, About, Available Activities */}
          <div className="col-12 col-lg-7">
            <div className="position-relative mb-4">
              <img
                src={selectedTour.img}
                alt={selectedTour.title}
                className="w-100"
                style={{ height: '330px', objectFit: 'cover', borderRadius: '18px' }}
              />
              <button
                type="button"
                onClick={() => setTourPage(1)}
                className="btn position-absolute shadow-sm fw-bold"
                style={{
                  top: '14px',
                  left: '14px',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  color: '#1f1f1f',
                  border: '1px solid #e6d5b8'
                }}
                title="Back to Tours"
              >
                ←
              </button>
            </div>

            <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
              <div>
                <h2 className="fw-bold mb-1" style={{ color: '#1f1f1f' }}>
                  {selectedTour.title}
                </h2>
                <div className="text-muted fw-semibold">{selectedTour.location}</div>
                <div className="text-muted small mt-1">Duration: {selectedTour.duration}</div>
              </div>

              <div className="fw-bold fs-6" style={{ color: '#c68b19' }}>
                ★ {selectedTour.rating}
              </div>
            </div>

            <hr style={{ borderColor: '#f3ede2' }} />

            <div className="mb-4">
              <h5 className="fw-bold mb-2" style={{ color: '#1f1f1f' }}>About</h5>
              <p className="text-secondary mb-0" style={{ lineHeight: '1.7' }}>
                {selectedTour.about}
              </p>
            </div>

            <div>
              <h5 className="fw-bold mb-2" style={{ color: '#1f1f1f' }}>Available Activities</h5>
              <ul className="mb-0 text-secondary" style={{ lineHeight: '1.9' }}>
                {selectedTour.activities.map((activity, idx) => (
                  <li key={idx}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="col-12 col-lg-5">
            <h4 className="fw-bold mb-4 text-center" style={{ color: '#1f1f1f' }}>
              Book This Tour
            </h4>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setTourPage(3);
              }}
            >
              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Enter your full name"
                  value={tourBooking.fullName}
                  onChange={(e) => setTourBooking({ ...tourBooking, fullName: e.target.value })}
                  style={{ borderRadius: '10px', borderColor: '#e6d5b8', padding: '10px 12px' }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  required
                  placeholder="name@example.com"
                  value={tourBooking.email}
                  onChange={(e) => setTourBooking({ ...tourBooking, email: e.target.value })}
                  style={{ borderRadius: '10px', borderColor: '#e6d5b8', padding: '10px 12px' }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  required
                  placeholder="Enter your phone number"
                  value={tourBooking.phone}
                  onChange={(e) => setTourBooking({ ...tourBooking, phone: e.target.value })}
                  style={{ borderRadius: '10px', borderColor: '#e6d5b8', padding: '10px 12px' }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary">Travel Date</label>
                <input
                  type="date"
                  className="form-control"
                  required
                  value={tourBooking.travelDate}
                  onChange={(e) => setTourBooking({ ...tourBooking, travelDate: e.target.value })}
                  style={{ borderRadius: '10px', borderColor: '#e6d5b8', padding: '10px 12px' }}
                />
              </div>

              <div className="mb-4">
                <label className="form-label small fw-bold text-secondary">Number of Persons</label>
                <div className="d-flex align-items-center justify-content-between border px-3 py-2" style={{ borderRadius: '10px', borderColor: '#e6d5b8' }}>
                  <button
                    type="button"
                    className="btn btn-sm fw-bold px-3"
                    style={{ backgroundColor: '#faf7f2', color: '#1f1f1f', borderRadius: '8px' }}
                    onClick={() =>
                      setTourBooking({ ...tourBooking, persons: Math.max(1, tourBooking.persons - 1) })
                    }
                  >
                    −
                  </button>

                  <span className="fw-bold" style={{ color: '#1f1f1f' }}>
                    {tourBooking.persons}
                  </span>

                  <button
                    type="button"
                    className="btn btn-sm fw-bold px-3"
                    style={{ backgroundColor: '#faf7f2', color: '#1f1f1f', borderRadius: '8px' }}
                    onClick={() =>
                      setTourBooking({ ...tourBooking, persons: tourBooking.persons + 1 })
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-start mb-3 pt-2 border-top" style={{ borderColor: '#f3ede2' }}>
                <div>
                  <div className="small text-secondary fw-semibold">Price per Person</div>
                  <div className="fw-bold" style={{ color: '#1f1f1f' }}>${selectedTour.price}</div>
                </div>
                <div className="fw-bold" style={{ color: '#1f1f1f' }}>${selectedTour.price}</div>
              </div>

              <div className="d-flex justify-content-between align-items-start mb-4">
                <div>
                  <div className="fw-bold" style={{ color: '#1f1f1f' }}>Total Price</div>
                  <div className="small text-muted">
                    ${selectedTour.price} × {tourBooking.persons} = ${selectedTour.price * tourBooking.persons}
                  </div>
                </div>
                <div className="fw-bold fs-5" style={{ color: '#1f1f1f' }}>
                  ${selectedTour.price * tourBooking.persons}
                </div>
              </div>

              <button
                type="submit"
                className="btn w-100 py-3 fw-bold text-white"
                style={{ backgroundColor: '#c68b19', borderRadius: '12px' }}
              >
                Continue to Payment
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  </div>
)}
{page === 'tours' && tourPage === 3 && selectedTour && (
  <div style={{ backgroundColor: '#faf7f2', minHeight: '100vh', padding: '40px 0 70px' }}>
    <div className="container" style={{ maxWidth: '850px' }}>
      
      {/* Back Button */}
      <button
        type="button"
        onClick={() => setTourPage(2)}
        className="btn d-inline-flex align-items-center mb-4 px-3 py-2 fw-semibold"
        style={{ backgroundColor: '#ffffff', color: '#c68b19', border: '1px solid #e6d5b8', borderRadius: '10px' }}
      >
        ← Back to Booking Details
      </button>

      <div className="card border-0 shadow-sm p-4 p-md-5" style={{ backgroundColor: '#ffffff', borderRadius: '22px' }}>
        <h3 className="fw-bold mb-1 text-center" style={{ color: '#1f1f1f' }}>
          Tour Payment
        </h3>
        <p className="text-muted text-center small mb-4">
          Review your booking summary and choose your payment method
        </p>

        {/* Booking Summary Box */}
        <div className="p-4 mb-4" style={{ backgroundColor: '#faf7f2', borderRadius: '16px', border: '1px solid #e6d5b8' }}>
          <h6 className="fw-bold mb-3" style={{ color: '#c68b19' }}>Booking Summary</h6>
          <div className="row g-2 small">
            <div className="col-6 text-secondary">Tour Name:</div>
            <div className="col-6 fw-bold text-end" style={{ color: '#1f1f1f' }}>{selectedTour.title}</div>

            <div className="col-6 text-secondary">Guest Name:</div>
            <div className="col-6 fw-bold text-end" style={{ color: '#1f1f1f' }}>{tourBooking.fullName}</div>

            <div className="col-6 text-secondary">Travel Date:</div>
            <div className="col-6 fw-bold text-end" style={{ color: '#1f1f1f' }}>{tourBooking.travelDate}</div>

            <div className="col-6 text-secondary">Number of Persons:</div>
            <div className="col-6 fw-bold text-end" style={{ color: '#1f1f1f' }}>{tourBooking.persons}</div>

            <div className="col-12"><hr className="my-2" style={{ borderColor: '#e6d5b8' }} /></div>

            <div className="col-6 fw-bold fs-6" style={{ color: '#1f1f1f' }}>Total Amount:</div>
            <div className="col-6 fw-bold fs-5 text-end" style={{ color: '#c68b19' }}>
              ${selectedTour.price * tourBooking.persons}
            </div>
          </div>
        </div>

        {/* Payment Form */}
         <form
  onSubmit={(e) => {
    e.preventDefault();
    const newBooking = {
      id: `TR-${Math.floor(1000 + Math.random() * 9000)}`,
      type: 'tour',
      title: selectedTour.title,
      date: tourBooking.travelDate,
      persons: tourBooking.persons,
      total: selectedTour.price * tourBooking.persons,
      status: 'Confirmed',
      guestName: tourBooking.fullName,
      paymentMethod: tourPaymentMethod
    };
    setMyBookings([newBooking, ...myBookings]);
    setShowTourConfirmModal(true);
  }}
>
          <label className="form-label fw-bold small text-secondary mb-2">Select Payment Method</label>
          <div className="row g-3 mb-4">
            {['Bank Transfer', 'Bank of Khartoum (BoK)', 'Visa / MasterCard'].map((method) => (
              <div key={method} className="col-12 col-md-4">
                <div
                  onClick={() => setTourPaymentMethod(method)}
                  className="p-3 text-center fw-semibold small"
                  style={{
                    cursor: 'pointer',
                    borderRadius: '12px',
                    border: tourPaymentMethod === method ? '2px solid #c68b19' : '1px solid #e6d5b8',
                    backgroundColor: tourPaymentMethod === method ? '#faf7f2' : '#ffffff',
                    color: tourPaymentMethod === method ? '#c68b19' : '#1f1f1f',
                    transition: '0.2s'
                  }}
                >
                  {method}
                </div>
              </div>
            ))}
          </div>

          {/* Payment Input Fields based on Selected Method */}
          {tourPaymentMethod === 'Visa / MasterCard' ? (
            <div className="row g-3 mb-4">
              <div className="col-12">
                <label className="form-label small fw-bold text-secondary">Cardholder Name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Name on card"
                  style={{ borderRadius: '10px', borderColor: '#e6d5b8', padding: '10px 12px' }}
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-bold text-secondary">Card Number</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="0000 0000 0000 0000"
                  style={{ borderRadius: '10px', borderColor: '#e6d5b8', padding: '10px 12px' }}
                />
              </div>
              <div className="col-6 col-md-3">
                <label className="form-label small fw-bold text-secondary">Expiry Date</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="MM/YY"
                  style={{ borderRadius: '10px', borderColor: '#e6d5b8', padding: '10px 12px' }}
                />
              </div>
              <div className="col-6 col-md-3">
                <label className="form-label small fw-bold text-secondary">CVV</label>
                <input
                  type="password"
                  className="form-control"
                  required
                  placeholder="123"
                  maxLength="4"
                  style={{ borderRadius: '10px', borderColor: '#e6d5b8', padding: '10px 12px' }}
                />
              </div>
            </div>
          ) : (
            <div className="row g-3 mb-4">
              <div className="col-12 col-md-6">
                <label className="form-label small fw-bold text-secondary">Account Holder Name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Enter sender account name"
                  style={{ borderRadius: '10px', borderColor: '#e6d5b8', padding: '10px 12px' }}
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-bold text-secondary">Transaction / Reference Number</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Enter transfer reference ID"
                  style={{ borderRadius: '10px', borderColor: '#e6d5b8', padding: '10px 12px' }}
                />
              </div>
            </div>
          )}

          {/* Pay Now Button */}
          <button
            type="submit"
            className="btn w-100 py-3 fw-bold text-white fs-5"
            style={{ backgroundColor: '#c68b19', borderRadius: '14px' }}
          >
            Pay Now (${selectedTour.price * tourBooking.persons})
          </button>
        </form>
      </div>
    </div>

    {/* Confirmation Modal with OK Button Only */}
    {showTourConfirmModal && (
      <div
        className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1050, padding: '20px' }}
      >
        <div
          className="card border-0 shadow-lg p-4 p-md-5 text-center"
          style={{ maxWidth: '430px', width: '100%', backgroundColor: '#ffffff', borderRadius: '22px' }}
        >
          <div
            className="mx-auto mb-3 d-flex align-items-center justify-content-center fw-bold fs-2"
            style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              backgroundColor: '#f3e5c8',
              color: '#c68b19'
            }}
          >
            ✓
          </div>

          <h4 className="fw-bold mb-2" style={{ color: '#1f1f1f' }}>
            Booking Confirmed!
          </h4>
          <p className="text-muted small mb-4">
            Your tour <strong>{selectedTour.title}</strong> for <strong>{tourBooking.persons}</strong> person(s) has been booked successfully.
          </p>

          <button
            type="button"
            className="btn w-100 py-2 fw-bold text-white"
            style={{ backgroundColor: '#c68b19', borderRadius: '12px' }}
            onClick={() => {
              setShowTourConfirmModal(false);
              setTourBooking({ fullName: '', email: '', phone: '', travelDate: '', persons: 2 });
              setTourPage(1);
              setPage('myBookings');
            }}
          >
            OK
          </button>
        </div>
      </div>
    )}
  </div>
)}
{(page === 'myBookings' || page === 'mybookings')&& (
  <div style={{ backgroundColor: '#faf7f2', minHeight: '100vh', padding: '40px 0 80px' }}>
    <div className="container" style={{ maxWidth: '1150px' }}>
      <div className="row g-4">

        {/* Left Sidebar: User Profile + Categories */}
        <div className="col-12 col-lg-3">
          <div
            className="card border-0 shadow-sm p-4"
            style={{ backgroundColor: '#ffffff', borderRadius: '20px', border: '1px solid #e6d5b8' }}
          >
            {/* User Account Box */}
            <div className="text-center pb-3 mb-3" style={{ borderBottom: '1px solid #e6d5b8' }}>
              <div
                className="mx-auto mb-2 d-flex align-items-center justify-content-center fw-bold fs-4 text-white"
                style={{
                  width: '62px',
                  height: '62px',
                  borderRadius: '50%',
                  backgroundColor: '#c68b19'
                }}
              >
                {(myBookings[0]?.guestName || 'Guest User').charAt(0).toUpperCase()}
              </div>
              <h6 className="fw-bold mb-0" style={{ color: '#1f1f1f' }}>
                {myBookings[0]?.guestName || 'Guest User'}
              </h6>
              <small className="text-muted">Member Account</small>
            </div>

            {/* Categories Menu */}
            <div className="d-flex flex-column gap-2">
              {[
                { key: 'all', label: 'All Bookings' },
                { key: 'hotel', label: 'Hotels' },
                { key: 'flight', label: 'Flights' },
                { key: 'restaurant', label: 'Restaurants' },
                { key: 'tour', label: 'Tours' },
                { key: 'messages', label: 'Messages' },
              ].map((tab) => {
                const isActive = bookingFilter === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setBookingFilter(tab.key)}
                    className="btn text-start fw-semibold px-3 py-2 d-flex justify-content-between align-items-center"
                    style={{
                      borderRadius: '12px',
                      backgroundColor: isActive ? '#c68b19' : '#faf7f2',
                      color: isActive ? '#ffffff' : '#1f1f1f',
                      border: isActive ? '1px solid #c68b19' : '1px solid #e6d5b8',
                      transition: '0.2s'
                    }}
                  >
                    <span>{tab.label}</span>
                    <span
                      className="badge"
                      style={{
                        backgroundColor: isActive ? '#ffffff' : '#e6d5b8',
                        color: isActive ? '#c68b19' : '#1f1f1f',
                        borderRadius: '8px'
                      }}
                    >
                      {tab.key === 'messages'
  ? clientMessages.length
  : tab.key === 'all'
  ? myBookings.length
  : myBookings.filter((b) => b.type === tab.key).length}
                      
                        
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Content: Filtered Bookings */}
        <div className="col-12 col-lg-9">
          <div className="mb-4">
            <h3 className="fw-bold mb-1" style={{ color: '#1f1f1f' }}>
              My Bookings
            </h3>
            <p className="text-muted small mb-0">
              Manage and review your reservations across all services
            </p>
          </div>
          {bookingFilter === 'messages' && (
  <div className="d-flex flex-column gap-3">
    {clientMessages.map((msg) => (
      <div
        key={msg.id}
        className="card border-0 shadow-sm p-3 p-md-4"
        style={{ backgroundColor: '#ffffff', borderRadius: '18px' }}
      >
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
          <span
            className="badge px-3 py-1 fw-semibold"
            style={{
              backgroundColor: '#faf7f2',
              color: '#c68b19',
              border: '1px solid #e6d5b8',
              borderRadius: '12px',
              fontSize: '0.78rem'
            }}
          >
            {msg.type}
          </span>
          <small className="text-muted">{msg.time}</small>
        </div>
        <h6 className="fw-bold mb-1" style={{ color: '#1f1f1f' }}>
          {msg.title}
        </h6>
        <p className="text-secondary small mb-0">
          {msg.body}
        </p>
      </div>
    ))}
  </div>
)}

{bookingFilter !== 'messages' && (
          <div className="d-flex flex-column gap-3">
            {myBookings
              .filter((item) => bookingFilter === 'all' || item.type === bookingFilter)
              .map((item) => (
                <div
                  key={item.id}
                  className="card border-0 shadow-sm p-3 p-md-4"
                  style={{ backgroundColor: '#ffffff', borderRadius: '18px' }}
                >
                  <div className="row align-items-center g-3">

                    {/* Title, Category & Date */}
                    <div className="col-12 col-md-5">
                      <span
                        className="badge mb-2 text-uppercase"
                        style={{
                          backgroundColor: '#faf7f2',
                          color: '#c68b19',
                          border: '1px solid #e6d5b8',
                          fontSize: '0.7rem'
                        }}
                      >
                        {item.type}
                      </span>
                      <h5 className="fw-bold mb-1" style={{ color: '#1f1f1f' }}>
                        {item.title}
                      </h5>
                      <div className="text-muted small">
                        Date: {item.date}
                      </div>
                    </div>

                    {/* Persons & Price */}
                    <div className="col-6 col-md-3">
                      <div className="small text-secondary fw-semibold mb-1">
                        {item.persons} {item.persons === 1 ? 'Person' : 'Persons'}
                      </div>
                      <div className="fw-bold fs-5" style={{ color: '#1f1f1f' }}>
                        ${item.total}
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="col-6 col-md-2 text-md-center">
                      <span
                        className="badge px-3 py-2 fw-semibold"
                        style={{
                          backgroundColor: '#faf7f2',
                          color: '#c68b19',
                          border: '1px solid #e6d5b8',
                          borderRadius: '20px',
                          fontSize: '0.85rem'
                        }}
                      >
                        ✓ {item.status}
                      </span>
                    </div>

                    {/* View Details Button */}
                    <div className="col-12 col-md-2 text-md-end">
                      <button
                        type="button"
                        onClick={() => setSelectedBookingItem(item)}
                        className="btn w-100 fw-bold text-white py-2"
                        style={{ backgroundColor: '#c68b19', borderRadius: '10px', fontSize: '0.9rem' }}
                      >
                        View Details
                      </button>
                    </div>

                  </div>
                </div>
              ))}

            {myBookings.filter((item) => bookingFilter === 'all' || item.type === bookingFilter).length === 0 && (
              <div
                className="card border-0 shadow-sm p-5 text-center"
                style={{ backgroundColor: '#ffffff', borderRadius: '18px' }}
              >
                <p className="text-muted mb-0">No bookings found in this category yet.</p>
              </div>
            )}
          </div>)}
        </div>
      </div>
    </div>

    {/* Booking Details Modal */}
    {selectedBookingItem && (
      <div
        className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1050, padding: '20px' }}
      >
        <div
          className="card border-0 shadow-lg p-4 p-md-5"
          style={{ maxWidth: '460px', width: '100%', backgroundColor: '#ffffff', borderRadius: '22px' }}
        >
          <div className="text-center mb-3">
            <span
              className="badge px-3 py-2 mb-2"
              style={{ backgroundColor: '#faf7f2', color: '#c68b19', border: '1px solid #e6d5b8', borderRadius: '12px' }}
            >
              Booking ID: {selectedBookingItem.id}
            </span>
            <h4 className="fw-bold mb-0" style={{ color: '#1f1f1f' }}>
              {selectedBookingItem.title}
            </h4>
          </div>

          <div
            className="p-3 mb-4 small"
            style={{ backgroundColor: '#faf7f2', borderRadius: '14px', border: '1px solid #e6d5b8' }}
          >
            <div className="d-flex justify-content-between mb-2">
              <span className="text-secondary">Guest Name:</span>
              <span className="fw-bold" style={{ color: '#1f1f1f' }}>{selectedBookingItem.guestName}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-secondary">Date:</span>
              <span className="fw-bold" style={{ color: '#1f1f1f' }}>{selectedBookingItem.date}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-secondary">Guests:</span>
              <span className="fw-bold" style={{ color: '#1f1f1f' }}>{selectedBookingItem.persons}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-secondary">Payment Method:</span>
              <span className="fw-bold" style={{ color: '#1f1f1f' }}>{selectedBookingItem.paymentMethod}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-secondary">Status:</span>
              <span className="fw-bold" style={{ color: '#c68b19' }}>{selectedBookingItem.status}</span>
            </div>
            <hr className="my-2" style={{ borderColor: '#e6d5b8' }} />
            <div className="d-flex justify-content-between fs-6 fw-bold">
              <span style={{ color: '#1f1f1f' }}>Total Paid:</span>
              <span style={{ color: '#c68b19' }}>${selectedBookingItem.total}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setSelectedBookingItem(null)}
            className="btn w-100 py-2 fw-bold text-white"
            style={{ backgroundColor: '#c68b19', borderRadius: '12px' }}
          >
            OK
          </button>
        </div>
      </div>
    )}
  </div>
)}

      

      
                                                                    {page === 7 &&(
                                                                      <div className="w-100 my-auto py-4">
                                                                      
                                                                      
                                                                        <Card className="p-4 shadow-sm border-0 rounded-3 text-center mx-auto"
                                                                        style={{maxWidth:'480px',widows:'100%'}}>
                                                                          <h3 className="fw-bold mb-3"style={{color:'#d4af37'}}>Contact  Us</h3>
                                                                          <p className=" text-muted mb-4 small">Have questionor need assistance with your booking? We are here th help! </p>
                                                                          <Form onSubmit={(e)=>{e.preventDefault();alert('Message sent Sucessfully!');}}>
                                                                            <Form.Group className="mb-3 text-start">
                                                                              <Form.Label className="fw-semibold">Your Name</Form.Label>
                                                                              <Form.Control type="text" placeholder="Enter Your Name" required/>
                                                                            </Form.Group>
                                                                            <Form.Group className="mb-3 text-start">
                                                                              <Form.Label className="fw-semibold">Email Address</Form.Label>
                                                                              <Form.Control type="email" placeholder="name@example.com" required style={{padding:'10px'}}/>
                                                                            </Form.Group>
                                                                            <Form.Group className="mb-4 text-start">
                                                                              <Form.Label className="fw-semibold">Message</Form.Label>
                                                                              <Form.Control as="textarea" rows={6} placeholder="Howe can we help you ?" required style={{padding:'10x'}}/>
                                                                            </Form.Group>
                                                                            <Button
                                                                            type="submit"
                                                                            className="w-100 py-2 border-0 fw-bold shadow-sm"
                                                                            style={{backgroundColor:'#d4af37',color:'#ffffff',fontSize:'16px',borderRadius:'8px'}}
                                                                            >Send Message</Button>
                                                                          </Form>
                                                                        </Card>
                                                                        
                                                                      
                                                                      </div>
                                                                    )}                         
                                  </Container>
                   </div>
);
}
                                  
