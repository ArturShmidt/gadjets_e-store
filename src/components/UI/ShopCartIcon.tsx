'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

export default function ShoppingCartIcon() {
  // Отримуємо актуальну кількість товарів з кошика за допомогою useSelector
  // Ми використовуємо reduce, щоб порахувати загальну кількість, а не кількість унікальних позицій
  const itemCount = useSelector((state: RootState) =>
    state.persisted.cart.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.46683..."
        fill="#F1F2F9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.3335 10C..."
        fill="#F1F2F9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3337 12C..."
        fill="#F1F2F9"
      />

      {itemCount > 0 && (
        <>
          <circle
            cx="21"
            cy="7"
            r="7"
            fill="#EB5757"
            stroke="#0F1121"
          />
          <text
            x="21"
            y="7.5"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#F1F2F9"
            fontSize="8"
            fontWeight="bold"
            fontFamily="Arial"
          >
            {itemCount > 99 ? '99+' : itemCount}
          </text>
        </>
      )}
    </svg>
  );
}
