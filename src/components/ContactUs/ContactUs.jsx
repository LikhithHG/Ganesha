import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8" id="contactUs">
        <h2 className="text-4xl mt-2 text-center font-bold text-customPurple">
          Contact Us
        </h2>
        <div className="text-center mb-6">
          <p className="text-lg text-gray-700 mb-2">
            If you have any questions or need further information, please feel free to contact us at:
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Rajesh Yawantikar</strong>
          </p>
          <p className="text-lg text-gray-700">
            <strong>Phone:</strong> (954) 903-8226
          </p>
          <br />
          <p className="text-lg text-gray-700 mb-2">
            <strong>Pankaj Pandey</strong>
          </p>
          <p className="text-lg text-gray-700">
            <strong>Phone:</strong> (916) 693-9454
          </p>
          <br />
          <p className="text-lg text-gray-700 mb-2">
            <strong>Chiranth Kalyanpura</strong>
          </p>
          <p className="text-lg text-gray-700">
            <strong>Phone:</strong> (916) 273-2056
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
