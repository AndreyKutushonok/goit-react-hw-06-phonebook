import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { removeContacts } from 'redux/slice';
import s from './ContactList.module.css';

const ContactList = () => {
    const filteredContacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();

    return (
        <ul className={s.contactsList}>
            {filteredContacts.map(({ id, name, number }) => (
                <li className={s.listItem} key={id}>
                    <p className={s.contactText}>
                        {name}: {number}
                    </p>
                    <button
                        className={s.button}
                        type="submit"
                        name={name}
                        onClick={() => dispatch(removeContacts(id))}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
