import React, { PureComponent, Fragment } from 'react';

class LabeledIcon extends PureComponent {
  static fontIconStyle = {
    fontFamily: 'Triptease Icons'
  };

  static fontIconStyleWithBackground = {
    fontFamily: 'Triptease Icons',
    color: '#ffffff',
    backgroundColor: '#bb3691'
  };

  render() {
    const { ligatures } = this.props;
    return (
      <Fragment>
        <div style={LabeledIcon.fontIconStyle}>{ligatures[0]}</div>
        <div style={LabeledIcon.fontIconStyleWithBackground}>
          {ligatures[0]}
        </div>
        <div>{ligatures.join(', ')}</div>
      </Fragment>
    );
  }
}

export default LabeledIcon;
