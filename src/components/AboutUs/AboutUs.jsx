import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8" id="aboutUs">
        
        <h2 className="text-4xl mt-2 text-center font-bold text-customPurple">
          About Us
        </h2>
        
        <h3><strong>Ganesh Puja Samiti: A New Cultural Initiative in Sacramento, CA</strong></h3>
        <p className="text-gray-700  text-lg mb-4">
        In the heart of Sacramento, CA, a new cultural organization has emerged to foster community spirit and celebrate Indian traditions: the Ganesh Puja Samiti. Established last year, this vibrant group is dedicated to organizing and promoting Ganesh Puja, one of the most significant and widely celebrated festivals in Hindu culture.        
        </p>
        
        <h3><strong>Leadership and Vision</strong></h3>
        <p className="text-gray-700  text-lg mb-4">
        The Ganesh Puja Samiti is helmed by Director Rajesh Yawantikar, a passionate advocate for cultural preservation and community engagement. Rajesh's vision for the Samiti is to create a welcoming space for individuals of all ages to come together, celebrate, and learn about the rich traditions associated with Ganesh Puja. Under his leadership, the Samiti aims to enhance the cultural fabric of Sacramento by fostering a sense of unity and cultural pride.
        </p>

        <h3><strong>Financial Stewardship</strong></h3>
        <p className="text-gray-700  text-lg mb-4">
        Pankaj Pandey serves as the Treasurer of the Ganesh Puja Samiti, ensuring the financial health and sustainability of the organization. Pankaj's expertise in financial management and dedication to transparency and accountability are crucial for the Samiti's operations. His role involves managing funds, overseeing donations, and ensuring that resources are utilized effectively to support the Samiti's various activities and events.
        </p>

        <h3><strong>Board of Directors</strong></h3>
        <p className="text-gray-700  text-lg mb-4">
        In addition to Rajesh Yawantikar and Pankaj Pandey, the Ganesh Puja Samiti's board of directors includes several other dedicated individuals who bring diverse skills and perspectives to the organization. Each director plays a vital role in planning and executing events, community outreach, and ensuring the smooth operation of the Samiti.
        </p>

        <h3><strong>Activities and Community Engagement</strong></h3>
        <p className="text-gray-700  text-lg mb-4">
        Since its inception, the Ganesh Puja Samiti has been actively involved in organizing Ganesh Puja celebrations, which include traditional rituals, cultural performances, and community feasts. The Samiti also conducts educational workshops, art competitions, and social gatherings to engage the community and promote cultural awareness.
        </p>

        <p className="text-gray-700  text-lg mb-4">
        By providing a platform for cultural exchange and community bonding, the Ganesh Puja Samiti is making significant strides in enriching the cultural landscape of Sacramento. As the organization grows, it continues to inspire and unite individuals, fostering a deeper appreciation for Indian traditions and values.
        </p>

        <p className="text-gray-700  text-lg mb-4">
        The Ganesh Puja Samiti stands as a testament to the power of community-driven initiatives and the importance of preserving cultural heritage in a diverse and dynamic society.
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
