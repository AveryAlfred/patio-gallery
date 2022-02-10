import { renderHook, act } from '@testing-library/react-hooks';
import { useplants } from 'modules/plants/utils/usePlants';

test('addPlant', () => {
  // Test data
  const initalPlants = {
    Patio: [
      {
        id: 'one',
        info: {
          name: 'Tom',
          moniker: 'Green tree',
          taxa: 'Greenus treeius',
          group: 'Patio',
        },
      },
    ],
  };
  const initialGroups = ['Patio'];
  const newPlant = {
    name: 'Randy',
    moniker: 'Red tree',
    taxa: 'Redious treeius',
    group: 'Patio',
  };
  const finalPlants = {
    Patio: [
      {
        id: 'one',
        info: {
          name: 'Tom',
          moniker: 'Green tree',
          taxa: 'Greenus treeius',
          group: 'Patio',
        },
      },
      {
        id: 'two',
        info: {
          name: 'Randy',
          moniker: 'Red tree',
          taxa: 'Redious treeius',
          group: 'Patio',
        },
      },
    ],
  };

  // Rendering hook
  const { result } = renderHook(() => useplants(initalPlants, initialGroups));
  const { items, addPlant } = result.current;

  // Calling function
  act(() => {
    addPlant(newPlant);
  });

  expect(items).toEqual(finalPlants);
});
