import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ url }) => (
    <div>
        <img src={url} width="200" alt="" />
    </div>
);

export default Image;

Image.propTypes = {
    url: PropTypes.string.isRequired,
};
