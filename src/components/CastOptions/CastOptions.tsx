import { useRecoilValue } from 'recoil';

import { groupedCasts } from 'services/casts';
import CastInput from '../CastInput';
import cn from './CastOptions.module.css';

const App = () => {
  const casts = useRecoilValue(groupedCasts);

  return (
    <div className={cn.castOptions}>
      {Object.values(casts).map((group) => (
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
