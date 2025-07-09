import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-sm rounded-xl">
       <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.5221571409215!2d80.78509991425304!3d6.710487895156176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae38a3c41e49c5b%3A0xaaa3f90d5f874933!2sPambahinna%20Bus%20Stand!5e0!3m2!1sen!2slk!4v1713274245393!5m2!1sen!2slk"
        className="w-full h-full rounded-xl"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
