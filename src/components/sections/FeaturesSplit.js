import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import VideoPlayer from 'react-video-js-player';
import Att from '../../assets/video/att.mp4';
import Fm from '../../assets/video/fm.mp4';
import Yolo from '../../assets/video/yolo.mp4';
import Hpc from '../../assets/video/hpc.mp4';
import Yf from '../../assets/video/yolo_face.mp4';



const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}


const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Projects ',
    paragraph: 'Here i put my all machine learning projects, as well as web development peojects and some mini projects based on data analysis'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Machine learning project
                  </div>
                <h3 className="mt-0 mb-12">
                  Attendance system with face recognition
                  </h3>
                <p className="m-0">
                To do mark attendance of students and employ in any company easily this system use. By the use of surveillance camera this detect person from their face and mark attendance in sheet and after that admin can easily see attendance of all the employ in company or students in school.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <VideoPlayer
                  src={Att}

                  width={528}
                  height={300}
                  />
                  </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  ML & web development project
                  </div>
                <h3 className="mt-0 mb-12">
                   Face mask detection system
                  </h3>
                <p className="m-0">
                During COVID-19 timing face mask is necessary for all people at every public place . by this system we can detect any person with or without mask which helps volunteer to manage peoples on public place.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <VideoPlayer
                  src={Fm}

                  width={528}
                  height={300}
                  />

              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Machine learning project
                  </div>
                <h3 className="mt-0 mb-12">
                  Face Detection & Counter
                  </h3>
                <p className="m-0">
                This project helps in surveillance system, as this will detect each & every person by the face even if that person are very far from camera.In demo video you can see that person in background also detected.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <VideoPlayer
                  src={Yf}
                  
                  width={528}
                  height={300}
                  />
                  </div>
            </div>


            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  web development with Django
                  </div>
                <h3 className="mt-0 mb-12">
                  HPC Job Submission system
                  </h3>
                <p className="m-0">
                This project is use for job submission on HPC from web portal without knowledge of Linux , shell scr-ipting and other terminology . This is very useful for the scientist other then computer branch who wants to submit job on HPC.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <VideoPlayer
                  src={Hpc}
                  width={528}
                  height={300}
                  />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Machine learning project
                  </div>
                <h3 className="mt-0 mb-12">
                   Object detection with YOLO
                  </h3>
                <p className="m-0">
                In this Project, I build system with the help of YOLO algo. which can efficiently detect all object from given image of video fream using bounding box and weights define for that object in YOLO algo.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">

                <VideoPlayer
                  src={Yolo}
                  width={528}
                  height={300}
                  /></div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
