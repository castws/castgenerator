import { useSetRecoilState } from 'recoil';

import { Cast } from 'types';
import castsState from './castsState';

const useToggle = () => {
  const setState = useSetRecoilState(castsState);

  const toggle = (cast: Cast) =>
    setState((previousState) => ({
      ...previousState,
      [cast]: {
        ...previousState[cast],
        isEnabled: !previousState[cast].isEnabled,
      },
    }));

  return toggle;
};

export default useToggle;
