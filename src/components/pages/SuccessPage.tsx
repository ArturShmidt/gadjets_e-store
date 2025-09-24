'use client';

import { CheckCircle } from 'lucide-react';
import ActionButton from '../UI/ActionButton';
import { useDispatch } from 'react-redux';
import { afterSuccessCheckout } from '@/lib/features/cart/cartSlice';
import { useEffect } from 'react';

export const SuccessPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(afterSuccessCheckout());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 sm:px-8 lg:px-16 dark:bg-dark-theme-bg">
      {/* Icon */}
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 dark:bg-green-400/10 mb-6 shadow-lg">
        <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-light-theme-text dark:text-dark-theme-text text-center mb-4">
        Payment was successful!
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-light-theme-text-menu dark:text-text-gray text-center mb-10 max-w-xl">
        Thank you for your purchase. Your order is now being processed. A
        confirmation email has been sent to you.
      </p>

      {/* Button */}
      <ActionButton name="Continue shopping" />
    </div>
  );
};
