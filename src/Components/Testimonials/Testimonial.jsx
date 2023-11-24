import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Img1 from "../../assets/yogaImg1.webp";
import Img2 from "../../assets/se4.webp";
import Img3 from "../../assets/yogaImg11.avif";
import Img4 from "../../assets/yogaImg12.avif";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <h1>what our members say</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}>
        <div className="card-container">
          <SwiperSlide>
            <div className="testimonial-card">
              <img src={Img1} alt="pic" />
              <div className="content">
                <h5>Emma</h5>
                <p>
                  I lost 20kgs with yoga and diet from 90 to 70. I'm really
                  happy ,acheived this after many years off struggle did all
                  excercises , swimming,gym,keto.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-card">
              <img src={Img2} alt="pic" />
              <div className="content">
                <h5>Alekya</h5>
                <p>
                  Its been 1 month since I joined here . after joining here I
                  learnt many things like what to live a disease-free and
                  stress-free life.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-card">
              <img src={Img3} alt="pic" />
              <div className="content">
                <h5>jan</h5>
                <p>
                  I am taking online yoga classes regularly. all classes start
                  ontime and yogatrainers conduct sessions very well. They
                  correct the posture of members taking classes and reminds
                  frequently to do yoga as per their capacity.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card">
              <img src={Img4} alt="pic" />
              <div className="content">
                <h5>raj</h5>
                <p>
                  I really love this sessions. different teachers with various
                  passions and expertise bringing us such a healthy diet of
                  complimentary yoga styles.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card">
              <img src={Img1} alt="pic" />
              <div className="content">
                <h5>raj</h5>
                <p>
                  I really love this sessions. different teachers with various
                  passions and expertise bringing us such a healthy diet of
                  complimentary yoga styles.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card">
              <img src={Img2} alt="pic" />
              <div className="content">
                <h5>raj</h5>
                <p>
                  I really love this sessions. different teachers with various
                  passions and expertise bringing us such a healthy diet of
                  complimentary yoga styles.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card">
              <img src={Img3} alt="pic" />
              <div className="content">
                <h5>raj</h5>
                <p>
                  I really love this sessions. different teachers with various
                  passions and expertise bringing us such a healthy diet of
                  complimentary yoga styles.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-card">
              <img src={Img4} alt="pic" />
              <div className="content">
                <h5>Alekya</h5>
                <p>
                  Its been 1 month since I joined here . after joining here I
                  learnt many things like what to live a disease-free and
                  stress-free life.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonial;
