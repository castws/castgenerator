import { selector } from 'recoil';
import castsState from './castsState';

const selectedCasts = selector({
  key: 'selectedCasts',
  get: ({ get }) =>
    Object.values(get(castsState)).filter((cast) => cast.isSelected),
});

export default selectedCasts;
