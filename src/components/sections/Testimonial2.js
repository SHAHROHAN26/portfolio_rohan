import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial2 = ({
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
    title: 'Articles',
    paragraph: 'Here are some Articles written by me during my intership in Digital Tesseract and publish on DT\'s portal'
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
            <a href="https://digitaltesseract.com/2020/05/13/keras-vs-tensorflow/">
            <Image
              src={require('./../../assets/images/keras.jpg')}
              //alt="Features split 03"
              width={500}
              height={200}
               />
               </a>


            </div>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
            <a href="https://digitaltesseract.com/2020/06/02/latent-semantic-analysis-for-text-categorization/">
            <Image
              src={require('./../../assets/images/LSA.jpg')}
              //alt="Features split 03"
              width={500}
              height={200}

               /></a>
            </div>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
            <a href="https://digitaltesseract.com/2020/06/27/django-for-beginners/">
            <Image
              src={require('./../../assets/images/Django.jpg')}
              //alt="Features split 03"
              width={500}
              height={200}

               /></a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial2.propTypes = propTypes;
Testimonial2.defaultProps = defaultProps;

export default Testimonial2;
