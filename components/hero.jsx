import React from 'react';

const Hero = () => {
  return (
    <div>
      <section className="text-gray-300 bg-site-dark body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">
              Aurora Studio — Crafting beautiful web experiences
            </h1>

            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Aurora Studio designs fast, accessible websites that delight users.
              We combine thoughtful design, performance, and modern tooling to
              build products people love to use.
            </p>
          </div>

          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="ocean"
                  className="w-full object-cover h-full object-center block"
                  src="/images/img1.jpg"
                />
              </div>

              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="mountain"
                  className="w-full object-cover h-full object-center block"
                  src="/images/img2.jpg"
                />
              </div>

              <div className="md:p-2 p-1 w-full">
                <img
                  alt="city"
                  className="w-full h-full object-cover object-center block"
                  src="/images/img3.jpg"
                />
              </div>
            </div>

            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="working desk"
                  className="w-full h-full object-cover object-center block"
                  src="/images/img4.jpg"
                />
              </div>

              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="forest"
                  className="w-full object-cover h-full object-center block"
                  src="/images/img5.jpg"
                />
              </div>

              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="developer laptop"
                  className="w-full object-cover h-full object-center block"
                  src="/images/img6.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
