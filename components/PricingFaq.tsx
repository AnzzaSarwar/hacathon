import React from 'react';

export default function PricingFAQs() {
  return (
    <div className="container mx-auto mt-16 px-4">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Pricing FAQs</h1>
        <p className="text-gray-600 mt-2">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics
        </p>
      </div>

      {/* FAQs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
        {/* FAQ Item */}
        {Array(6)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col space-y-2 border-b pb-4 border-gray-300"
            >
              <div className="flex items-center text-black font-semibold">
                <span className="mr-2 text-2xl text-blue-600">{'>'}</span> the quick fox jumps over the lazy dog
              </div>
              <p className="text-sm text-gray-600 ml-4 font-semibold">
                Met minim Mollie non desert Alamo est sit cliquey <br /> dolor do met
                sent. RELIT official consequent door ENIM <br /> RELIT Mollie. Excitation
                venial consequent sent <br /> nostrum met.
              </p>
            </div>
          ))}
      </div>

      {/* Footer Section */}
      <div className="text-center mt-10">
        <p className="text-md font-bold text-gray-600">
          Haven’t got your answer? Contact our support
        </p>
      </div>
    </div>
  );
}
