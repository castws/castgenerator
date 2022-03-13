import cns from 'classnames';

import useToggle from 'services/store/useToggle';
import { Cast, CastOption } from 'types';
import cn from './CastInput.module.css';

type Props = {
  name: Cast;
  cast: CastOption;
};

const CastInput = ({ name, cast }: Props) => {
  const toggle = useToggle();

  return (
    <label
      htmlFor={name}
      className={cns(cn.label, {
        [cn.selected]: cast.isSelected,
        [cn.disabled]: cast.isBlocked && !cast.isSelected,
      })}
    >
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={cast.isEnabled}
        disabled={cast.isSelected || cast.isBlocked}
        onChange={() => toggle(name)}
      />
      <span>{cast.name}</span>
    </label>
  );
};

export default CastInput;
