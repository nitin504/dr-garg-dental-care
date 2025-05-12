import React from 'react';

interface DentistProps {
  name: string;
  qualification: string;
  experience: string;
  specialties: string;
  imageUrl: string;
}

const DentistCard: React.FC<DentistProps> = ({
  name,
  qualification,
  experience,
  specialties,
  imageUrl
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={`Dr. ${name}`}
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-primary font-medium mb-3">{qualification}</p>
        <div className="border-t border-gray-200 pt-3 mb-4"></div>
        <div className="space-y-2">
          <div className="flex items-start">
            <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded mr-2">
              Experience
            </span>
            <p className="text-gray-700 text-sm">{experience}</p>
          </div>
          <div className="flex items-start">
            <span className="bg-secondary/10 text-secondary text-xs font-medium px-2.5 py-0.5 rounded mr-2">
              Specialties
            </span>
            <p className="text-gray-700 text-sm">{specialties}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dentists: React.FC = () => {
  const dentists = [
    {
      name: "Dr. Rahul Garg",
      qualification: "BDS, MDS - Orthodontics",
      experience: "16 years",
      specialties: "Implantologist, Orthodontist, Dentofacial Orthopedist",
      imageUrl: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
    },
    {
      name: "Dr. Taruna Garg",
      qualification: "MDS - Endodontics",
      experience: "15 years",
      specialties: "Endodontist",
      imageUrl: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg"
    }
  ];

  return (
    <section id="dentists" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Specialists</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of highly qualified dental specialists is committed to providing you with the best dental care.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-8 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {dentists.map((dentist, index) => (
            <DentistCard
              key={index}
              name={dentist.name}
              qualification={dentist.qualification}
              experience={dentist.experience}
              specialties={dentist.specialties}
              imageUrl={dentist.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dentists;