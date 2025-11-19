import React from "react";

const Services = () => {
  return (
    <>
      <div className="bg-gray-50 text-black">
        <div className="main-container pb-8 lg:pb-12">
          <h3>Services I offer</h3>
        </div>
      </div>
      <div className="relative">
        <div className="bg-black text-white pt-16 lg:pt-20 pb-[35rem] lg:pb-[40rem] sticky top-5">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* left section */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                01
              </span>
              <h2 className="text-[6vw] md:text-6xl font-heading font-bold leading-[1]">
                Web Design & <br /> Development
              </h2>
            </div>
            {/* right section */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                I turn ideas into stunning digital experiences — websites that
                feel alive. From pixel-perfect UI to smooth animations and solid
                backend architecture, I build products that make people stop and
                notice.
              </p>
            </div>
          </div>
        </div>
        {/* second service */}
        <div className="bg-gray-500 text-black pt-16 lg:pt-20 pb-[5rem] lg:pb-[23rem] sticky top-3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* left section */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-900 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                02
              </span>
              <h2 className="text-[6vw] md:text-6xl font-heading font-bold leading-[1]">
                Mobile Application <br /> Development
              </h2>
            </div>
            {/* right section */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                I craft modern, cross-platform mobile experiences with Flutter —
                combining sleek UI, fluid animations, and solid functionality.
                From concept to launch, I build apps that not only perform well
                but also feel premium and intuitive on every device.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
