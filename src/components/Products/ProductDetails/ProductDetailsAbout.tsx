import React from 'react';

type PhoneDescription = {
  title: string;
  text: string[];
};

interface Props {
  description: PhoneDescription[];
}

const ProductDetailsAbout: React.FC<Props> = ({ description }) => {
  return (
    <div className="text-light-theme-text dark:text-dark-theme-text px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">About</h2>
      <hr className="border-gray-700 mb-8" />
      <div className="space-y-8">
        {description.map((section) => (
          <div key={section.title}>
            <h3 className="text-xl font-bold mb-4">{section.title}</h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              {section.text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsAbout;
