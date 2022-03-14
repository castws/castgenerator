import { selector } from 'recoil';

import { BodyPart, BodySection, Side } from 'types';
import castsState from './castsState';

const groupedCasts = selector({
  key: 'groupedCasts',
  get: ({ get }) =>
    Object.values(get(castsState)).reduce<
      Partial<Record<BodyPart, BodySection>>
    >(
      (accum, cast) => {
        accum[cast.bodyPart]?.side[cast.side].casts.push(cast);
        return accum;
      },
      {
        [BodyPart.Legs]: {
          name: 'Legs',
          isActive: true,
          side: {
            [Side.Right]: {
              name: 'Right',
              isActive: true,
              casts: [],
            },
            [Side.Left]: {
              name: 'Left',
              isActive: true,
              casts: [],
            },
            [Side.NoSide]: {
              name: 'No side',
              isActive: true,
              casts: [],
            },
          },
        },
        [BodyPart.Arms]: {
          name: 'Arms',
          isActive: true,
          side: {
            [Side.Right]: {
              name: 'Right',
              isActive: true,
              casts: [],
            },
            [Side.Left]: {
              name: 'Left',
              isActive: true,
              casts: [],
            },
            [Side.NoSide]: {
              name: 'No side',
              isActive: true,
              casts: [],
            },
          },
        },
        [BodyPart.Body]: {
          name: 'Body',
          isActive: true,
          side: {
            [Side.Right]: {
              name: 'Right',
              isActive: true,
              casts: [],
            },
            [Side.Left]: {
              name: 'Left',
              isActive: true,
              casts: [],
            },
            [Side.NoSide]: {
              name: 'No side',
              isActive: true,
              casts: [],
            },
          },
        },
      },
    ),
});

export default groupedCasts;
