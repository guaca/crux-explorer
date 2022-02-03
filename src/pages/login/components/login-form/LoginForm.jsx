import { StyledForm, StyledInput, StyledError, StyledButton } from './LoginForm.Styled';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');
    const auth = getAuth();
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setError('');
                console.log(user);
                navigate('/new-check', { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
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
            <StyledButton>Log in</StyledButton>
            {error !== '' && <StyledError>{error}</StyledError>}
        </StyledForm >
    );
};

export default LoginForm;