import { atom } from 'recoil';
import { Cast, CastOption } from '../../types';
import { getCasts } from '../castData/getCasts';

const castsState = atom<Record<Cast, CastOption>>({
  key: 'casts',
  default: getCasts(),
});

export default castsState;
