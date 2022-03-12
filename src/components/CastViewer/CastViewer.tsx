import { useRecoilValue } from 'recoil';
import body from '../../assets/body.svg';
import cns from 'classnames';
import selectedCasts from '../../services/store/selectedCasts';

import cn from './CastViewer.module.css';
import getImage from './getImage';
import { Side } from '../../types';

const CastViewer = () => {
  const casts = useRecoilValue(selectedCasts);

  return (
    <div className={cn.container}>
      <img className={cn.image} src={body} alt="" />
      {Object.values(casts).map((cast) => (
        <img
          key={cast.part}
          className={cns(cn.image, { [cn.invert]: cast.side === Side.Left })}
          src={getImage(cast.part)}
          alt=""
        />
      ))}
    </div>
  );
};

export default CastViewer;
