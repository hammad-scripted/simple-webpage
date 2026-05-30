import React from 'react';

const page = () => {
  return (
    <div>
      <section className="text-gray-400 bg-site-dark body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="/images/img1.jpg"
                />

                <p className="leading-relaxed">
                  "Aurora Studio transformed our homepage — the site feels faster
                  and our users engage more. The team was thoughtful and fast."
                </p>

                <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4"></span>

                <h2 className="text-white font-medium title-font tracking-wider text-sm">
                  HOLDEN CAULFIELD
                </h2>

                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>

            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="/images/img2.jpg"
                />

                <p className="leading-relaxed">
                  "Great collaboration — Aurora helped us define our priorities
                  and shipped a beautiful responsive experience."
                </p>

                <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4"></span>

                <h2 className="text-white font-medium title-font tracking-wider text-sm">
                  ALPER KAMU
                </h2>

                <p className="text-gray-500">UI Developer</p>
              </div>
            </div>

            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="/images/img3.jpg"
                />

                <p className="leading-relaxed">
                  "Fast, pragmatic, and design-forward. Couldn't recommend them
                  enough."
                </p>

                <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4"></span>

                <h2 className="text-white font-medium title-font tracking-wider text-sm">
                  HENRY LETHAM
                </h2>

                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
