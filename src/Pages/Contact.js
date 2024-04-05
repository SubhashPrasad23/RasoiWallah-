import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API request
    try {
      // Replace this with actual API request
      await sendFormDataToBackend(formData);
      setSuccess(true);
      setFormData({ email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setSubmitting(false);
  };

  const sendFormDataToBackend = async (formData) => {
    // Replace this with actual API request
    console.log("Sending form data:", formData);
    // Example of a fetch request:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
    // const data = await response.json();
    // return data;
  };

  return (
    <section className="  pt-14 sm:pt-8 bg-gray-200">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
        <h2 className="mb-4 text-3xl pt-6 tracking-tight font-bold  text-gray-900 dark:text-gray-900">
        Get in touch with us 24/7
        </h2>
       
        <form onSubmit={handleSubmit} className="py-8 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border w-full p-3 border-orange-500 focus:outline-none rounded-lg"
              placeholder="Email ID"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="border w-full p-3 border-orange-500 focus:outline-none rounded-lg"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="border w-full p-3 border-orange-500 focus:outline-none rounded-lg"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="py-3 px-5 text-sm font-medium text-center bg-orange-500 text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>

      {/* )} */}
      {/* </div> */}
    </section>
  );
}

export default Contact;
