import React from 'react';

const AboutRestaurant = () => {
  return (
    <div className="min-h-screen bg-pink-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
          {/* Image Section */}
          <div className="mb-6">
            {/* <img
              src="https://source.unsplash.com/800x400/?restaurant,food"
              alt="Delicious food at YumYum Bites"
              className="w-full rounded-3xl shadow-md hover:scale-105 transition-transform duration-300"
            /> */}
          </div>

          {/* Text Section */}
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-600 bg-clip-text text-transparent text-center mb-6">
              <br></br>
              <br></br>
              <br></br>
              About Our Restaurant
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Welcome to <strong>YumYum </strong>, where flavor meets experience!
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our mission is to serve delightful dishes crafted with fresh, locally-sourced ingredients, delivering an exceptional dining experience for every guest. From the warmth of our ambiance to the richness of our recipes, every detail has been thoughtfully designed to create unforgettable moments.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether you're here for a quick bite or a lavish dinner, our team is passionate about bringing smiles to your table. Indulge in our signature dishes, explore our seasonal specials, and discover the joy of food made with love and care.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-6 text-center font-semibold">
              Join us at YumYum , where every meal is a celebration!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRestaurant;
