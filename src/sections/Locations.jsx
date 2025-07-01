import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import img1 from '../assets/location1.jpg'
import img2 from '../assets/location2.jpg'
import img3 from '../assets/location3.jpg'
import img4 from '../assets/location4.jpg'
import img5 from '../assets/location5.jpg'

const images = [img1, img2, img3, img4, img5];


const Locations = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <section className="pt-[40px] mt-[50px]">
      <div className="w-[1240px] mx-auto">
        {/* Title bar */}
        <div className="mb-[20px] w-[500px] mx-auto">
          <h2 className="mb-[20px] text-[32px] font-bold text-[#2a2a2a] text-center">
            Best Locations
          </h2>
          <p className="text-[16px] text-[#afafaf] leading-[30px] font-poppins text-center">
            Discover the best  offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences.
          </p>
        </div>
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
              className="rounded-xl mx-auto cursor-pointer w-[550px] h-[450px]"
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
  )
}

export default Locations