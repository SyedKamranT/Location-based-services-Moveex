import React from 'react';

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-blue-800 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-serif mb-4">Book a Delivery</h1>
      <p className="mb-16 text-center max-w-md">
        Reliable, efficient, and hassle-free deliveries with real-time tracking.
        We move your packages swiftly and securely, every time.
      </p>
      <div className="bg-white p-12 rounded-lg text-center text-black shadow-lg max-w-lg">
        <h2 className="text-3xl font-semibold mb-4">THANKS FOR YOUR ORDER</h2>
        <p className="mb-6">If you have any questions or queries then feel free to get in contact with us.</p>
        <p className="mb-4">All the best,</p>
        <img src="/vite.svg" alt="Moveex logo" className="mx-auto w-32" />
      </div>
    </div>
  );
};

export default OrderSuccess;
