import React from "react";

function About() {
  return (
    <div className="mt-32 w-3/5 mx-auto text-lg">
      <h1 className="text-3xl font-bold ">About Us</h1>
      <h3 className="text-2xl font-semibold my-2 mt-4">
        {" "}
        Welcome to Rasoi <span className="text-orange-500">Wallah</span>
      </h3>
      <div>
        <p className="">
          {" "}
          At RasoiWallah, we're passionate about delivering delicious meals
          straight to your door, making dining convenient and enjoyable for
          everyone. Whether you're craving your favorite local cuisine or
          looking to explore new flavors, we've got you covered.
        </p>
      </div>
      <div className="my-4">
        <h4 className="font-semibold text-2xl ">Our Mission </h4>
        <p>
          {" "}
          Our mission is simple : to provide an exceptional food delivery
          experience that delights our customers every time. We strive to :{" "}
          <br />
          <ul className="">
            <li className="my-3">
              {" "}
              Deliver Freshness : We partner with the finest restaurants in your
              area to ensure that every meal is prepared with the freshest
              ingredients and delivered to you promptly.
            </li>
            <li className="">
              Cater to Your Tastes : From classic comfort foods to exotic
              cuisines, our diverse menu offerings cater to every palate and
              dietary preference. Whether you're vegan, gluten-free, or craving
              a hearty steak, we have something for everyone.
            </li>
            <li className="my-3">
              Prioritize Quality : Quality is at the heart of everything we do.
              From selecting top-notch ingredients to maintaining high standards
              of food safety and hygiene, we never compromise on quality.
            </li>
          </ul>
        </p>
        <div>
          <h4 className="font-semibold text-2xl">Our Team</h4> Behind every
          successful delivery is a dedicated team committed to excellence. Our
          team consists of passionate food enthusiasts, tech-savvy
          professionals, and customer service experts who work tirelessly to
          ensure your experience with us is nothing short of exceptional.
        </div>
        <div>
          <h4 className="font-semibold text-2xl mt-3">Get in Touch </h4>
          <p>
            {" "}
            Have questions, feedback, or special requests? We're here to help!
            Our customer support team is available 24/7 to assist you with
            anything you need. Feel free to reach out to us via phone, email, or
            chat, and we'll be happy to assist you.
          </p>
        </div>
        <div className="my-4">
          {" "}
          Thank you for choosing RasoiWallah. We're thrilled for your culinary
          cravings. We look forward to serving you delicious meals with a side
          of convenience, every time!
        </div>
      </div>
    </div>
  );
}

export default About;
