/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/provider';
import { StyledH1, StyledContent, StyledError } from './NewCheck.Styled';
import Form from './components/form';
import Barchart from './components/barchart/Barchart';
import { Helmet } from 'react-helmet';

const NewCheck = () => {
    const [state, setState] = useContext(AppContext);

    useEffect(() => {
        setState({
            ...state,
            showForm: true,
            error: null,
            data: {
                from: 'origin',
                device: 'PHONE',
                url: ''
            }
        })
    }, [])

    const crux = (from, url, device) => {
        const endpointUrl = 'https://chromeuxreport.googleapis.com/v1/records:queryRecord';
        // Modify with your CrUX API key
        const apiKey = process.env.REACT_APP_CRUX_API_KEY;
        const obj = {};
        obj[from] = url;
        if (device !== '') {
            obj['formFactor'] = device;
        }
        axios
            .post(`${endpointUrl}?key=${apiKey}`, obj)
            .then(response => {
                setState({
                    ...state,
                    showForm: false,
                    error: '',
                    data: {
                        id: Math.random() * 1000,
                        device: device,
                        from: from,
                        url: obj[from],
                        date: new Date().toLocaleDateString(),
                        metrics: labelMetricData(response.data.record.metrics)
                            .filter(item => item.name !== 'FCP')
                            .sort((a, b) => a.name > b.name),
                        checked: false
                    }
                });
            })
            .catch(err => {
                console.log('Error: ', err);
                if (err.response.status === 404) {
                    setState({
                        ...state,
                        error: 'CrUX does not have sufficient real-world speed data for this request'
                    });
                };
            });
    };

    const labelMetricData = (metrics) => {
        const nameToAcronymMap = {
            cumulative_layout_shift: 'CLS',
            first_contentful_paint: 'FCP',
            first_input_delay: 'FID',
            largest_contentful_paint: 'LCP',
            experimental_time_to_first_byte: 'TTFB',
            experimental_interaction_to_next_paint: 'INP'
        };

        return Object.entries(metrics).map(([metricName, metricData]) => {
            const metricBins = metricData.histogram;
            return {
                'name': nameToAcronymMap[metricName],
                'good': Math.floor((metricBins[0].density * 100) * 100) / 100,
                'needs improvement': Math.floor((metricBins[1].density * 100) * 100) / 100,
                'poor': Math.floor((metricBins[2].density * 100) * 100) / 100,
            };
        });
    };

    return (
        <StyledContent>
            <Helmet>
                <title>New Check - CrUX Explorer</title>
                <meta name='description' content='Fill the form and get the Core Web Vitals metrics from real users thanks to the CrUX Explorer.' />
            </Helmet>
            {state.showForm
                ? <div>
                    <StyledH1>New Check</StyledH1>
                    <Form
                        crux={crux}
                    />
                    <StyledError>{state.error}</StyledError>
                </div>
                : <Barchart />}
        </StyledContent>
    )
}

export default NewCheck;