import React, { PureComponent, Fragment } from 'react';

class LabeledIcon extends PureComponent {
  static fontIconStyle = {
    fontFamily: 'Triptease Icons'
  };

  render() {
    const { name } = this.props;
    return (
      <Fragment>
        <div style={LabeledIcon.fontIconStyle}>{name}</div>
        <div>{name}</div>
      </Fragment>
    );
  }
}

export default LabeledIcon;
