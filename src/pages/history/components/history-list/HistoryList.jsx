/* eslint-disable react-hooks/exhaustive-deps */
import {
    StyledContent,
    StyledTable,
    TableHeaderRow,
    StyledButton,
    TableWrapper
} from './HistoryList.Styled';
import HistoryItem from '../history-item'
import { useContext } from 'react';
import { AppContext } from '../../../../contexts/provider';

const HistoryList = () => {
    const [state, setState, history] = useContext(AppContext);

    const handlePrint = e => {
        e.preventDefault();
        setState({
            ...state,
            showList: false
        });
    }

    return (
        <TableWrapper>
            {history.length > 0 ?
                <StyledContent>
                    <StyledTable>
                        <thead>
                            <TableHeaderRow>
                                <th>Select</th>
                                <th>Date</th>
                                <th>Url</th>
                                <th>Level</th>
                                <th>Device</th>
                                <th>Remove</th>
                            </TableHeaderRow>
                        </thead>
                        <tbody>
                            {history.map(item => (
                                <HistoryItem item={item} />
                            ))}
                        </tbody>
                    </StyledTable>
                    <StyledButton
                        onClick={handlePrint}
                    >
                        Print
                    </StyledButton>
                </StyledContent>
                : <StyledContent>You have not saved any check result.</StyledContent>}
        </TableWrapper>
    )
}

export default HistoryList;