import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Mini Projects',
    paragraph: 'This projects are done for learning purpose and references for this projects are taken from Github and some changes done by me for R&D purpose  .'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
            <div className="tiles-item-inner">

                <span className="testimonial-item-name text-color-high">Handwritten digit recognition</span>

                <div className="testimonial-item-header text-xs mt-32 mb-0 has-top-divider">

              </div>
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    —In this mini project, I use MNIST dataset to built model with Keras having tensorflow in backend. And after building model I use 28*28 pixel image of handwritten digit to identify that from 0 to 9.
                      </p>
                </div>

              </div>
            </div>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
            <div className="tiles-item-inner">

                <span className="testimonial-item-name text-color-high"> Movie Recommendation system</span>

                <div className="testimonial-item-header text-xs mt-32 mb-0 has-top-divider">

              </div>
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    —In this mini project IMDB dataset used for ratings of movie and based in that project can recommend the movie to any person based on their choice. In this project I used numpy , pandas and matplotlib library.
                      </p>
                </div>

              </div>
            </div>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
            <div className="tiles-item-inner">

                <span className="testimonial-item-name text-color-high"> Color detection from image</span>

                <div className="testimonial-item-header text-xs mt-32 mb-0 has-top-divider">

              </div>
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    —In this mini project dataset of RGB color code used to match color from image with that RGB code and give perfect color name to user. Here I used KNN machine learning algorithm to find accurate color from image.
                      </p>
                </div>

              </div>
            </div>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
            <div className="tiles-item-inner">

                <span className="testimonial-item-name text-color-high">  Age & Gender detection from image</span>

                <div className="testimonial-item-header text-xs mt-32 mb-0 has-top-divider">

              </div>
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    —In this mini project dataset of facial expression with age range and gender used. Machine learning algorithm matches input face image with this dataset and get best accurate result of Gender and Age range.
                      </p>
                </div>

              </div>
            </div>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
            <div className="tiles-item-inner">

                <span className="testimonial-item-name text-color-high">  Boston house price prediction</span>

                <div className="testimonial-item-header text-xs mt-32 mb-0 has-top-divider">

              </div>
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    —In this mini project , I use Boston house price dataset and just built Convolution neural network with 5 hidden layer and ‘relu’ activation function for better accuracy.
                      </p>
                </div>

              </div>
            </div>
            


          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
