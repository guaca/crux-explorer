import LoginForm from './components/login-form';
import { StyledContent, StyledH1 } from './Login.Styled';
import { Helmet } from 'react-helmet'

const Login = () => {
    return (
        <StyledContent>
            <Helmet>
                <title>Login - CrUX Explorer</title>
                <meta name='description' content='Log in to dive into CrUX Explorer data.' />
            </Helmet>
            <StyledH1>Login</StyledH1>
            <LoginForm />
        </StyledContent>
    );
};

export default Login;