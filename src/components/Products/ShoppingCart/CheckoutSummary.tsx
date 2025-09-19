'use client';

import React from 'react';

interface CheckoutSummaryProps {
  totalPrice: number;
}

const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({ totalPrice }) => {
  return (
    <div className="p-4 border border-gray-700 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Summary</h3>
      <div className="border-t border-gray-700 my-4" />
      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CheckoutSummary;
