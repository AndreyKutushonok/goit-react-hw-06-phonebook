import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { removeContacts } from 'redux/slice';
import s from './ContactList.module.css';

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const contactsFiltered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    if (contactsFiltered) {
        return (
            <ul className={s.contactsList}>
                {contactsFiltered.map(({ id, name, number }) => (
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
    }
};

export default ContactList;
