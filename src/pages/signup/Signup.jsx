import SignupForm from './components/signup-form';
import { StyledContent, StyledH1 } from './Signup.Styled';
import { Helmet } from 'react-helmet';

const Login = () => {
    return (
        <StyledContent>
            <Helmet>
                <title>Signup - CrUX Explorer</title>
                <meta name='description' content='Sign up to dive into CrUX Explorer data.' />
            </Helmet>
            <StyledH1>Signup</StyledH1>
            <SignupForm />
        </StyledContent>
    );
};

export default Login;