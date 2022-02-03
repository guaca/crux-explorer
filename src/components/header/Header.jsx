import { StyledNav, StyledUl, StyledLi, StyledLink, StyledLogo, StyledWrapper } from './Header.Styled';
import { useAuthState } from '../../firebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const { isAuthenticated } = useAuthState();
    const navigate = useNavigate();
    const auth = getAuth();
    const handleLogout = e => {
        e.preventDefault();
        signOut(auth).then(() => {
            navigate('/', { replace: true });
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <StyledWrapper>
            <StyledNav>
                <StyledLogo><StyledLink to={isAuthenticated ? '/new-check' : '/'}> ⚡️ </StyledLink></StyledLogo>
                {isAuthenticated ?
                    <StyledUl>
                        <StyledLi><StyledLink to='/new-check'>Check</StyledLink></StyledLi>
                        <StyledLi><StyledLink to='/history'>History</StyledLink></StyledLi>
                        <StyledLi><StyledLink to='#' onClick={handleLogout} ><FontAwesomeIcon icon={faSignOutAlt} /></StyledLink></StyledLi>
                    </StyledUl> :
                    <StyledUl>
                        <StyledLi><StyledLink to='/login'>Login</StyledLink></StyledLi>
                        <StyledLi><StyledLink to='/signup'>Signup</StyledLink></StyledLi>
                    </StyledUl>
                }
            </StyledNav>
        </StyledWrapper>
    )
}

export default Header;