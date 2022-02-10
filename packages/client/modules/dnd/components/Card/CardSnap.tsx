import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plant } from 'modules/plants/utils/plants.types';
import { useImages } from 'common/utils/useImages';

import { Form } from 'modules/dnd/components/Card/Form';
import { Button } from 'modules/dnd/components/Card/Button';
import { Image } from 'modules/dnd/components/Card/Image';

import { StyledInput } from 'modules/dnd/components/Card/Form.styled';
import * as s from './CardSnap.styled';

export const CardSnap = ({
  value,
  setView,
}: {
  value: Plant;
  setView: Function;
}) => {
  const { id, info, events } = value;

  const { images, handleImage } = useImages();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  const onAddImageClick = (event) => {
    event.preventDefault();
    const input = document.querySelector('#photo');
    if (input) {
      input.click()!;
    }
  };

  return (
    <Form>
      <label htmlFor="date">when?</label>
      <StyledInput
        autoComplete="off"
        type="text"
        id="date"
        defaultValue={''}
        {...register('date')}
      ></StyledInput>
      <label htmlFor="note">what?</label>
      <StyledInput
        autoComplete="off"
        type="text"
        id="note"
        defaultValue={''}
        {...register('note')}
      ></StyledInput>
      <s.StyledImageInput
        autoComplete="off"
        type="file"
        id="photo"
        defaultValue={''}
        {...register('photo')}
        onChange={handleImage}
      ></s.StyledImageInput>

      <s.StyledNewImages data-no-dnd="false">
        <s.StyledPlusButton onClick={onAddImageClick}> + </s.StyledPlusButton>
        {images.map((image) => (
          <Image image={image} />
        ))}
      </s.StyledNewImages>

      <s.StyledActionBtns>
        <Button onClick={() => setView(() => 0)}> return </Button>
        <s.StyledDivisor>/</s.StyledDivisor>
        <Button onClick={handleSubmit(onSubmit)}> accept</Button>
      </s.StyledActionBtns>
    </Form>
  );
};
