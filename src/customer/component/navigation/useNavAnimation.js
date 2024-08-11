// import { useEffect } from 'react';
// import { gsap } from 'gsap';

// const useNavAnimation = (activeCategory, setActiveCategory) => {
//   useEffect(() => {
//     const navBottom = document.querySelector('.nav-bottom');
//     const navItems = document.querySelectorAll('.nav-part2 h5');
    
//     if (activeCategory) {
//       gsap.to(navBottom, {
//         height: '25vh',
//         duration: 0.3,
//       });
//       gsap.to(navItems, {
//         opacity: 1,
//         visibility: 'visible',
//         y: 0,
//         duration: 0.3,
//         stagger: {
//           amount: 0.6,
//         },
//       });
//     } else {
//       gsap.to(navBottom, {
//         height: '0vh',
//         duration: 0.3,
//       });
//       gsap.to(navItems, {
//         opacity: 0,
//         visibility: 'hidden',
//         y: 25,
//         duration: 0.3,
//       });
//     }
//   }, [activeCategory]);

//   return {
//     toggleCategory: (category) => {
//       if (category === activeCategory) {
//         setActiveCategory(null);
//       } else {
//         setActiveCategory(category);
//       }
//     }
//   };
// };

// export default useNavAnimation;
