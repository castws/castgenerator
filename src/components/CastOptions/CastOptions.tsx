import CastInput from '../CastInput';
import { groupCasts } from '../../services/castData/groupCasts';
import cn from './CastOptions.module.css';
import { useRecoilValue } from 'recoil';
import castsState from '../../services/store/castsState';
import useToggle from '../../services/store/useToggle';
import useSetRandom from '../../services/store/useSetRandom';

const App = () => {
  const casts = useRecoilValue(castsState);
  const toggle = useToggle();
  const randomSelect = useSetRandom();

  const groupedCasts = groupCasts(casts);

  return (
    <div>
      {Object.values(groupedCasts).map((group) => (
        <div key={group.name}>
          <h2>{group.name}</h2>
          <div className={cn.sides}>
            {Object.entries(group.side).map(([sideKey, side]) => (
              <div key={sideKey}>
                <h3>{side.name}</h3>
                {Object.values(side.casts).map((cast) => (
                  <div key={cast.part}>
                    <CastInput name={cast.part} cast={cast} onChange={toggle} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={randomSelect}>Random</button>
    </div>
  );
};

export default App;
