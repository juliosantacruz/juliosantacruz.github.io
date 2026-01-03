import React, { useEffect, useState } from "react";
import CardDevTo from "./CardDevTo";
import DevToProjects from "../mocks/DevToMock.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";



export default function SlidersDevTo( ) {
  const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch("https://dev.to/api/articles?username=julio_santacruz")
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }, []);

  if (loading) return <p>Loading posts...</p>;

  return (
    <div>
      <Swiper
        slidesPerView={1.1}
        spaceBetween={10}
        slidesPerGroup={1}
        breakpoints={{
          425: {
            slidesPerView: 1.3,
          },
          // when window width is >= 768px
          500: {
            slidesPerView: 1.4,
          },
          // when window width is >= 768px
          650: {
            slidesPerView: 1.7,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
           // when window width is >= 768px
          900: {
            slidesPerView: 2.2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 2.5,
          },
          1280: {
            slidesPerView: 3.2,
          },
        }}

        navigation
      >
        {posts.map((element: any) => {

            return (
              <SwiperSlide key={element.id}>
                <CardDevTo data={element} />
              </SwiperSlide>
            );

        })}
      </Swiper>
    </div>
  );
}
