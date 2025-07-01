import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import img1 from '../assets/location1.jpg';
import img2 from '../assets/location2.jpg';
import img3 from '../assets/location3.jpg';
import img4 from '../assets/location4.jpg';
import img5 from '../assets/location5.jpg';

const images = [img1, img2, img3, img4, img5];

const Locations = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <section className="pt-[40px] mt-[50px]">
      <div className="w-full max-w-[1240px] px-4 mx-auto">
        {/* Title bar */}
        <div className="mb-[20px] w-full max-w-[500px] mx-auto text-center">
          <h2 className="mb-[20px] text-[32px] font-bold text-[#2a2a2a]">
            Best Locations
          </h2>
          <p className="text-[16px] text-[#afafaf] leading-[30px] font-poppins">
            Discover the best offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          className="mt-[50px]"
          slidesPerView={1}
          loop={true}
          navigation={true}
          modules={[Navigation]}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`img-${index}`}
                className="rounded-xl mx-auto cursor-pointer 
                  w-full max-w-[550px] aspect-[4/3] 
                  h-auto sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover"
                onClick={() => {
                  setPhotoIndex(index);
                  setLightboxOpen(true);
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <FsLightbox
          toggler={lightboxOpen}
          sources={images}
          slide={photoIndex + 1}
          onClose={() => setLightboxOpen(false)}
        />
      </div>
    </section>
  );
};

export default Locations;
