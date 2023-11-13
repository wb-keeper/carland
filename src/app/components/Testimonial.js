"use client";
import TestimonialSlider from "@/app/components/TestimonialSlider";

function Testimonial(props) {
  return (
    <section className="section flex items-center bg-green-50" id="testimonial">
      <div className="container mx-auto">
        <TestimonialSlider />
      </div>
    </section>
  );
}

export default Testimonial;
