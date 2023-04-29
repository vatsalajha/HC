'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const PageCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    {/* <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    /> */}
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[31px] flex flex-col max-w-[125px]">
        <h4 className="font-normal lg:text-[60px] text-[30px] text-white">
          {title}
        </h4>
        <p className="mt-[6px] font-normal lg:text-[25px] text-[25px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div
        className="lg:flex hidden items-center justify-center w-[25px] h-[25px] rounded-full bg-transparent border-[1px] border-white"
      >
        {/* <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        /> */}
      </div>
    </div>
  </motion.div>
);

export default PageCard;
