import { useContext } from 'react';
import { AppContext } from '../../../../contexts/provider';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
    StyledDiv,
    StyledInfo,
    StyledSpan,
    StyledButton,
    ButtonWrapper
} from './HistoryPrint.Styled';

const HistoryPrint = () => {
    const [state, setState, history, setHistory] = useContext(AppContext);

    const handleBack = e => {
        setState({
            ...state,
            showList: true,
        });
        // Reset all items to unchecked and set showList to true
        let result = history.map(item => {
            return {
                ...item,
                checked: false
            }
        })
        setHistory(result)
    };

    return (
        <>
            <>{ // Filter checked localHistory items and print them
                history.filter(item => item.checked === true).map(item =>
                    <StyledDiv key={item.id}>
                        <StyledInfo>{item.date} - <StyledSpan>
                            {item.from === 'url'
                                ? 'Page'
                                : 'Hostname'}
                        </StyledSpan> level data for <StyledSpan>{item.url}</StyledSpan> at <StyledSpan>
                                {item.device !== ''
                                    ? item.device
                                    : 'ALL'}
                            </StyledSpan> devices
                        </StyledInfo>
                        <ResponsiveContainer
                            width="100%"
                            height={300}
                        >
                            <BarChart
                                data={item.metrics}
                                layout="vertical"
                                margin={{
                                    top: 20,
                                    right: 20,
                                    left: -20,
                                    bottom: 5
                                }}
                            >
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                />
                                <XAxis
                                    type="number"
                                />
                                <YAxis
                                    dataKey="name"
                                    type="category"
                                />
                                <Tooltip />
                                <Bar
                                    dataKey="good"
                                    stackId="a"
                                    fill="hsl(118, 41%, 49%)"
                                />
                                <Bar
                                    dataKey="needs improvement"
                                    stackId="a"
                                    fill="hsl(31, 78%, 53%)"
                                />
                                <Bar
                                    dataKey="poor"
                                    stackId="a"
                                    fill="hsl(359, 80%, 50%)"
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </StyledDiv>
                )
            }
            </>
            <ButtonWrapper>
                <StyledButton
                    onClick={handleBack}
                >
                    Back
                </StyledButton>
            </ButtonWrapper>
        </>
    );
};

export default HistoryPrint;