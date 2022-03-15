import { useRecoilState } from 'recoil';

import castsState from './castsState';
import { BodyPart, Side } from '../../types';

const useSetSideBodyPart = () => {
  const [casts, setCasts] = useRecoilState(castsState);

  const setBodyPartSide = (value: boolean, bodyPart: BodyPart, side?: Side) => {
    const bodyPartSideCasts = Object.values(casts).filter(
      (cast) => cast.bodyPart === bodyPart && (!side || cast.side === side),
    );

    const newCasts = bodyPartSideCasts.reduce(
      (accum, cast) => {
        accum[cast.part] = {
          ...cast,
          isEnabled: value,
        };
        return accum;
      },
      { ...casts },
    );

    setCasts(newCasts);
  };

  return setBodyPartSide;
};

export default useSetSideBodyPart;
