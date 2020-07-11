import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  /*const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }*/

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
          <Image
            src={require('./../../assets/images/rohan_2.jpg')}
            //alt="Features split 03"
            width={200}
            height={200}
             style={{borderRadius: 200/ 2}}
             />
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              I'm <span className="text-color-primary">Rohan Shah</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Welcome to Rohan's world, I'm AI & ML enthusiast and also done some work regarding ML and web development you can find here.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>

                  <Button tag="a" color="dark" wideMobile href="https://www.linkedin.com/in/rohan-shah-98a80a168/">
                    LinkedIn Profile
                    </Button>
                    <Button tag="a" color="dark" wideMobile href="https://github.com/SHAHROHAN26">
                      Github Repo
                      </Button>
                      <Button tag="a" color="dark" wideMobile href="https://www.hackerrank.com/rjs971126">
                        HackerRank
                        </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
