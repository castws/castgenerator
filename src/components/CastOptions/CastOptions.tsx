import { useRecoilValue } from 'recoil';

import { groupCasts } from 'services/castData/groupCasts';
import castsState from 'services/store/castsState';
import CastInput from '../CastInput';
import cn from './CastOptions.module.css';

const App = () => {
  const casts = useRecoilValue(castsState);

  const groupedCasts = groupCasts(casts);

  return (
    <div className={cn.castOptions}>
      {Object.values(groupedCasts).map((group) => (
        <div key={group.name}>
          <h2>{group.name}</h2>
          <div className={cn.group}>
            {Object.entries(group.side).map(([sideKey, side]) => {
              return (
                !!side.casts.length && (
                  <div key={sideKey} className={cn.side}>
                    <h3>{side.name}</h3>
                    {side.casts.length &&
                      Object.values(side.casts).map((cast) => (
                        <div className={cn.part} key={cast.part}>
                          <CastInput name={cast.part} cast={cast} />
                        </div>
                      ))}
                  </div>
                )
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
