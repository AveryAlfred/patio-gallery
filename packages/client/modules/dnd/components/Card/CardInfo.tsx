import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Plant } from 'modules/plants/utils/PlantData';
import { StyledInput } from 'modules/dnd/components/Card/Form.styled';
import { Form } from 'modules/dnd/components/Card/Form';
import * as s from './CardInfo.styled';
import { Button } from 'modules/dnd/components/Card/Button';

export const CardInfo = ({
  value,
  setView,
}: {
  value: Plant;
  setView: Function;
}) => {
  const { id, info, events } = value;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const goName = (event) => {
    event.preventDefault();
  };

  return (
    <Form>
      <s.StyledLabelBlock>
        <label htmlFor="name">name</label>
        <StyledInput
          autoComplete="off"
          type="text"
          id="name"
          defaultValue={info.name}
        ></StyledInput>
        <s.StyledNameButton onClick={goName}>@</s.StyledNameButton>
      </s.StyledLabelBlock>
      <label htmlFor="moniker">moniker</label>
      <StyledInput
        autoComplete="off"
        type="text"
        id="moniker"
        defaultValue={info.moniker}
      ></StyledInput>
      <label htmlFor="taxa">taxa</label>
      <StyledInput
        autoComplete="off"
        type="text"
        id="taxa"
        defaultValue={info.taxa}
      ></StyledInput>
      <s.StyledActionBtns>
        <Button onClick={() => setView(() => 0)}> return </Button>
        <s.StyledDivisor>/</s.StyledDivisor>
        <Button onClick={handleSubmit(onSubmit)}> accept</Button>
      </s.StyledActionBtns>
    </Form>
  );
};
