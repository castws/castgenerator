import { useRecoilValue, useSetRecoilState } from 'recoil';

import { configState } from 'services/config';
import { Side } from 'types';
import castsState from './castsState';

const useSetRandom = () => {
  const setState = useSetRecoilState(castsState);
  const config = useRecoilValue(configState);

  const setRandom = () =>
    setState((previousState) => {
      const selectableCasts = Object.values(previousState).filter(
        (cast) => cast.isEnabled && !cast.isBlocked && !cast.isSelected,
      );
      if (!selectableCasts.length) return previousState;
      const selectedCast =
        selectableCasts[Math.floor(Math.random() * selectableCasts.length)];

      const newState = {
        ...previousState,
        [selectedCast.part]: {
          ...selectedCast,
          isSelected: true,
        },
      };

      const collidingCasts = config.allowOverlap
        ? []
        : Object.values(previousState)
            .filter(
              (cast) =>
                cast.limb === selectedCast.limb &&
                (cast.side === selectedCast.side || cast.side === Side.NoSide),
            )
            .map((cast) => cast.part);

      const aditionalOverlaps =
        config.allowOverlap || !selectedCast.overlaps
          ? []
          : selectedCast.overlaps;

      const blockCasts = [
        ...selectedCast.blockOthers,
        ...collidingCasts,
        ...aditionalOverlaps,
      ].filter(
        (cast) =>
          config.allowOverlap ||
          !(
            selectedCast.excludeOverlaps &&
            selectedCast.excludeOverlaps.includes(cast)
          ),
      );

      return blockCasts.reduce((accum, cast) => {
        return {
          ...accum,
          [cast]: {
            ...accum[cast],
            isBlocked: true,
          },
        };
      }, newState);
    });

  return setRandom;
};

export default useSetRandom;
