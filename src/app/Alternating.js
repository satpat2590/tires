import './globals.css'
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Alternating = () => {
    const imageData = [
      { src: 'joetireworkout.jpg', caption: 'Joe is lifting a tire to support his pops.' },
      { src: 'joetireworkout.jpg', caption: 'This is Joe`s second set. He is becoming stronger everyday.' },
      { src: 'joetireworkout.jpg', caption: 'If he keeps this up, he will deadlift the world one day.' },
      { src: 'joetireworkout.jpg', caption: 'Joe`s worst enemy is a hernia.' },
    ];

    function useScrollFadeIn() {
      const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.01,
        rootMargin: '0px 0px -100px 0px'
      });
    
      return [ref, inView];
    }
    


    const fadeIn = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    };

    const fadeInTransition = {
      duration: 1, // set the desired duration, in this case, it's set to 2 seconds
      ease: "easeOut"
    };
    


    return (
      <div className="container mx-auto py-8">
        {imageData.map((item, index) => {
          const [ref, inView] = useScrollFadeIn();

          return (
            <div key={index} className="flex flex-wrap mb-12">
              <div className={index % 2 === 0 ? 'w-1/2 order-1' : 'w-1/2 order-2'}>
                <img src={item.src} alt={item.caption} className="object-cover h-full w-full" />
              </div>
              <div ref={ref} className={index % 2 === 0 ? 'w-1/2 order-2 translate-y-[50%] translate-x-[30%]' : 'w-1/2 order-1 translate-y-[50%] translate-x-[30%]'}>
                {/* <div className="float-in-caption"> */}
                <motion.div 
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  variants={fadeIn}
                  transition={fadeInTransition}
                >
                  <p>{item.caption}</p>
                </motion.div>
                {/* </div> */}
              </div>
            </div>
          );
        })}
      </div>
    );
};

export default Alternating;