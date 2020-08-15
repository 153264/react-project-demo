import React from 'react';
import renderer from 'react-test-renderer';

import App from '../src/app';

it('shoulf render a div which id equals test', () => {
  const component = renderer.create(
    <App id="test" />
  );

  let tree = component.toJSON();

  expect(tree.props.id).toBe('test');
});
