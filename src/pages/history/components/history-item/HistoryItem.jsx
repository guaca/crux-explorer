import {
    TableRow,
    TableCell,
    TableCellLeft,
    TableCellCapitalized,
    StyledInput,
    StyledButton
} from './HistoryItem.Styled.jsx';
import { useContext } from 'react';
import { AppContext } from '../../../../contexts/provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'


const HistoryItem = ({ item }) => {
    const [set, setState, history, setHistory] = useContext(AppContext);

    const deleteHandler = e => {
        setHistory(history.filter(element => element.id !== item.id))
    }
    return (
        <TableRow
            key={item.id}
        >
            <TableCell>
                <StyledInput
                    type='checkbox'
                    onChange={() => item.checked = !item.checked}
                />
            </TableCell>
            <TableCell key={item.date}>{item.date}</TableCell>
            <TableCellLeft key={item.url}>{item.url}</TableCellLeft>
            <TableCellCapitalized key={item.from}>{item.from}</TableCellCapitalized>
            <TableCell key={item.device}>{item.device === '' ? 'ALL' : item.device}</TableCell>
            <TableCell>
                <StyledButton onClick={deleteHandler}><FontAwesomeIcon icon={faWindowClose} /></StyledButton>
            </TableCell>
        </TableRow>
    )
}

export default HistoryItem;