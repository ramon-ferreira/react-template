import renderer from 'react-test-renderer';
import Card from './index.jsx';

test('Component render', () => {
  const component = renderer.create(
    <Card></Card>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

/** Unit test example */
