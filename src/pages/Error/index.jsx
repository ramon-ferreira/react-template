import Card from '@components/Card';

import style from './style.scss';

function ErrorPage (props) {
  return (
    <div className={style.mainContainer}>
      <Card>
        Sorry, page not found.
      </Card>
    </div>
  );
}

export default ErrorPage;
