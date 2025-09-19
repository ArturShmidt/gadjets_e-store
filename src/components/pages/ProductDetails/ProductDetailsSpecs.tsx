import React from 'react';

interface Spec {
  label: string;
  value: string;
}

interface Props {
  specsData: Spec[];
}

const ProductDetailsSpecs: React.FC<Props> = ({ specsData }) => {
  return (
    <div className="text-light-theme-text dark:text-dark-theme-text p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Tech specs</h2>
      <hr className="border-gray-700 mb-6" />

      <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
        {specsData.map((spec) => (
          <React.Fragment key={spec.label}>
            <span className="text-gray-400">{spec.label}</span>

            <span className="font-medium text-right">{spec.value}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsSpecs;
