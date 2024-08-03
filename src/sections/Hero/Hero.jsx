import React, { useState, useEffect } from 'react'
import styles from "./HeroStyles.module.css";
import heroImg0 from "../../assets/G0.jpg";
import heroImg1 from "../../assets/G1.jpg";
import heroImg2 from "../../assets/G2.jpg";
import heroImg3 from "../../assets/G3.jpg";
import heroImg4 from "../../assets/G4.jpg";
import heroImg5 from "../../assets/G5.jpg";
import heroImg6 from "../../assets/G6.jpg";
import heroImg7 from "../../assets/G7.jpg";
import heroImg8 from "../../assets/G8.jpg";
import heroImg9 from "../../assets/G9.jpg";
import heroImg10 from "../../assets/G10.jpg";
import heroImg11 from "../../assets/G11.jpg";
import heroImg12 from "../../assets/G12.jpg";
import heroImg13 from "../../assets/G13.jpg";
import heroImg14 from "../../assets/G14.jpg";


import sun from "../../assets/sun.svg";
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import leetcodeLight from '../../assets/leetcode-light.png';
import leetcodeDark from '../../assets/leetcode-dark.png';
import CV from "../../assets/cv.pdf";
import {useTheme} from "../../common/ThemeContext";

function Hero() { 
  const profileImages = [heroImg0,heroImg1,heroImg2,heroImg3,heroImg4,heroImg5,heroImg6,heroImg7,heroImg8,heroImg9,heroImg10,heroImg11,heroImg12,heroImg13,heroImg14];
  const {theme, toggleTheme} = useTheme();
  const [imageIndex, setImageIndex] = useState(0);
  const themeIcon = theme === 'light' ? sun : moon;
  const leetcodeIcon = theme === 'light' ? leetcodeLight : leetcodeDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  useEffect(() => {
    const handleScroll = () => {
      setImageIndex((prevIndex) => (prevIndex + 1) % profileImages.length);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={profileImages[imageIndex]} alt="Gourav's Avatar" />
        <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme} />
      </div>
      <div className={styles.info}>
      <h1>
        Gourav Singh <br/>  Chauhan 
      </h1>
      <h2>Frontend Developer</h2>
      <span>
        <a href="https://www.linkedin.com/in/gourav-singh-chauhan-87671a21a/" target="_blank" rel="noreferrer">
        <img src={linkedinIcon} alt="linkedin icon"/></a>
        <a href="https://leetcode.com/gouravsinghc2003/" target="_blank" rel="noreferrer">
          <img src={leetcodeIcon} alt="Leetcode icon" />
        </a>
        <a href="https://github.com/infinity-boi" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="Github icon" />
        </a>
      </span>
      <p>
        With an aim to bring my creativity on real grounds.
      </p>
      <a href={CV} target='_blank' download rel="noreferrer">
        <button className="hover"> Resume </button>
      </a>
      </div>
    </section>
  );
}

export default Hero;