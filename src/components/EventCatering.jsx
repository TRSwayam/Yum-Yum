import React, { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

function EventCatering() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    eventType: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Toggle form display
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate fields before sending
    const { name, mobile, email, address, eventType } = formData;
    if (!name || !mobile || !email || !address || !eventType) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        "service_vbb0yse", // Replace with your EmailJS Service ID
        "template_0q8uw8l", // Replace with your EmailJS Template ID
        {
          from_name: name,
          from_email: email,
          to_name: "T R Swayam",
          to_email: "swayamlucky352@gmail.com",
          message: `
              Mobile: ${mobile}
              Address: ${address}
              Event Type: ${eventType}
            `,
        },
        "PGpyBcwL43iUx3sY9" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("Form submitted successfully! We will get back to you soon.");
          setFormSubmitted(true);
          setShowForm(false); // Close the form
          setFormData({
            name: "",
            mobile: "",
            email: "",
            address: "",
            eventType: "",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">Event Catering Services</h1>
        <p className="text-gray-700 text-lg">
          Make your events unforgettable with Foodie's Hub's exceptional event catering services.
        </p>
      </header>

      {/* Main Content */}
      <div className="space-y-12">
        {/* Section 1: Overview */}
        <section className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0">
          <div className="text-gray-700 md:w-1/2">
            <h2 className="text-2xl font-semibold text-pink-500 mb-2">Why Choose Us?</h2>
            <p>
              At Foodie's Hub, we understand that every event is special and unique. Our catering services are designed to meet the specific needs of your occasion, whether it's a corporate gathering, wedding, or family celebration. With a wide selection of menu options and personalized service, we ensure a seamless and memorable experience.
            </p>
          </div>
        </section>

        {/* Section 2: Menu Options */}
        <section className="flex flex-col md:flex-row-reverse items-center md:space-x-8 space-y-4 md:space-y-0">
          <div className="text-gray-700 md:w-1/2">
            <h2 className="text-2xl font-semibold text-pink-500 mb-2">Diverse Menu Options</h2>
            <p>
              We offer a range of customizable menu options to suit any taste and dietary preference. From gourmet appetizers to decadent desserts, we use only the finest ingredients to create dishes that will impress your guests.
            </p>
          </div>
        </section>

        {/* Section 3: Customer Experience */}
        <section className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0">
          <div className="text-gray-700 md:w-1/2">
            <h2 className="text-2xl font-semibold text-pink-500 mb-2">Exceptional Customer Experience</h2>
            <p>
              Our dedicated team is committed to providing a hassle-free catering experience. From initial consultations to the final setup, we handle every detail so you can enjoy your event without stress.
            </p>
          </div>
        </section>

        {/* Section 4: Testimonials */}
        <section className="bg-pink-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">What Our Clients Say</h2>
          <p className="italic text-gray-600">"Foodie's Hub's catering made our wedding day perfect. The food was delicious, and the staff was incredibly professional!"</p>
          <p className="text-right text-pink-500 mt-2">- Alex & Jamie</p>
        </section>

        {/* Section 5: Ready to Plan Your Event? */}
        <section className="text-center mt-12">
          <h2 className="text-3xl font-semibold text-pink-600 mb-4">Ready to Plan Your Event?</h2>
          <p className="text-gray-600 mb-6">
            Contact us today to discuss your event catering needs and receive a personalized quote.
          </p>
          <button
            onClick={toggleForm}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-lg font-semibold transform transition-all duration-500 hover:scale-105 hover:shadow-lg"
          >
            Get in Touch
          </button>
        </section>

        {/* Event Contact Form */}
        {showForm && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-3xl font-bold text-pink-600 mb-4">Event Contact Form</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-600 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">Mobile No.</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">Email ID</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
                    rows="2"
                    required
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">Event Selection</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
                    required
                  >
                    <option value="" disabled>
                      Select Event Type
                    </option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Gathering</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="private">Private Event</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-all duration-300"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={toggleForm}
                  className="w-full mt-2 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition-all duration-300 flex justify-center items-center"
                >
                  <XCircle className="w-5 h-5 mr-2" /> Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventCatering;
