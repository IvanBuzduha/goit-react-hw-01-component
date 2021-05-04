import React from "react";
import PropTypes from "prop-types";
import { StatisticsContainer } from './StatisticsStyled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      <h2 className="title">{title}</h2>

      <ul className="stat_list">
        {stats.map((stat) => (
          <li className="item" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default Statistics;
