import React from "react";

const Testimonial = () => {
  return (
    <div className="relative z-2 py-24 md:py-28 lg:py-40">
      <div className="container block lg:flex">
        <div className="testimonial_head-res relative z-2 mr-30 flex-300 ">
          <p className="caption mb-5 max-md:mb-2.5">Wall Of Love</p>
          <h3 className="h3 max-md:h5 text-p4">Words of our Fans</h3>
        </div>
        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          <div className="testimonials_group-after flex-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
