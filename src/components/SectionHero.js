import React from 'react';
import _ from 'lodash';
import Carousel from 'nuka-carousel';

import { markdownify } from '../utils';
import ActionLink from './ActionLink';

export default class SectionHero extends React.Component {
  render() {
    let section = _.get(this.props, 'section');
    return (
      <section id={_.get(section, 'section_id')} className="block hero-block bg-accent outer">
        <div className="inner">
          <div className="grid">
            <Carousel
              autoplay={true} width={'80vh'} height={'30em'} wrapAround={true} speed={200} dragging={true}>
              <img src="https://i.imgur.com/g1XMc2m.jpg" alt="Rv" />
              <img src="https://i.imgur.com/XOOZoP8.jpg" alt="RV" />
              <img src="https://i.imgur.com/7xGmLmi.jpg" alt="RV" />
              <img src="https://i.imgur.com/FFqgQi8.jpg" alt="RV" />
              <img src="https://i.imgur.com/FlN9PeD.jpg" alt="Rv" />
              <img src="https://i.imgur.com/2zS9eMn.jpg" alt="Rv" />
              <img src="https://i.imgur.com/uHxwTOe.jpg" alt="RV" />
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
