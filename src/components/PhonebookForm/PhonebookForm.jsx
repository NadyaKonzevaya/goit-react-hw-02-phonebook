import { Component } from "react";
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";
import {Form, Label, InputName, Button} from "./PhonebookForm.styled"

// import { Formik, Form, Field, ErrorMessage } from "formik";
// const initialValues = { name: "", };

const INITIAL_STATE = {
    id: "",
    name: "",
    number: "",
}
class PhonebookForm extends Component {
    state = { ...INITIAL_STATE };
    
    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();
        //    передаем в Арр в пропс addContact данные из this.state
        const contacts = { id: nanoid(7), name: this.state.name, number: this.state.number };
        this.props.addContact(contacts);
        this.resetForm();
    }

    resetForm = () => {
        this.setState({...INITIAL_STATE});
    }

    render() {
        const { name, number} = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Label htmlFor="name">
                    <span>Name</span>
                    <InputName
                        onChange={this.handleChange}
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required
                    />
                </Label>
                <Label htmlFor="number">
                    <span>Number</span>
                    <InputName
                        onChange={this.handleChange}
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>
                <Button type="submit">Add contact</Button>
            </Form>
        )
    }
}

PhonebookForm.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
}
// начала на formik
// const PhonebookForm = () => {
//     const handleSubmit = (values, actions) => {
//         console.log(values);
//         console.log(actions);
//         // actions.setValues({ name: event.currentTarget.value })
        
//         actions.resetForm();

//     }
//     return (
//         <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//             <Form>
//                 <h2>Phonebook</h2>
//                 <label htmlFor="name">
//                     Name
//                     <Field
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                     />
//                     <ErrorMessage name="name" />
//                 </label>
//                 <button type="submit">Add contact</button>
//                 </Form>
//             </Formik>
//     )

// };

export default PhonebookForm;