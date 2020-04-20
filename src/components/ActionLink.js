import React from 'react';
import _ from 'lodash';

import { Link, safePrefix } from '../utils';

export default class ActionLink extends React.Component {
    render() {
        let action = _.get(this.props, 'action');
        let class_names = _.get(this.props, 'class_names');
        return (
            <a href="tel:3522106752">
                <Link
                    className={class_names}>{_.get(action, 'label')}</Link></a>
        );
    }
}
