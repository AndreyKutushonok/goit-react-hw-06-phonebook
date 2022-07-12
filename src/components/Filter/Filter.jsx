import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setFilter } from 'redux/slice';
import { getFilter } from 'redux/selectors';
import s from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    return (
        <label className={s.label}>
            <span>Find contacts by name </span>
            <input
                className={s.input}
                type="text"
                value={filter}
                onChange={e => dispatch(setFilter(e.target.value))}
            />
        </label>
    );
};

export default Filter;
