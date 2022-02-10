import { Button } from 'modules/dnd/components/Card/Button';
import { Plant } from 'modules/plants/utils/plants.types';
import * as s from './CardGallery.styled';

const testEvents = [
  { date: '10/10', note: 'growing steady' },
  { date: '10/11', note: 'growing steady' },
  { date: '10/12', note: 'growing steady' },
  { date: '10/13', note: 'growing steady' },
];

export const CardGallery = ({
  value,
  setView,
}: {
  value: Plant;
  setView: Function;
}) => {
  const { id, info, events } = value;

  return (
    <s.StyledWrap data-no-dnd="true">
      <s.StyledEntryZone>
        {testEvents.map((event) => (
          <s.StyledEntry>
            <s.StyledDate> {event.date}</s.StyledDate>
            <s.StyledNote> {event.note}</s.StyledNote>
          </s.StyledEntry>
        ))}
      </s.StyledEntryZone>
      <s.StyledActionBtns>
        <Button onClick={() => setView(() => 0)}> return </Button>
      </s.StyledActionBtns>
    </s.StyledWrap>
  );
};
