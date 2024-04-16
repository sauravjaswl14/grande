import TestimonialCard from './TestimonialCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TestimonialList = ({ records }) => {
  const responsive = {
    // Define breakpoints and items to show at each breakpoint
    // Adjust these values based on your design and preferences
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  return (
    <div className='testimonials p-20 w-full bg-slate-100'>
      {/* Carousel title */}
      <div className='flex flex-col space-y-5 items-center'>
        <div className='w-44 py-2 px-5 bg-white rounded-full font-semibold flex justify-center text-[#238751] shadow-xl items-center'>
          Testimonials
        </div>
        <h2 className='text-2xl sm:text-3xl font-medium text-center pb-2 '>
          What our patients say about us
        </h2>
      </div>
      <div className='max-w-[1366px] mx-auto px- sm:px-6 text-center mt-10'>
        {/* Carousel component */}
        {/* The word itself says what each prop means, play with the values */}
        <Carousel
          ssr={true}
          className='z-[1]'
          centerMode={true}
          keyBoardControl={true}
          infinite={true}
          draggable={false}
          responsive={responsive}
          swipeable={false}
        >
          {/* Mapping over records to render TestimonCard components */}
          {records.map((record, index) => (
            <TestimonialCard
              key={index}
              title={record.title}
              image={record.image}
              description={record.description}
              name={record.name}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialList;
