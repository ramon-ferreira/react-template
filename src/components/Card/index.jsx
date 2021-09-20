import { PropTypes } from 'prop-types';

import style from './style.scss';

function Card ({ border = true, children }) {
  const classes = [style.card];

  border && classes.push(style.border);

  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  );
}

Card.propTypes = {
  border: PropTypes.bool,
  children: PropTypes.node
};

export default Card;
