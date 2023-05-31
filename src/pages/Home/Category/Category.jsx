import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";



const Category = () => {
    return (
        <div className="mb-14">
            <SectionTitle
            subHeading={"From 11.00 AM to 10.00 PM"}
            heading={"Order online"}

            ></SectionTitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" />
        <h2 className="text-center text-4xl -mt-16 uppercase text-white">salads</h2>
        </SwiperSlide>
        <SwiperSlide><img src={img2} alt="" />
        <h2 className="text-center text-4xl -mt-16 uppercase text-white">pizzas</h2>
        </SwiperSlide>
        <SwiperSlide><img src={img3} alt="" />
        <h2 className="text-center text-4xl -mt-16 uppercase text-white">soups</h2>
        </SwiperSlide>
        <SwiperSlide><img src={img4} alt="" />
        <h2 className="text-center text-4xl -mt-16 uppercase text-white">desserts</h2>
        </SwiperSlide>
        <SwiperSlide><img src={img5} alt="" />
        <h2 className="text-center text-4xl -mt-16 uppercase text-white">salads</h2>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Category;