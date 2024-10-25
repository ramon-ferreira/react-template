import Card from '@components/Card';
import Spinner from '@components/Spinner';

import * as style from './style.scss';

function MainPage (props) {
  return (
    <div className={style.mainContainer}>
      <Card>
        <Spinner/>
        <p> React template</p>
      </Card>
    </div>
  );
}

export default MainPage;
