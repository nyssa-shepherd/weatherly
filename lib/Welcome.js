import React from 'react';
import PropTypes from 'prop-types';
import ChangeCity from './ChangeCity.js'
import { Trie } from '@rvwatch/completeMe';
import { cities } from './cities.js';
import './Welcome.css';

export default function Welcome(props) {
  return (
    <div className="Welcome-Banner">
      <h1>You must be in a basement somewhere...</h1>
      <ChangeCity fetch={props.fetch} local={props.local} />
    </div>
  );
}

Error.propTypes = {
  fetch: PropTypes.string,
  local: PropTypes.string
};