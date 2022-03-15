import cns from 'classnames';

import Checkbox from 'components/Checkbox';
import useToggle from 'services/casts/useToggle';
import { Cast, CastOption } from 'types';
import cn from './CastInput.module.css';

type Props = {
  name: Cast;
  cast: CastOption;
};

const CastInput = ({ name, cast }: Props) => {
  const toggle = useToggle();

  return (
    <>
      <Checkbox
        name={name}
        label={cast.name}
        className={cns(cn.castInput, {
          [cn.selected]: cast.isSelected,
          [cn.disabled]: cast.isBlocked && !cast.isSelected,
        })}
        checked={cast.isEnabled}
        disabled={cast.isSelected || cast.isBlocked}
        onChange={() => toggle(name)}
      />
    </>
  );
};

export default CastInput;
