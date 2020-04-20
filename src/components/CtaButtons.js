import React from 'react';
import _ from 'lodash';

import { Link, safePrefix, classNames } from '../utils';

export default class CtaButtons extends React.Component {
  render() {
    let actions = _.get(this.props, 'actions');
    return (
      <a href="tel:3522106752">
        <p className="block-buttons">
          {_.map(actions, (action, action_idx) => (
            <Link key={action_idx}
              className={classNames('button', { 'secondary': _.get(action, 'primary') !== true })}>{_.get(action, 'label')}</Link>
          ))}
        </p></a>
    );
  }
}
