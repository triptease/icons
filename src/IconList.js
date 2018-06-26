import React, { PureComponent } from 'react';

import availableIcons from './svgs/index';
import LabeledIcon from './LabeledIcon';

class IconList extends PureComponent {
  static defaultProps = {
    icons: availableIcons
  };

  static style = {
    display: 'grid',
    gridTemplateColumns:
      '[col-start] 0.15fr [col-start] 0.15fr [col-start] 0.15fr [col-start] 0.55fr',
    gridGap: '10px',
    alignItems: 'center',
    textAlign: 'center'
  };

  render() {
    const { icons } = this.props;
    return (
      <div style={IconList.style}>
        {icons.map((ligatures, key) => (
          <LabeledIcon ligatures={ligatures} key={key} />
        ))}
      </div>
    );
  }
}

export default IconList;
