import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.name && formData.email && formData.message) {
      emailjs
        .send(
          "service_btjzgtj",
          "template_0q8uw8l",
          {
            from_name: formData.name,
            to_name: 'T R Swayam',
            from_email: formData.email,
            to_email: 'swayamlucky352@gmail.com',
            message: formData.message
          },

        )
        .then(
          () => {
            alert('Thank you for your message! We will get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
          },
          (error) => {
            console.error('EmailJS Error:', error);
            alert(' Form Successfully Submitted..!!');
          }
        );
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-pink-50 text-gray-800 p-6 text-center">
          <h1 className="text-4xl font-bold mb-2 text-pink-800">Yum Yum Restaurant & Cafe</h1>
          <p className="text-xl text-pink-600">Serving Happiness, One Dish at a Time</p>
        </div>
    
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-pink-500 pb-2">Contact Us</h2>
            <div className="space-y-4">
              <div className="bg-pink-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Why Contact Yum Yum?</h3>
                <ul className="text-sm text-gray-700 list-disc list-inside">
                  <li>Personalized Dining Recommendations</li>
                  <li>Special Event Bookings</li>
                  <li>Catering Inquiries</li>
                  <li>Customer Feedback</li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="mr-3 text-pink-600" />
                  <span>+91 9392739170</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3 text-pink-600" />
                  <a href="mailto:info@yumyumcafe.com" className="hover:text-blue-700">
                    info@yumyumcafe.com
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-3 text-pink-600" />
                  <span>Kangra,Himachal Pradesh</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-3 border-b-2 border-pink-500 pb-2">Contact by Query/Feedback/Msg</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-3 rounded-lg text-xl font-semibold hover:bg-pink-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
