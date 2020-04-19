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
              autoplay={true} width={'25em'} height={'30em'} wrapAround={true} speed={200} dragging={true}>
              <img src="https://photos.app.goo.gl/WdscECBHbE767zJF6" alt="Rv" />
              <img src="https://photos.app.goo.gl/qa8EncWjEiGGd4scA" alt="RV" />
              <img src="https://photos.app.goo.gl/hfbteqQsJ8AoSaUY8" alt="RV" />
              <img src="https://photos.app.goo.gl/ch5XjWsuNwUmEHWs7" alt="RV" />
              <img src="https://photos.app.goo.gl/ezgGjoxeRyMmrMk88" alt="Rv" />
              <img src="https://photos.app.goo.gl/JiNzK3BwRdmfz87r5" alt="Rv" />
              <img src="https://photos.app.goo.gl/CNvi3CeHaJ2qJFHj9" alt="RV" />
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
