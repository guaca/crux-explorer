import { useContext } from 'react';
import { AppContext } from '../../../../contexts/provider';
import { StyledForm, StyledInput, StyledSelect, StyledButton, InputWrapper, SelectWrapper, StyledLabel } from './Form.Styled';

const Form = ({ crux }) => {
    const [state, setState] = useContext(AppContext)
    const handleInput = e => setState({
        ...state,
        data: {
            ...state.data,
            url: e.target.value
        }
    });
    const handleFrom = e => setState({
        ...state,
        data: {
            ...state.data,
            from: e.target.value
        }
    });
    const handleDevice = e => setState({
        ...state,
        data: {
            ...state.data,
            device: e.target.value
        }
    });
    const onSubmit = e => {
        e.preventDefault();
        crux(state.data.from, state.data.url, state.data.device);
    };
    return (
        <StyledForm onSubmit={onSubmit}>
            <InputWrapper>
                <StyledInput
                    type='url'
                    placeholder='Enter a URL'
                    value={state.data.url}
                    onChange={handleInput}
                    required />
                <StyledButton>Check it</StyledButton>
            </InputWrapper>
            <SelectWrapper>
                <StyledLabel htmlFor='from'>Level</StyledLabel>
                <StyledSelect name='from' id='from' value={state.data.from} onChange={handleFrom}>
                    <option value='origin'>Hostname</option>
                    <option value='url'>Page</option>
                </StyledSelect>
            </SelectWrapper>
            <SelectWrapper>
                <StyledLabel htmlFor='device'>Device</StyledLabel>
                <StyledSelect name='device' id='device' value={state.data.device} onChange={handleDevice}>
                    <option value='PHONE'>Phone</option>
                    <option value='DESKTOP'>Desktop</option>
                    <option value='TABLET'>Tablet</option>
                    <option value=''>ALL</option>
                </StyledSelect>
            </SelectWrapper>
        </StyledForm>
    );
};

export default Form;