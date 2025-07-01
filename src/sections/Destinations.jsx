import img1 from '../assets/destination1.jpg';
import img2 from '../assets/destination2.jpg';
import GenericButton from '../components/Generics/GenericButton';

const destinations = [
  {
    img: img1,
    title: "Cheap Railway Tickets With Us",
    subtitle: "Whole world",
    description: "Embark on a railway adventure and explore destinations worldwide.Whether it's the picturesque landscapes, bustling cities, or cultural gems, our rail services offer a unique and comfortable way to traverse the globe. Immerse yourself in the beauty of different cultures, all accessible through our extensive railway network."
  },
  {
    img: img2,
    title: "Discover Exciting Air Travel Deals",
    subtitle: "Global Destinations",
    description: "Embark on an airborne adventure and explore destinations worldwide. Whether it's the breathtaking landscapes, vibrant cities, or cultural treasures, our airline services provide a convenient and exhilarating way to navigate the globe. Immerse yourself in the richness of diverse cultures, all easily accessible through our extensive air travel network."
  }
];


const Destinations = () => {
  return (
    <section className="pt-[40px]" id='about'>
      <div className="w-full max-w-[1240px] mx-auto px-4">
        {/* Title bar */}
        <div className="mb-[20px] w-full md:w-[500px]">
          <h2 className="mb-[20px] text-[32px] font-bold text-[#2a2a2a]">
            Explore Destinations with Ease
          </h2>
          <p className="text-[16px] text-[#afafaf] leading-[30px] font-poppins">
            Find the best deals on railway and airplane tickets in each city, carefully selected for you.
          </p>
        </div>

        {/* Destinations */}
        <div>
          {destinations.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-start mb-[30px]"
            >
              <div className="w-full md:w-[350px] h-[220px] md:my-[30px] md:mr-[30px] mb-4">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={item.img}
                  alt={item.title}
                />
              </div>

              <div className="w-full md:w-[610px] py-[10px]">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h2 className="text-[20px] font-bold mb-[5px]">
                      {item.title}
                    </h2>
                    <p className="text-[#afafaf] text-[15px]">{item.subtitle}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <GenericButton
                      href="/reservation"
                      label="Explore More"
                    />
                  </div>
                </div>
                <p className="text-[18px] text-[#afafaf] my-[18px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;