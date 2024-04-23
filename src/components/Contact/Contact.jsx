import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.contactListItem}>
      <div className={css.contactInfoContainer}>
        <p>
          <span className={css.contactAccent}>Name:</span> {contact.name}
        </p>
        <p>
          <span className={css.contactAccent}>Number:</span> {contact.number}
        </p>
      </div>
      <button
        type="button"
        onClick={handleDeleteContact}
        className={css.deleteButton}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
