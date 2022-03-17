import { useRecoilValue } from 'recoil';

import Checkbox from 'components/Checkbox';
import { groupedCasts, useSetSideBodyPart } from 'services/casts';
import { BodyPart, Side } from 'types';
import CastInput from '../CastInput';
import cn from './CastOptions.module.css';

const App = () => {
  const casts = useRecoilValue(groupedCasts);
  const setSideBodyPart = useSetSideBodyPart();

  return (
    <div className={cn.castOptions}>
      {Object.entries(casts).map(([groupKey, group]) => (
        <div key={groupKey}>
          <h2>
            <Checkbox
              name={groupKey}
              label={group.name}
              checked={group.isActive}
              onChange={() =>
                setSideBodyPart(!group.isActive, groupKey as BodyPart)
              }
            />
          </h2>
          <div className={cn.group}>
            {Object.entries(group.side).map(([sideKey, side]) => {
              return (
                !!side.casts.length && (
                  <div key={sideKey} className={cn.side}>
                    <h3>
                      <Checkbox
                        name={groupKey + sideKey}
                        label={side.name}
                        checked={side.isActive}
                        onChange={() =>
                          setSideBodyPart(
                            !side.isActive,
                            groupKey as BodyPart,
                            sideKey as Side,
                          )
                        }
                      />
                    </h3>
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
