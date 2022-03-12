import { useSetRecoilState } from 'recoil';
import castsState from './castsState';

const useSetRandom = () => {
  const setState = useSetRecoilState(castsState);

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

      return selectedCast.blockOthers.reduce((accum, cast) => {
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
