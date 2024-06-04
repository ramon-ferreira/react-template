import { PropTypes } from 'prop-types';

import * as style from './style.scss';
import reactIconUrl from '@assets/reactjs-icon.svg';

function Spinner ({ alt = 'ReactJS Spinner' }) {
  return (<img className={style.image} src={reactIconUrl} alt={alt}/>);
}

Spinner.propTypes = {
  alt: PropTypes.string
};

export default Spinner;
