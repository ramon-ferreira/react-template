import Card from '@components/Card';

import * as style from './style.scss';

function ErrorPage () {
  return (
    <div className={style.mainContainer}>
      <Card>
        Sorry, page not found.
      </Card>
    </div>
  );
}

export default ErrorPage;
