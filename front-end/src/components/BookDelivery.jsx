import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import backgroundImg from '../assets/background.png';
import worker from '../assets/worker.png';
import { CiSearch } from 'react-icons/ci';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const BookDelivery = () => {
  const navigate = useNavigate();
  const [serviceType, setServiceType] = useState('deliver');
  const [weight, setWeight] = useState('1');
  const [pickup, setPickup] = useState({ address: '', phone: '', details: '' });
  const [drop, setDrop] = useState({ address: '', phone: '', details: '' });
  const [itemType, setItemType] = useState('');
  const [paymentType] = useState('Online');

  // determine whether required fields are filled
  const isFormValid =
    pickup.address.trim() &&
    pickup.phone.trim() &&
    drop.address.trim() &&
    drop.phone.trim() &&
    itemType.trim();

  const calculateTotal = (service, weight) => {
    const basePrices = { deliver: 130, endOfDay: 112, schedule: 125 };
    const weightMultiplier = { '1': 1, '5': 1.2, '10': 1.5, '15': 1.8, '20': 2 };
    return (basePrices[service] * weightMultiplier[weight]).toFixed(0);
  };
  const total = calculateTotal(serviceType, weight);

  // inject or clear the Razorpay button when form validity changes
  useEffect(() => {
    const container = document.getElementById('razorpay-container');
    if (!container) return;
    container.innerHTML = '';

    if (isFormValid) {
      const form = document.createElement('form');
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      script.setAttribute('data-payment_button_id', 'pl_QqYMbcda25Rs5R');
      script.setAttribute(
        'data-redirect_url',
        `${window.location.origin}/success`
      );
      script.async = true;
      form.appendChild(script);
      container.appendChild(form);
    }
  }, [isFormValid]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="bg-cover bg-no-repeat h-[600px] pt-5"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <Navbar />
        <div className="pt-40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="marcellus-bold text-[72px] text-white leading-snug">
            Book a Delivery with Moveex
          </h1>
          <p className="text-white mt-4 poppins-light max-w-2xl">
            Reliable, efficient, and hassle-free deliveries with real-time
            tracking. We move your packages swiftly and securely, every time.
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="container mx-auto p-6 mt-12">
        <h1 className="text-3xl font-semibold mb-6">Book a Delivery</h1>

        {/* Service Type Cards */}
        <div className="flex space-x-4 mb-8">
          {[
            {
              key: 'deliver',
              label: 'Deliver Now',
              desc: '…deliver as soon as possible.',
              price: 130,
            },
            {
              key: 'endOfDay',
              label: 'By End of Day',
              desc: '…Schedule before 2 PM…',
              price: 112,
            },
            {
              key: 'schedule',
              label: 'Schedule',
              desc: '…arrive at a scheduled time.',
              price: 125,
            },
          ].map((svc) => (
            <div
              key={svc.key}
              onClick={() => setServiceType(svc.key)}
              className={`flex-1 p-4 border-2 rounded-lg cursor-pointer ${
                serviceType === svc.key ? 'border-blue-600' : 'border-gray-300'
              }`}
            >
              <h2 className="text-xl font-medium">{svc.label}</h2>
              <p className="text-gray-600 text-sm">{svc.desc}</p>
              <p className="mt-2 font-bold">from ₹{svc.price}</p>
            </div>
          ))}
        </div>

        {/* Weight Selection */}
        <div className="mb-6">
          <div className="font-medium mb-2">Weight</div>
          <div className="flex space-x-4">
            {['1', '5', '10', '15', '20'].map((w) => (
              <button
                key={w}
                onClick={() => setWeight(w)}
                className={`px-4 py-2 rounded ${
                  weight === w ? 'bg-blue-600 text-white' : 'bg-white border'
                }`}
              >
                Up to {w} kg
              </button>
            ))}
          </div>
        </div>

        <form className="space-y-6">
          {/* Pickup Address */}
          <fieldset className="border p-5 rounded">
            <legend className="poppins-semibold">Pick up Address</legend>
            <input
              type="text"
              value={pickup.address}
              onChange={(e) =>
                setPickup({ ...pickup, address: e.target.value })
              }
              placeholder="Street name & Locality"
              className="w-full mb-2 p-3 border rounded"
              required
            />
            <input
              type="text"
              value={pickup.phone}
              onChange={(e) =>
                setPickup({ ...pickup, phone: e.target.value })
              }
              placeholder="+91"
              className="w-full mb-2 p-3 border rounded"
              required
            />
            <textarea
              value={pickup.details}
              onChange={(e) =>
                setPickup({ ...pickup, details: e.target.value })
              }
              placeholder="Flat number, floor, building, landmarks, etc."
              className="w-full mb-2 p-3 border rounded"
            />
          </fieldset>

          {/* Delivery Address */}
          <fieldset className="border p-5 rounded">
            <legend className="poppins-semibold">Delivery Address</legend>
            <input
              type="text"
              value={drop.address}
              onChange={(e) => setDrop({ ...drop, address: e.target.value })}
              placeholder="Street name & Locality"
              className="w-full mb-2 p-3 border rounded"
              required
            />
            <input
              type="text"
              value={drop.phone}
              onChange={(e) => setDrop({ ...drop, phone: e.target.value })}
              placeholder="+91"
              className="w-full mb-2 p-3 border rounded"
              required
            />
            <textarea
              value={drop.details}
              onChange={(e) => setDrop({ ...drop, details: e.target.value })}
              placeholder="Flat number, floor, building, landmarks, etc."
              className="w-full mb-2 p-3 border rounded"
            />
          </fieldset>

          {/* Item Type */}
          <div>
            <input
              type="text"
              value={itemType}
              onChange={(e) => setItemType(e.target.value)}
              placeholder="What are you sending?"
              className="w-full mb-2 p-2 border rounded"
            />
            <div className="flex space-x-2 text-blue-600">
              {[
                'Documents',
                'Food',
                'Cloth',
                'Groceries',
                'Flowers',
                'Cake',
                'Parcel',
              ].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setItemType(t)}
                  className={`underline ${
                    itemType === t ? 'font-semibold' : ''
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            
          </div>
                    <div className="text-xl font-bold">
            Total: ₹{total}
          </div>

          {/* conditional Submit / Payment */}
          {!isFormValid ? (
            <button
              type="button"
              disabled
              className="w-full py-3 border-1 border-black bg-gray-400 font-semibold text-gray-700 rounded cursor-not-allowed"
            >
              Complete all fields to continue
            </button>
          ) : (
            <div id="razorpay-container" className="mt-6" />
          )}
        </form>
      </div>

      {/* footer... */}
    </div>
  );
};

export default BookDelivery;
