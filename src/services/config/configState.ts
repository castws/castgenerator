import { atom } from 'recoil';

import { Config } from 'types';

const configState = atom<Config>({
  key: 'config',
  default: {
    allowOverlap: true,
  },
});

export default configState;
