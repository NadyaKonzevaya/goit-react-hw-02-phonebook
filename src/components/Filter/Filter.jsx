import { InputName, Label } from "../PhonebookForm/PhonebookForm.styled";
import { Container } from "./Filter.styled";

const Filter = ({ value, onChange }) => (
    <Container>
        <Label>
            Find contacts by name
            <InputName type="text" value={value} onChange={onChange} />
        </Label>
    </Container>
)


export default Filter;