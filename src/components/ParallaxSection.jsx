import { ParallaxBanner } from 'react-scroll-parallax';

function ParallaxSection() {
  const background = {
    image: '/img/images/grande-mainview-2-scaled-1.jpeg',
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [0, 30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className='absolute inset-0 flex items-center justify-center'>
        <h1 className='text-6xl md:text-8xl text-white font-thin'>
          Grande International Hospital
        </h1>
      </div>
    ),
  };

  const gradientOverlay = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900' />
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, headline, gradientOverlay]}
      className='hidden aspect-[2/1] bg-gray-900 lg:block'
    />
  );
}
export default ParallaxSection;
