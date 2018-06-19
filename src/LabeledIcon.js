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
    const { name } = this.props;
    return (
      <Fragment>
        <div style={LabeledIcon.fontIconStyle}>{name}</div>
        <div style={LabeledIcon.fontIconStyleWithBackground}>{name}</div>
        <div>{name}</div>
      </Fragment>
    );
  }
}

export default LabeledIcon;
