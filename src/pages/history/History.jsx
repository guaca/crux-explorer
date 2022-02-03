/* eslint-disable react-hooks/exhaustive-deps */
import { StyledH1, StyledContent } from './History.Styled';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/provider';
import HistoryList from './components/history-list';
import HistoryPrint from './components/history-print';
import { Helmet } from 'react-helmet';

const History = () => {
    const [state, setState] = useContext(AppContext);

    // Set to true showList when loading the component
    useEffect(() => {
        setState({
            ...state,
            showList: true
        })
    }, [])
    return (
        <StyledContent>
            <Helmet>
                <title>History - CrUX Explorer</title>
                <meta name='description' content='Explore your saved data and analyze their evolution through time.' />
            </Helmet>
            <StyledH1>History</StyledH1>
            {state.showList
                ? <HistoryList />
                : <HistoryPrint />
            }
        </StyledContent>
    );
};

export default History;