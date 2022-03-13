import cns from 'classnames';

import useRestart from 'services/store/useRestart';
import useSetRandom from 'services/store/useSetRandom';
import cn from './Actions.module.css';

const Actions = () => {
  const randomSelect = useSetRandom();
  const restart = useRestart();

  return (
    <>
      <button className={cns('button', cn.button)} onClick={randomSelect}>
        Add cast
      </button>
      <div className={cn.resetContainer}>
        <button className="button-link" onClick={restart}>
          Restart
        </button>
      </div>
    </>
  );
};

export default Actions;
