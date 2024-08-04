import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-4xl mt-2 text-center font-bold text-customPurple">
          About Us
        </h2>
        <p className="text-gray-700  text-lg mb-4">
            <p>Namaste</p>

                We are delighted to announce that Ganesh Utsav Samiti Sacramento will be hosting the annual Ganesh Utsav celebration from September 6th to September 14th at Masonic Center, Folsom. This auspicious event honors Lord Ganesha and brings our community together through cultural programs, traditional rituals, and various activities.
                Ganesh Utsav is one of the most celebrated festivals in our community, drawing participants and spectators from all walks of life. This year, we are planning an even more vibrant and inclusive event with activities such as:
                <ul>
                    <li>Traditional Ganesh Puja and Aarti</li>
                    <li>Classical dance performances</li>
                    <li>Music Competitions and Games for Children and Adults</li>
                    <li>Eco-friendly Ganesh Idol Making Workshops</li>
                </ul>               
            </p>
        <p className="text-gray-700 text-lg mb-4">
            To ensure the success of this event, we are seeking the support of esteemed organizations like yours. Your sponsorship will help us cover the costs of organizing the festival, including venue arrangements, decorations, security, and promotional activities. In return, we offer a range of benefits to our sponsors:
        </p>
        <p className="text-gray-700 text-lg mb-4">
            <ol>
                <li>Brand Visibility: Your company's logo will be prominently displayed on event banners, promotional materials, and social media channels.</li>
                <li>Acknowledgment: Special mention and thanks during the event announcements and ceremonies.</li>
                <li>Community Engagement: Opportunity to engage directly with a diverse and culturally rich audience.</li>
            </ol>    .
        </p>
        <p className="text-gray-700 text-lg mb-4">
            We have various sponsorship packages available to suit different levels of contribution:
        </p>
        <p className="text-gray-700 text-lg mb-4">
            <ol>
                <li>Gold Sponsor: $501 - Large size space on Flyer and at the Venue</li>
                <li>Silver Sponsor: $301 - Medium size space on Flyer and at the Venue</li>
                <li>Bronze Sponsor: $201 - Small size space on Flyer</li>
            </ol>    .
        </p>
        <p className="text-gray-700 text-lg mb-4">
        We would be honored to have your esteemed organization as a sponsor for Ganesh Utsav 2024. Your support will not only enhance the event's success but also demonstrate your commitment to cultural and community development.
        </p>

        {/*<div className="mt-6 flex justify-center">
         <img
            src="https://via.placeholder.com/150"
            alt="Team Photo"
            className="rounded-full shadow-lg"
          />
        </div>
        */}
      </div>
    </div>
  );
};

export default AboutUs;
