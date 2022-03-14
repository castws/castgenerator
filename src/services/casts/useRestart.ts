import { useSetRecoilState } from 'recoil';

import { Cast, CastOption } from 'types';
import castsState from './castsState';

const useRestart = () => {
  const setState = useSetRecoilState(castsState);

  const restart = () =>
    setState(
      (previousState) =>
        Object.entries(previousState).reduce<Partial<Record<Cast, CastOption>>>(
          (accum, [key, cast]) => ({
            ...accum,
            [key]: {
              ...cast,
              isSelected: false,
              isBlocked: false,
            },
          }),
          {},
        ) as Record<Cast, CastOption>,
    );

  return restart;
};

export default useRestart;
