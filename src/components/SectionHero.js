import React from 'react';
import _ from 'lodash';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { markdownify } from '../utils';
import ActionLink from './ActionLink';

export default class SectionHero extends React.Component {
  render() {
    let section = _.get(this.props, 'section');
    return (
      <section id={_.get(section, 'section_id')} className="block hero-block bg-accent outer">
        <div className="inner">
          <div className="grid">
            <Carousel className='cell block-preview' showArrows={true} autoPlay={true} >
              <div >
                <img src="https://i.imgur.com/m1ERFaY.jpg?1" alt="Rv" />

              </div>
              <div >
                <img src="https://i.imgur.com/lsqXBa6b.png?2" alt="RV" />

              </div>
              <div >
                <img src="https://i.imgur.com/ALd0L31.jpg?3" alt="RV" />

              </div>
              <div >
                <img src="https://i.imgur.com/FFqgQi8b.jpg?2" alt="RV" />

              </div>
              <div >
                <img src="https://i.imgur.com/FFqgQi8b.jpg?2" alt="RV" />

              </div>
            </Carousel>
            <div className="cell block-content">
              {_.get(section, 'title') &&
                <h2 className="block-title underline">{_.get(section, 'title')}</h2>
              }
              <div className="block-copy">
                {markdownify(_.get(section, 'content'))}
              </div>
              {_.get(section, 'actions') &&
                <p className="block-buttons">
                  {_.map(_.get(section, 'actions'), (action, action_idx) => (
                    <ActionLink key={action_idx} {...this.props} action={action} class_names={'button white large'} />
                  ))}
                </p>
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}
