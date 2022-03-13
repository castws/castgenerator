import useSetRandom from 'services/store/useSetRandom';
import cn from './Actions.module.css';

const Actions = () => {
  const randomSelect = useSetRandom();

  return (
    <button className={cn.button} onClick={randomSelect}>
      Add cast
    </button>
  );
};

export default Actions;
