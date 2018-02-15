import React from 'react';
import PropTypes from 'prop-types';

import { Slider, InputNumber, Row, Col } from 'antd';

require('style-loader!css-loader!antd/es/style/index.css');
require('style-loader!css-loader!antd/es/input/style/index.css');
require('style-loader!css-loader!antd/es/grid/style/index.css');
require('style-loader!css-loader!antd/es/slider/style/index.css');

class DistanceFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { inputValue: this.props.distance };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({
      inputValue: value,
    });

    const { changeHandler } = this.props;
    changeHandler(value);
  }

  render() {
    return (
      <Row className="distance-slider">
        <p>Filter by distance</p>
        <Col span={16}>
          <Slider min={100} max={90000} onChange={this.onChange} value={this.state.inputValue} />
        </Col>
        <Col span={8}>
          <InputNumber
            min={100}
            max={90000}
            maxlength={5}
            length={5}
            step={1}
            value={this.state.inputValue}
            onChange={this.onChange}
            formatter={value => `${value} miles`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
          />
        </Col>
      </Row>
    );
  }
}

DistanceFilter.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  distance: PropTypes.number.isRequired,
};

export default DistanceFilter;
