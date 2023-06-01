import './projects.css';
import { Data } from './Data.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';

function Projects() {
    return(
        <section className='testimonial container section' id='projects'>
            <h2 className='section__title'>Projects</h2>
            <span className='section__subtitle'>The products I've created...</span>

            <Swiper 
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}
                className='testimonial__container'>
                {Data.map(({ id, image, title, description, url }) => {
                    return(
                        <SwiperSlide className='testimonial__card' key={id}>
                            <img src={image} alt="" className='testimonial__img'/>
                            <h3 className='testimonial__name'>{title}</h3>
                            <p className='testimonial__description'>{description}</p>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
}

export default Projects;