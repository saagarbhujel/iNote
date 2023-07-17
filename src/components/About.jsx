import React from "react";

const About = () => {
  return (
    <>
      <div className="flex md:flex justify-center md:justify-center aboutContainer mt-[100px]  scroll-smooth">
        <h1 className="text-[5vw] md:text-[4vw] font-bold underline underline-offset-4">
          Welcome to our note-taking web app!
        </h1>
      </div>
      <div className="aboutContainer w-3/4 m-auto mb-10 break-before-all scroll-smooth">
        <div className="mt-4">
          <p className="text-[14px] md:text-[16px]">
            At our app, we believe in the power of effective note-taking to
            enhance productivity and streamline your daily life. Whether you're
            a student, professional, or simply someone looking to stay
            organized, our app is designed to help you capture, organize, and
            access your notes effortlessly.
          </p>
          <br />
          <h2 id="-key-features-" className="mt-4 mb-2">
            <strong className="text-[4vw] underline md:text-[2vw]">
              Key Features
            </strong>
          </h2>
          <ul className="text-[14px] md:text-[16px]">
            <li className=" mb-2">
              <strong className="underline">User-Friendly Interface:</strong>
              <br />
              We have created a clean and intuitive interface that makes taking
              notes a breeze. Our minimalist design ensures that you can focus
              on your thoughts without distractions, allowing you to capture
              ideas quickly and efficiently.
            </li>
            <li className=" mb-2">
              <strong className="underline">Organization Made Easy:</strong>
              <br />
              We know how crucial it is to have well-structured notes. With our
              app, you can create notebooks and categorize your notes with tags,
              making it effortless to find and retrieve information when you
              need it. Whether you're juggling multiple projects or organizing
              your study materials, our app provides the flexibility to keep
              everything in order.
            </li>
            <li className=" mb-2">
              <strong className="underline">Seamless Syncing:</strong>
              <br />
              Access your notes from anywhere, at any time. Our app seamlessly
              syncs your notes across all your devices, ensuring that you have
              the latest version of your notes available, whether you're using
              your computer, tablet, or smartphone. Say goodbye to the
              frustration of outdated or inaccessible notes!
            </li>
            <li className=" mb-2">
              <strong className="underline">Collaboration and Sharing:</strong>
              <br />
              Collaboration is key in today's connected world. Our app allows
              you to collaborate with others by sharing individual notes or
              entire notebooks. Whether you're working on a group project,
              conducting research, or simply sharing ideas, our collaboration
              features enable smooth teamwork.
            </li>
            <li className=" mb-2">
              <strong className="underline">Powerful Search:</strong>
              <br />
              With our advanced search capabilities, you can quickly find
              specific notes or keywords within your extensive collection. Our
              app saves you valuable time by eliminating the need to sift
              through numerous pages or notebooks manually.
            </li>
            <li className=" mb-2">
              <strong className="underline">Customization Options:</strong>
              <br />
              We understand that personalization is important to you. That's why
              we offer customization options, allowing you to tailor your
              note-taking experience to suit your preferences. Choose from
              various themes, fonts, and formatting options to create an
              environment that inspires your productivity.
            </li>
            <li className=" mb-2">
              <strong className="underline">Privacy and Security:</strong>
              <br />
              We take your privacy and the security of your data seriously. Our
              app employs robust security measures to safeguard your notes,
              ensuring that your information remains private and protected.
            </li>
          </ul> <br />
          <p className="text-[14px] md:text-[16px]">
            We are dedicated to continuously improving our app to meet your
            evolving needs. Our team is committed to providing regular updates
            and adding new features based on user feedback. Your satisfaction
            and success are our top priorities.
          </p>
          <p className="text-[14px] md:text-[16px]">
            Start taking notes with our app today and unlock the power of
            effective organization and productivity. Simplify your life,
            streamline your workflow, and take control of your ideas like never
            before!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
