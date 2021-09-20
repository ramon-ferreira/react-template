import renderer from 'react-test-renderer';
import Spinner from './index.jsx';

test('Component render', () => {
  const component = renderer.create(
    <Spinner></Spinner>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

/** Unit test example */
