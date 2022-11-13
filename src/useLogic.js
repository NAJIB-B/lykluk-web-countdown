// import { useRef, useState, useEffect } from "react";

// const useLogic = () => {
//   const [isVisible, setIsVisible,] = useState(false);
//   const viewRef = useRef(null);
  
//   const options = {
//     root: null,
//     rootMargin: "-100px",
//     threshold: 0.25
//   }

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries)=>{
//         const entry = entries[0]
//         setIsVisible(entry.isIntersecting)
//     }, options);
//     observer.observe(viewRef.current)
//   }, [])

//   return {viewRef, isVisible}
// };

// export default useLogic