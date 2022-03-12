import cns from 'classnames';

import { Cast, CastOption } from 'types';
import cn from './CastInput.module.css';

type Props = {
  name: Cast;
  cast: CastOption;
  onChange(cast: Cast): void;
};

const CastInput = ({ name, cast, onChange }: Props) => {
  return (
    <label
      htmlFor={name}
      className={cns(cn.label, {
        [cn.selected]: cast.isSelected,
        [cn.disabled]: cast.isBlocked,
      })}
    >
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={cast.isEnabled}
        disabled={cast.isSelected || cast.isBlocked}
        onChange={() => onChange(name)}
      />
      <span>{cast.name}</span>
    </label>
  );
};

export default CastInput;
