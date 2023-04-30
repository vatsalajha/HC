'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const Analytics = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| Analytics" textStyles="text-left" />
      <TitleText
        title={(
          <>How much corruption we reduced ?
          </>
        )}
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-left text-secondary-white"
      >
        <span className="font-extrabold text-white">Tax Collection</span>
      </motion.p>
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-left text-secondary-white"
      >
        <span className="font-extrabold text-white">Tax Usage</span>
      </motion.p>
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-left text-secondary-white"
      >
        <span className="font-extrabold text-white">
          Percentage of tax that's usage is tracked
        </span>
      </motion.p>
    </motion.div>
  </section>
);

export default Analytics;
