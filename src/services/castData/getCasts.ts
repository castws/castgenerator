import { Cast, CastOption, Side } from 'types';
import { castsData } from './source';

export const getCasts = () => {
  const casts = castsData.flatMap((cast) => {
    if (cast.hasSide) {
      return ['R_', 'L_'].map((side) => ({
        part: cast.part.replace('P_', side) as Cast,
        name: cast.name,
        bodyPart: cast.bodyPart,
        limb: cast.limb,
        side: side === 'R_' ? Side.Right : Side.Left,
        blockOthers: cast.blockOthers.map(
          (item) => item.replace('P_', side) as Cast,
        ),
        isEnabled: true,
        isSelected: false,
        isBlocked: false,
      }));
    }

    const blockOthers = cast.blockOthers.flatMap((item) => {
      if (item.startsWith('P_')) {
        return [
          item.replace('P_', 'R_') as Cast,
          item.replace('P_', 'L_') as Cast,
        ];
      }
      return [item as Cast];
    });
    return [
      {
        part: cast.part as Cast,
        name: cast.name,
        bodyPart: cast.bodyPart,
        limb: cast.limb,
        side: Side.NoSide,
        blockOthers,
        isEnabled: true,
        isSelected: false,
        isBlocked: false,
      },
    ];
  });

  return casts.reduce<Partial<Record<Cast, CastOption>>>((accum, cast) => {
    accum[cast.part] = cast;
    return accum;
  }, {}) as Record<Cast, CastOption>;
};
