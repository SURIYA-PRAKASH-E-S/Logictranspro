import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentPage.css'; // Include your CSS file for styling

const PaymentPage = () => {
    const location = useLocation();
    const { vehicle, customerName, customerEmail, customerProduct } = location.state;
    const navigate = useNavigate();
    
    const [paymentType, setPaymentType] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [upiId, setUpiId] = useState('');
    const [netBankingId, setNetBankingId] = useState('');
    const [paypalEmail, setPaypalEmail] = useState('');
    const [paypalPassword, setPaypalPassword] = useState('');

    const handlePayment = (e) => {
        e.preventDefault();
        if (paymentType === 'card') {
            handleCardPayment();
        } else if (paymentType === 'upi') {
            handleUpiPayment();
        } else if (paymentType === 'netbanking') {
            handleNetBankingPayment();
        } else if (paymentType === 'paypal') {
            handlePaypalPayment();
        }
    };

    const handleCardPayment = () => {
        alert("Card payment successful!");
        navigate('/community');
    };

    const handleUpiPayment = () => {
        alert("UPI payment successful!");
        navigate('/community');
    };

    const handleNetBankingPayment = () => {
        alert("Net banking payment successful!");
        navigate('/community');
    };

    const handlePaypalPayment = () => {
        alert("PayPal payment successful!");
        navigate('/community');
    };

    return (
        <div className="payment-page container mt-5">
            <h2 className="text-center">Payment Details</h2>
            <div className="payment-details text-center mb-4">
                <h4>Booking Summary</h4>
                <p><strong>Vehicle:</strong> {vehicle.name}</p>
                <p><strong>Customer Name:</strong> {customerName}</p>
                <p><strong>Email:</strong> {customerEmail}</p>
                <p><strong>Customer Product:</strong> {customerProduct}</p> 
                <p><strong>Charges:</strong> ₹{vehicle.price}</p>
            </div>
            <form onSubmit={handlePayment}>
                <div className="form-group">
                    <label>Payment Type:</label>
                    <select className="form-control" value={paymentType} onChange={(e) => setPaymentType(e.target.value)} required>
                        <option value="">Select Payment Type</option>
                        <option value="card">Card</option>
                        <option value="upi">UPI</option>
                        <option value="netbanking">Net Banking</option>
                        <option value="paypal">PayPal</option>
                    </select>
                </div>
                {paymentType === 'card' && (
                    <div>
                        <div className="form-group">
                            <label>Card Number:</label>
                            <input type="text" className="form-control" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="Enter card number" required />
                        </div>
                        <div className="form-group">
                            <label>Expiry Date:</label>
                            <input type="text" className="form-control" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} placeholder="MM/YY" required />
                        </div>
                        <div className="form-group">
                            <label>CVV:</label>
                            <input type="text" className="form-control" value={cvv} onChange={(e) => setCvv(e.target.value)} placeholder="Enter CVV" required />
                        </div>
                    </div>
                )}
                {paymentType === 'upi' && (
                    <div>
                        <div className="form-group">
                            <label>UPI ID:</label>
                            <input type="text" className="form-control" value={upiId} onChange={(e) => setUpiId(e.target.value)} placeholder="Enter UPI ID" required />
                        </div>
                    </div>
                )}
                {paymentType === 'netbanking' && (
                    <div>
                        <div className="form-group">
                            <label>Net Banking ID:</label>
                            <input type="text" className="form-control" value={netBankingId} onChange={(e) => setNetBankingId(e.target.value)} placeholder="Enter net banking ID" required />
                        </div>
                    </div>
                )}
                {paymentType === 'paypal' && (
                    <div>
                        <div className="form-group">
                            <label>PayPal Email:</label>
                            <input type="email" className="form-control" value={paypalEmail} onChange={(e) => setPaypalEmail(e.target.value)} placeholder="Enter PayPal email" required />
                        </div>
                        <div className="form-group">
                            <label>PayPal Password:</label>
                            <input type="password" className="form-control" value={paypalPassword} onChange={(e) => setPaypalPassword(e.target.value)} placeholder="Enter PayPal password" required />
                        </div>
                    </div>
                )}
                <button type="submit" className="btn btn-primary">Make Payment</button>
            </form>
        </div>
    );
};

export default PaymentPage;
