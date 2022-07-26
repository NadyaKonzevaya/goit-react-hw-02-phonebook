import {Input, Label} from "../PhonebookForm/PhonebookForm.styled"

const Filter = ({ value, onChange }) => (
    <Label>
        Find contacts by name
        <Input type="text" value={value} onChange={onChange} />
    </Label>
)


export default Filter;