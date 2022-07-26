// import { Button } from "../PhonebookForm/PhonebookForm.styled";
import { Item, Button } from "./ContactList.styled";

const ContactList = ({ value, onDeleteContact }) => {
    return (
        <ul>
            {value.map(val => (<Item key={val.id}>{val.name}: {val.number}
                <Button onClick={()=> onDeleteContact(val.id) }>Delete</Button>
            </Item>))}
        </ul>
    )

};

export default ContactList;