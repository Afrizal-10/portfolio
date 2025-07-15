import React from "react";
import ScrollVelocity from "./ScrollVelocity/ScrollVelocity";

function VelocityAnimation() {
  return (
    <section id="about" className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto ">
        <ScrollVelocity
          texts={["FrontEnd Developer", "Afrizal"]}
          velocity={100}
          className="custom-scroll-text mt-6"
        />
      </div>
    </section>
  );
}

export default VelocityAnimation;
