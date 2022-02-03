import {
    StyledH1,
    StyledContent,
    StyledTextWrapper,
    StyledH2,
    StyledText,
    StyledLink,
    StyledLi,
    StyledA
} from './Home.Styled';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <StyledContent>
            <Helmet>
                <title>CrUX Explorer ⚡️</title>
                <meta name='description' content='Check how a page or site is performing in terms of Core Web Vitals with the CrUX Explorer. Sign in and explore it!' />
            </Helmet>
            <StyledH1>CrUX Explorer</StyledH1>
            <StyledTextWrapper>
                <StyledH2>Know the speed of your pages and make them better</StyledH2>
                <StyledText>Powered by the <StyledA href='https://web.dev/chrome-ux-report/' target='_blank' rel='noopener, noreferrer'>Chrome User Experience Report</StyledA>, CrUX Explorer provides you with <strong>data from real Chrome users</strong> all around the world to know how a page or a site is performing in terms of:</StyledText>
                <ul>
                    <StyledLi>Loading, thanks to the <strong>LCP</strong> metric</StyledLi>
                    <StyledLi>Interactivity, with <strong>FID</strong> data</StyledLi>
                    <StyledLi>Visual Stability, owing to <strong>CLS</strong> values</StyledLi>
                </ul>
                <StyledH2>Core Web Vitals are an SEO ranking factor</StyledH2>
                <StyledText><StyledA href='https://web.dev/vitals/#core-web-vitals' target='_blank' rel='noopener noreferrer'>CWV</StyledA> are part of Google's Page Experience ranking signals, so improving them you are working on inproving your SEO results.</StyledText>
                <StyledH2>Compare your page against your competitors</StyledH2>
                <StyledText>Check how your page is performing in Core Web Vitals and compare your results to your main competitors.</StyledText>
                <StyledH2>Save your results and check their evolution over time</StyledH2>
                <StyledText>You can save the CWV results and check them whenever you need them in the History section. Check how your metrics evolve over time!</StyledText>
                <StyledH2>Sign up and start checking it!</StyledH2>
                <StyledLink to='/signup'>Sign up</StyledLink>
            </StyledTextWrapper>
        </StyledContent>
    );
}

export default Home;