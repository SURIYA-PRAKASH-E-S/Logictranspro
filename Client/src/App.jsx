import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RoadCom from './RoadCom.jsx';
import VehicleBooking from './VehicleBooking.jsx';
import BookingPage from './BookingPage.jsx';
import PaymentPage from './PaymentPage.jsx';
import CommunityPage from './Community.jsx'; // Import your CommunityPage component
import BookingsList from './BookingsList.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import './App.css';

const App = () => {
    return (
        <>
            <Header />
            <Router>
                <div className="App">
                    <main>
                        <Routes>
                            <Route path="/" element={<RoadCom />} />
                            <Route path="/community1:vb" element={<CommunityPage />} />
                            <Route path="/vb" element={<VehicleBooking />} />
                            <Route path="/booking" element={<BookingPage />} />
                            <Route path="/payment" element={<PaymentPage />} />
                            <Route path="/bookings" element={<BookingsList />} /> {/* New route */}

                        </Routes>
                    </main>
                </div>
            </Router>
            <Footer />
        </>
    );
};

export default App;
