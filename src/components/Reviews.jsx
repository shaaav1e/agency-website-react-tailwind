import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Reviews = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      position: "CEO, TechStart",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "Working with Pixels has been transformative for our business. Their team delivered a website that exceeded our expectations and has significantly improved our online presence.",
    },
    {
      id: 2,
      name: "Michael Johnson",
      position: "Marketing Director, GrowthLabs",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      rating: 5,
      text: "The attention to detail and commitment to quality is what sets Pixels apart. They didn't just build a website, they created a powerful tool that's helping us reach new customers every day.",
    },
    {
      id: 3,
      name: "David Wilson",
      position: "Founder, Innovate Inc",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 5,
      text: "I've worked with many web development agencies, but none have delivered the level of service and results that Pixels has. Their strategic approach and technical expertise are unmatched.",
    },
    {
      id: 4,
      name: "Robert Brown",
      position: "CTO, FutureTech",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      rating: 5,
      text: "From concept to execution, Pixels guided us through the entire process with professionalism and expertise. The final product has helped us increase conversions by 40%.",
    },
    {
      id: 5,
      name: "Thomas Clark",
      position: "Owner, Clark Enterprises",
      image: "https://randomuser.me/api/portraits/men/29.jpg",
      rating: 5,
      text: "The team at Pixels truly understands how to create websites that not only look great but also drive business results. They've been an invaluable partner in our growth.",
    },
  ];

  // Handle manual navigation with proper cleanup
  useEffect(() => {
    const handlePrev = () => {
      if (swiperRef.current) {
        swiperRef.current.slidePrev();
      }
    };

    const handleNext = () => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    };

    if (prevRef.current && nextRef.current) {
      prevRef.current.addEventListener("click", handlePrev);
      nextRef.current.addEventListener("click", handleNext);
    }

    return () => {
      if (prevRef.current && nextRef.current) {
        prevRef.current.removeEventListener("click", handlePrev);
        nextRef.current.removeEventListener("click", handleNext);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="container py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our <span className="text-blue-600">Clients</span> Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say
          about working with us.
        </p>
      </div>

      <div className="relative pb-20">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
            el: ".swiper-custom-pagination",
            bulletClass: "swiper-pagination-bullet custom-bullet",
            bulletActiveClass:
              "swiper-pagination-bullet-active custom-bullet-active",
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          speed={500}
          loop={false}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-500"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400"></i>
                  ))}
                </div>
                <p className="text-gray-700 flex-grow">{testimonial.text}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <i className="ri-double-quotes-l text-4xl text-blue-100"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Controls */}
        <div className="mt-8 flex flex-col items-center">
          {/* Custom Pagination */}
          <div className="swiper-custom-pagination mb-6"></div>

          {/* Custom Navigation Arrows */}
          <div className="flex justify-center gap-6">
            <button
              ref={prevRef}
              className="p-3 w-12 h-12 rounded-full bg-blue-500 border-2 border-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors"
              aria-label="Previous testimonial"
              disabled={activeIndex === 0}
            >
              <i className="ri-arrow-left-s-line text-white text-xl"></i>
            </button>
            <button
              ref={nextRef}
              className="p-3 w-12 h-12 rounded-full bg-blue-500 border-2 border-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors"
              aria-label="Next testimonial"
              disabled={activeIndex === testimonials.length - 1}
            >
              <i className="ri-arrow-right-s-line text-white text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
