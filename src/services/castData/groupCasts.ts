import { BodyPart, BodySection, Cast, CastOption, Side } from 'types';

export const groupCasts = (casts: Record<Cast, CastOption>) => {
  const result = Object.values(casts).reduce<
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
  );
  return result;
};
