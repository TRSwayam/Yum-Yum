import React, { useState } from 'react';
import { Briefcase, Coffee, Truck, Layout, Menu, Smile } from 'lucide-react';

function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Dine-in Service",
      description: "Step into a world of flavors with our extensive menu featuring dishes from around the globe. Enjoy a warm, welcoming ambiance perfect for friends, family, and special gatherings.",
      details: "Our dine-in service offers a unique, immersive experience with expertly crafted dishes, impeccable service, and a cozy ambiance that makes every visit memorable.",
      icon: <Coffee className="w-12 h-12 text-pink-500" />,
    },
    {
      id: 2,
      title: "Quick Takeaway",
      description: "In a rush? Our convenient takeaway options ensure that you can enjoy your favorite meals on the go, freshly prepared and ready when you need them.",
      details: "Our takeaway service is fast, efficient, and maintains the same quality as our dine-in meals, giving you great taste with convenience.",
      icon: <Truck className="w-12 h-12 text-pink-500" />,
    },
    {
      id: 3,
      title: "Event Catering",
      description: "Planning a celebration or a corporate event? Our catering service delivers delectable dishes tailored to your preferences, making every event unforgettable.",
      details: "Whether it's a wedding, birthday, or business event, our catering team brings customized menus and flawless service right to your venue.",
      icon: <Briefcase className="w-12 h-12 text-pink-500" />,
    },
    {
      id: 4,
      title: "Menu Browsing",
      description: "Explore our diverse menu options with ease and discover the perfect dishes for every occasion. From signature favorites to seasonal specials, we make menu browsing a delightful experience.",
      details: "Our interactive menu browsing feature allows you to explore our full menu at your own pace. Filter by cuisine type, dietary preferences, and course to quickly find what suits your taste, making it easier than ever to select your ideal meal.",
      icon: <Menu className="w-12 h-12 text-pink-500" />,
    },
    {
      id: 5,
      title: "Prompt Delivery",
      description: "Craving delicious food at home? Our delivery service ensures that your favorite meals arrive at your doorstep, fresh, safe, and right on time.",
      details: "Our reliable delivery service is known for timely arrivals and maintaining the freshness and safety of your order, bringing our top-notch meals right to you.",
      icon: <Layout className="w-12 h-12 text-pink-500" />,
    },
    {
      id: 6,
      title: "Customer Feedback",
      description: "See what our satisfied customers have to say about their experiences with Foodie's Hub!",
      details: "Our customers rave about our top-notch services, delicious meals, and welcoming ambiance. Here's what they have to say:",
      feedback: [
        "The dine-in experience was perfect. Great food and friendly staff!",
        "Prompt delivery and the food was fresh and hot. Highly recommend!",
        "We used their catering for an event, and it was flawless. Everyone loved the dishes!",
      ],
      icon: <Smile className="w-12 h-12 text-pink-500" />,
    },
  ];

  const handleServiceClick = (id) => {
    setActiveService(activeService === id ? null : id); // Toggle active service
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-white">
      <h1 className="text-4xl font-bold text-pink-600 text-center mb-8">Our Exceptional Services</h1>
      <p className="text-gray-700 leading-relaxed text-center mb-12 mx-auto max-w-2xl">
        At Foodie's Hub, we bring the joy of exceptional dining and unforgettable experiences right to you. 
        Explore our offerings and let us turn your meals into moments worth savoring.
      </p>
      
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div 
            key={service.id} 
            className={`p-6 bg-white border ${activeService === service.id ? 'border-pink-500 shadow-2xl' : 'border-pink-100 shadow-lg'} 
                        rounded-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer`}
            onClick={() => handleServiceClick(service.id)}
          >
            <div className="flex items-center space-x-4 mb-4">
              {service.icon}
              <h2 className="text-2xl font-semibold text-pink-500">{service.title}</h2>
            </div>
            <p className="text-gray-600">
              {service.description}
            </p>
            {activeService === service.id && (
              <div className="mt-4 p-4 bg-pink-50 rounded-lg">
                <p className="text-gray-800 mb-4">{service.details}</p>
                {service.feedback && (
                  <div>
                    <h3 className="font-bold text-pink-500">Customer Reviews:</h3>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      {service.feedback.map((review, index) => (
                        <li key={index}>{review}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-gray-700">
        Come and experience the quality and care that have made Foodie's Hub the top choice for food lovers everywhere. We're here to serve up happiness one plate at a time.
      </p>
    </div>
  );
}

export default Services;
