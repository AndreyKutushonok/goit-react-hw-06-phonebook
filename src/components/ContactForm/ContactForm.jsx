import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from 'redux/slice';
import { getContacts } from 'redux/selectors';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        contacts.some(contact => contact.name === name)
            ? alert(`${name} is already in contacts`)
            : dispatch(
                  addContacts({
                      id: nanoid(),
                      name: name,
                      number: number,
                  })
              );

        setName('');
        setNumber('');
    };

    const changeText = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                break;
        }
    };

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <span className={s.name}>Name</span>
            <label>
                <input
                    onChange={changeText}
                    value={name}
                    className={s.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <span className={s.name}>Number</span>
            <label>
                <input
                    className={s.input}
                    onChange={changeText}
                    value={number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button className={s.button} type="submit">
                Add contact
            </button>
        </form>
    );
    // }
};

export default ContactForm;
