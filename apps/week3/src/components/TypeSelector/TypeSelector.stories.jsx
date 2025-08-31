import TypeSelector from './TypeSelector.jsx';
import { POKEMON_TYPE } from './pokemon-types.js';

export default {
  title: 'Components/TypeSelector',
  component: TypeSelector,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    type: 'normal',
  },
};

export const AllTypes = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
    {Object.keys(POKEMON_TYPE).map((key) => (
      <TypeSelector key={key} type={key} />
    ))}
  </div>
);
