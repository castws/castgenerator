import { useSetRecoilState } from 'recoil';

import castsState from './castsState';
import { BodyPart } from '../../types';

const useToggleBodyPart = () => {
  const setState = useSetRecoilState(castsState);

  const toggleBodyPart = (bodyPart: BodyPart) => {
    setState((previousState) => previousState);
  };

  return toggleBodyPart;
};

export default useToggleBodyPart;
