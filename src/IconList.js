import React, { PureComponent } from 'react';

import availableIcons from './availableIcons';
import LabeledIcon from './LabeledIcon';

class IconList extends PureComponent {
  static defaultProps = {
    icons: availableIcons
  };

  static style = {
    display: 'grid',
    gridTemplateColumns: '[col-start] 0.3fr [col-start] 0.7fr',
    gridGap: '10px',
    textAlign: 'center'
  };

  render() {
    const { icons } = this.props;
    return (
      <div style={IconList.style}>
        {icons.map((name, key) => <LabeledIcon name={name} key={key} />)}
      </div>
    );
  }
}

export default IconList;
