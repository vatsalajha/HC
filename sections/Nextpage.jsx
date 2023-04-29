'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { tabless } from '../constants';
import { staggerContainer } from '../utils/motion';
import { PageCard, TitleText, TypingText } from '../components';

const Nextpage = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Project Details" textStyles="text-left" />
      <TitleText title={<>Semiconductor Plant.</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-wrap">
        {tabless.map((item, index) => (
          <PageCard key={`tabless-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Nextpage;
