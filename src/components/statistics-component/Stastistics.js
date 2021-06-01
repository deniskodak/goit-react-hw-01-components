import React from 'react';
import PropTypes from 'prop-types';
import StatsList from './Stats-list';

const Statistics = ({ title, stats }) => (
    <section className="statistics">
        
        {title && <h2 class="title">{title}</h2>}
        <StatsList stats = {stats} />

    </section>
);

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }
    )).isRequired,
};

export default Statistics;