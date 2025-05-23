import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const GridMotion = ({ items = [], gradientColor = "black" }) => {
  const gridRef = useRef(null);
  const rowRefs = useRef([]); // Array of refs for each row

  // Ensure the grid has 28 items (4 rows x 7 columns) by default
  const totalItems = 14;
  const defaultItems = Array.from(
    { length: totalItems },
    (_, index) => `Item ${index + 1}`
  );

  const combinedItems =
    items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    // Values for automatic animation
    const maxMoveAmount = 300;
    const animationDuration = 8; // Duration for one complete cycle in seconds

    // Create loop animations for each row
    rowRefs.current.forEach((row, index) => {
      if (row) {
        const direction = index % 2 === 0 ? 1 : -1; // Alternate direction for each row
        const staggerDelay = index * 0.5; // Stagger the start time of each row

        // Create a timeline for continuous looping
        const tl = gsap.timeline({ repeat: -1 });

        // First animation - move in one direction
        tl.to(row, {
          x: maxMoveAmount * direction,
          duration: animationDuration / 2,
          ease: "sine.inOut",
          delay: staggerDelay,
        });

        // Second animation - move back
        tl.to(row, {
          x: -maxMoveAmount * direction,
          duration: animationDuration,
          ease: "sine.inOut",
        });

        // Third animation - return to start position
        tl.to(row, {
          x: 0,
          duration: animationDuration / 2,
          ease: "sine.inOut",
        });
      }
    });

    // Cleanup
    return () => {
      rowRefs.current.forEach((row) => {
        if (row) {
          gsap.killTweensOf(row);
        }
      });
    };
  }, []);

  return (
    <div ref={gridRef} className="h-full w-full overflow-hidden">
      <section
        className="w-full h-screen overflow-hidden relative flex items-center justify-center"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        {/* Noise overlay */}
        <div className="absolute inset-0 pointer-events-none z-[4] bg-[url('../../../assets/noise.png')] bg-[length:250px]"></div>
        <div className="gap-4 flex-none relative w-[150vw] h-[150vh] grid grid-rows-4 grid-cols-1 rotate-[-15deg] origin-center z-[2]">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid gap-4 grid-cols-7"
              style={{ willChange: "transform, filter" }}
              ref={(el) => (rowRefs.current[rowIndex] = el)}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];
                return (
                  <div key={itemIndex} className="relative">
                    <div className="relative w-full h-full overflow-hidden rounded-[10px] bg-[#111] flex items-center justify-center text-white text-[1.5rem]">
                      {typeof content === "string" &&
                      content.startsWith("http") ? (
                        <div
                          className="w-full h-full bg-cover bg-center absolute top-0 left-0"
                          style={{ backgroundImage: `url(${content})` }}
                        ></div>
                      ) : (
                        <div className="p-4 text-center z-[1]">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="relative w-full h-full top-0 left-0 pointer-events-none"></div>
      </section>
    </div>
  );
};

export default GridMotion;
