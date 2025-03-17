export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1025 }, // Prevents overlap with tablet
    items: 4,
    slidesToSlide: 4 // Moves 4 items at a time
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2, // Show 2 instead of 4 for better UI
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 767, min: 0 }, // 0 instead of 464 to cover all small screens
    items: 1, // Show only 1 item for better UX
    slidesToSlide: 1
  }
};
