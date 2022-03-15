import { selector } from 'recoil';

import { BodyPart, BodySection, Side } from 'types';
import castsState from './castsState';

const getGroup = () => ({
  [BodyPart.Legs]: {
    name: 'Legs',
    isActive: false,
    side: {
      [Side.Right]: {
        name: 'Right',
        isActive: false,
        casts: [],
      },
      [Side.Left]: {
        name: 'Left',
        isActive: false,
        casts: [],
      },
      [Side.NoSide]: {
        name: 'No side',
        isActive: false,
        casts: [],
      },
    },
  },
  [BodyPart.Arms]: {
    name: 'Arms',
    isActive: false,
    side: {
      [Side.Right]: {
        name: 'Right',
        isActive: false,
        casts: [],
      },
      [Side.Left]: {
        name: 'Left',
        isActive: false,
        casts: [],
      },
      [Side.NoSide]: {
        name: 'No side',
        isActive: false,
        casts: [],
      },
    },
  },
  [BodyPart.Body]: {
    name: 'Body',
    isActive: false,
    side: {
      [Side.Right]: {
        name: 'Right',
        isActive: false,
        casts: [],
      },
      [Side.Left]: {
        name: 'Left',
        isActive: false,
        casts: [],
      },
      [Side.NoSide]: {
        name: 'No side',
        isActive: false,
        casts: [],
      },
    },
  },
});

const groupedCasts = selector({
  key: 'groupedCasts',
  get: ({ get }) =>
    Object.values(get(castsState)).reduce<Record<BodyPart, BodySection>>(
      (accum, cast) => {
        accum[cast.bodyPart].side[cast.side].casts.push(cast);
        accum[cast.bodyPart].side[cast.side].isActive =
          accum[cast.bodyPart].side[cast.side].isActive || cast.isEnabled;
        accum[cast.bodyPart].isActive =
          accum[cast.bodyPart].isActive || cast.isEnabled;
        return accum;
      },
      getGroup(),
    ),
});

export default groupedCasts;
