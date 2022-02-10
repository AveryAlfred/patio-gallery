import dynamic from 'next/dynamic';
import { MultipleContainers } from './MultipleContainers';

export const Dnd = dynamic(() => Promise.resolve(dnd), {
  ssr: false,
});

const dnd = () => {
  return (
    <>
      <MultipleContainers />
    </>
  );
};
