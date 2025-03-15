import React, { useState } from "react";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Available time slots
  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", {
      ...formData,
      date: selectedDate,
      time: selectedTime,
    });
    alert("Booking request submitted successfully!");

    // Reset form
    setSelectedDate("");
    setSelectedTime("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  // Generate calendar days for the current month
  const generateCalendarDays = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    // Get the first day of the month
    const firstDay = new Date(currentYear, currentMonth, 1);
    const startingDay = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.

    // Get the number of days in the month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const dateString = date.toISOString().split("T")[0];
      const isToday = day === today.getDate();
      const isPast = date < new Date(today.setHours(0, 0, 0, 0));
      const isSelected = dateString === selectedDate;

      days.push(
        <button
          key={day}
          onClick={() => !isPast && setSelectedDate(dateString)}
          disabled={isPast}
          className={`h-10 w-10 rounded-full flex items-center justify-center text-sm transition-colors
            ${isPast ? "text-gray-300 cursor-not-allowed" : "hover:bg-blue-100"}
            ${isToday ? "border border-blue-500" : ""}
            ${isSelected ? "bg-blue-500 text-white hover:bg-blue-600" : ""}
          `}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book a <span className="text-blue-600">Consultation</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Schedule a free consultation with our experts to discuss your
            project requirements and how we can help you achieve your business
            goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calendar Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6">Select a Date & Time</h3>

            {/* Month and Year */}
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-lg font-medium">
                {new Date().toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </h4>
              <div className="flex space-x-2">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <i className="ri-arrow-left-s-line"></i>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <i className="ri-arrow-right-s-line"></i>
                </button>
              </div>
            </div>

            {/* Calendar Days */}
            <div className="mb-6">
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                  <div
                    key={day}
                    className="h-10 w-10 flex items-center justify-center text-sm font-medium text-gray-500"
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {generateCalendarDays()}
              </div>
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div>
                <h4 className="text-md font-medium mb-4">
                  Available Times for{" "}
                  {new Date(selectedDate).toLocaleDateString()}
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-4 rounded-md text-sm border transition-colors
                        ${
                          selectedTime === time
                            ? "bg-blue-500 text-white border-blue-500"
                            : "border-gray-300 hover:border-blue-500"
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6">Your Information</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Shawaiz"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="shaaavie@gmail.com"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="03360018100"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <div className="mb-4">
                <div className="flex items-center">
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{
                        width: `${
                          (selectedDate ? 50 : 0) + (selectedTime ? 50 : 0)
                        }%`,
                      }}
                    ></div>
                  </div>
                  <span className="ml-4 text-sm text-gray-500">
                    {selectedDate && selectedTime
                      ? "Ready!"
                      : "Select date & time"}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={!selectedDate || !selectedTime}
                className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors
                  ${
                    selectedDate && selectedTime
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-gray-300 cursor-not-allowed"
                  }
                `}
              >
                Book Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
