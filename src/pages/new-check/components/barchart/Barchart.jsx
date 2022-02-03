/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState } from 'react';
import { AppContext } from '../../../../contexts/provider';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import {
    StyledDiv,
    StyledH1,
    StyledInfo,
    PrimaryButton,
    SecondaryButton,
    StyledSpan
} from './Barchart.Styled'

const Barchart = () => {
    const [state, setState, history, setHistory] = useContext(AppContext);
    const [saveState, setSaveState] = useState(false);

    const handleNewCheck = e => {
        setState({
            ...state,
            showForm: true,
            error: null,
            data: {
                from: 'origin',
                device: 'PHONE'
            },
        });
    };

    const handleSave = e => {
        e.preventDefault();
        const saveStates = () => {
            setSaveState(true);
            setHistory([
                ...history,
                state.data
            ])
        };
        saveStates();
    };

    return (
        <StyledDiv>
            <StyledH1>Results</StyledH1>
            <ResponsiveContainer width="100%" height={300} >
                <BarChart
                    data={state.data.metrics}
                    layout="vertical"
                    margin={{
                        top: 20,
                        right: 20,
                        left: -20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="good" stackId="a" fill="hsl(118, 41%, 49%)" />
                    <Bar dataKey="needs improvement" stackId="a" fill="hsl(31, 78%, 53%)" />
                    <Bar dataKey="poor" stackId="a" fill="hsl(359, 80%, 50%)" />
                </BarChart>
            </ResponsiveContainer>
            <StyledInfo>
                <StyledSpan>{state.data.from === 'url' ? 'Page' : 'Hostname'}</StyledSpan> level data for <StyledSpan>{state.data.url}</StyledSpan> at <StyledSpan>{state.data.device !== '' ? state.data.device : 'ALL'}</StyledSpan> devices
            </StyledInfo>
            <PrimaryButton
                onClick={handleNewCheck}
            >
                New Check
            </PrimaryButton>
            <SecondaryButton
                onClick={handleSave}
                disabled={saveState}
            >
                Save
            </SecondaryButton>
        </StyledDiv>
    );
};

export default Barchart;