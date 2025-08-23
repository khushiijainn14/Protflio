"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Timeline = ({ data = [], title }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Dynamically recalc height on load + resize
  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.getBoundingClientRect().height);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 60%"], // slightly smoother progress
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      {/* Section heading */}
      {title && <h2 className="text-heading mb-12">{title}</h2>}

      <div ref={ref} className="relative pb-20">
        {data.length === 0 ? (
          <p className="text-neutral-500">No timeline data available.</p>
        ) : (
          data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              {/* Left sticky part */}
              <div className="sticky top-40 z-40 flex flex-col items-center self-start max-w-xs md:flex-row lg:max-w-sm md:w-full">
                {/* Dot */}
                <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                  <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
                </div>

                {/* Date + Title + Job */}
                <div className="hidden md:flex flex-col gap-2 text-xl font-bold md:pl-20 md:text-4xl text-neutral-300">
                  <h3>{item.date}</h3>
                  <h3 className="text-3xl text-neutral-400">{item.title}</h3>
                  {item.job && (
                    <h3 className="text-2xl text-neutral-500">{item.job}</h3>
                  )}
                </div>
              </div>

              {/* Right content */}
              <div className="relative w-full pl-20 pr-4 md:pl-4">
                {/* For mobile view */}
                <div className="block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden">
                  <h3>{item.date}</h3>
                  <h3 className="text-neutral-400">{item.title}</h3>
                  {item.job && <h3 className="text-neutral-500">{item.job}</h3>}
                </div>

                {item.contents?.map((content, idx) => (
                  <p className="mb-3 font-normal text-neutral-400" key={idx}>
                    {content}
                  </p>
                ))}
              </div>
            </div>
          ))
        )}

        {/* Timeline vertical line */}
        <div
          style={{ height: `${height}px` }}
          className="absolute top-0 left-1 md:left-1 w-[2px] bg-gradient-to-b from-transparent via-neutral-700 to-transparent"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute top-0 inset-x-0 w-[2px] bg-gradient-to-b from-purple-500 via-purple-400/60 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
