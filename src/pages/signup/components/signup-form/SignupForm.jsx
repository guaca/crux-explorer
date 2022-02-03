import { StyledForm, StyledInput, StyledError, StyledButton } from './SignupForm.Styled';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');
    const auth = getAuth();
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setError('');
                console.log(user);
                navigate('/new-check', { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage.replace('Firebase: ', '').replace(' (auth/weak-password)', ''));
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <StyledForm onSubmit={onSubmit}>
            <StyledInput
                placeholder='E-mail'
                onChange={e => setEmail(e.target.value)}
                type='email'
                required
            />
            <StyledInput
                placeholder='Password'
                onChange={e => setPassword(e.target.value)}
                type='password'
                required
            />
            <StyledButton>Register</StyledButton>
            {error !== '' && <StyledError>{error}</StyledError>}
        </StyledForm >
    );
};

export default SignupForm;