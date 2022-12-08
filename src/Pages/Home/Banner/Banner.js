import React from 'react';
import BannerImg from '../../../assets/img/banner.jpg';

const Banner = () => {
    return (
        <div>
             <div className="relative px-4 pt-6 mx-auto lg:py-24 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Hi, I'm 
              <span className="inline-block text-deep-purple-accent-400 pl-2 text-blue-600">
                Zahid Hasan
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              I am a professional Web Developer.
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
        <img
          src={BannerImg}
          alt=""
        />
      </div>
    </div>
        </div>
    );
};

export default Banner;