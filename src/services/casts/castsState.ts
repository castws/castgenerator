import { atom } from 'recoil';

import { getCasts } from 'services/castData/getCasts';
import { Cast, CastOption } from 'types';

const castsState = atom<Record<Cast, CastOption>>({
  key: 'casts',
  default: getCasts(),
});

export default castsState;
