import { Cast } from '../../types';

const getImage = (cast: Cast) => {
  let fileName = cast.replace('L_', '').replace('R_', '');
  switch (fileName) {
    case 'SLWC':
      fileName = 'SLC';
      break;
    case 'LLWC':
      fileName = 'LLC';
      break;
  }
  return `${process.env.PUBLIC_URL}/casts/${fileName}.svg`;
};

export default getImage;
