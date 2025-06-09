import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from '../assets/countries.jpg';
import img2 from '../assets/countries2.jpg';
import img3 from '../assets/countries3.jpg';
import img4 from '../assets/countries4.jpg';
import GenericButton from '../components/Generics/GenericButton';
import { faArrowRight, faGlobe, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const countries = [
  {
    img: img1,
    title: "Dubai",
    subtitle: "United Arab Emirated",
    description: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks."
  },
  {
    img: img2,
    title: "Antalya",
    subtitle: "Turkey",
    description: "Antalya is the fastest-growing city in Turkey, and tourists from around the world are discovering its fabulous mix of great beaches and traditional Turkish culture. Kids will love the Beach Park, which features Aqua Land (a waterslide-fanatic's dream) and Dolphin Land (home to dolphins, sea lions and white whales). Make sure to explore the old town center and to see Hadrian's Gate."
  },
  {
    img: img3,
    title: "Sharm El-Sheikh",
    subtitle: "Egypt",
    description: "Sharm El Sheikh is the center of tourism action in Sinai Peninsula and it has the world top diving sites. Specially  the underwater wonders of Ras Mohammed national park that took Sharm city to whole different level. The city has diving and shipwreck sites that attract both advanced and recreational divers from around the world to discover the un parallel marine life deep down the red sea."
  },
  {
    img: img4,
    title: "Istanbul",
    subtitle: "Turkey",
    description: "Istanbul is the most populous city in Turkey and its cultural, economic and historic center. It is located in north-western part of Turkey, divided into European and Asian side by Bosphorus, which connects the Sea of Marmara and Black Sea. It is the only city in the world that sits on two continents."
  }
];


const Countries = () => {
  return (
    <section className="pt-[40px]">
      <div className="w-[1240px] mx-auto">
        {/* Title bar */}
        <div className="mb-[20px] w-[500px]">
          <h2 className="mb-[20px] text-[32px] font-bold text-[#2a2a2a]">
            Visit One Of Our Countries Now
          </h2>
          <p className="text-[16px] text-[#afafaf] leading-[30px] font-poppins">
            Discover the best  offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences.
          </p>
        </div>
        {/* Countries */}
        <div>
          {countries.map((item, index) => (
            <div key={index} className="flex">
              <div className="w-[350px] h-[220px] my-[30px] mr-[30px]">
                <img className="w-[400px] h-[350px]  rounded-2xl"
                  src={item.img} alt={item.title} />
              </div>
              <div className='py-[30px] w-[610px] relative'>
                <div className='flex'>
                  <div>
                    <h2 className='text-[20px] font-bold mb-[5px]'>
                      {item.title}
                    </h2>
                    <p className='text-[#afafaf] text-[15px]'>{item.subtitle}
                    </p>
                  </div>
                  <div className='absolute right-1'>
                    <GenericButton label='Explore More' href='/reservation'  />
                  </div>
                </div>
                <p className='text-[18px] text-[#afafaf] my-[18px]'>
                  {item.description}
                </p>
                <hr className='text-[#e1dddd] m-3' />
                <div className='flex justify-between'>
                  <div className='flex items-center gap-2 text-[#afafaf]'>
                    <FontAwesomeIcon icon={faUser} size="m" />
                    <p>8.66 Mil People</p>
                  </div>
                  <div className='flex text-[#afafaf] items-center gap-2'>
                    <FontAwesomeIcon icon={faGlobe} size="m" />
                    <p>41.290 km2</p>
                  </div>
                  <div className='flex text-[#afafaf] items-center gap-2'>
                    <FontAwesomeIcon icon={faHome} size="m" />
                    <p>$1.100.200</p>
                  </div>

                </div>
                <hr className='text-[#e1dddd] m-3' />
                <a
                  href="/reservation"
                  className="font-semibold text-[var(--primary-color)] inline-flex items-center group"
                >
                  Need Directions?
                  <span className="ml-2 text-[var(--primary-color)] group-hover:translate-x-1 transition-transform duration-200">
                    <FontAwesomeIcon icon={faArrowRight} size="m" />
                  </span>
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;