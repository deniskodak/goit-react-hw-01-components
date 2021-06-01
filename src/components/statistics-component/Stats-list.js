import React from 'react';

const StatsList = ({ stats } ) => (
    <ul className="stat-list">
        
        {stats.map(({id, label, percentage}) => (
        <li key={id} class="item">
            <span class="label">{label}</span>
            <span class="percentage">{percentage}%</span>
        </li>
        ))}
        
        </ul>
)

export default StatsList;