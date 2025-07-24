import PropTypes from 'prop-types';

export function PortfolioApp({ title }) {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

PortfolioApp.propTypes = {
  title: PropTypes.string.isRequired
};