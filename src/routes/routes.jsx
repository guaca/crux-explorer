/* eslint-disable import/no-anonymous-default-export */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StyledWrapper, GlobalStyle } from '../styles/styles';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/home';
import NewCheck from '../pages/new-check';
import History from '../pages/history';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Header from '../components/header';
import Footer from '../components/footer';

export default () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <StyledWrapper>
                <Header />
                <Routes>
                    {/* Public routes */}
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    {/* Private routes */}
                    <Route path='/new-check' element={<PrivateRoute component={NewCheck} />} />
                    <Route path='/history' element={<PrivateRoute component={History} />} />
                </Routes>
                <Footer />
            </StyledWrapper>
        </BrowserRouter>
    );
};