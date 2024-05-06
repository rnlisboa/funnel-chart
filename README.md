import React, { useEffect, useState } from 'react';
import { Background,Chart,ChartContainer,InfoChart,InvertedFunnel,Percentage } from "./Styled"

interface InvertedFunnelChartProps {
    data: { label: string; value: number }[];
}

const FunnelChart = ({ data }: InvertedFunnelChartProps) => {
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimationComplete(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <ChartContainer>
            <InfoChart>
                {data.map((item, index) => (

                    <Background key={index} width={animationComplete ? item.value : 0}>
                        {item.label}
                    </Background>
                ))}
            </InfoChart>

            <Chart>
                {data.map((item, index) => (
                    
                    
                    <InvertedFunnel
                    key={index}
                    width={animationComplete ? item.value : 0}
                    >
                        {item.value}
                        <Percentage>25%</Percentage>
                    </InvertedFunnel>




                ))}
            </Chart>
        </ChartContainer>
    );
};


export default FunnelChart;


-------

import styled from 'styled-components';
import { colors } from '../../../main/style/references';

export const ChartContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Overpass:ital,wght@0,100..900;1,100..900&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    width: 35rem;
    display: flex;
    justify-content: flex-end;
    `;

export const Chart = styled.div`
    font-family: "Montserrat", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 50%;
    `

export const InfoChart = styled.div`
    font-family: "Montserrat", sans-serif;
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 50%;
`

export const Background = styled.div<{ width: number }>`
    background-color: ${(props) => controllColor(props.width)};
    height: 2.1rem;
    width: 150%;
    color: ${colors.dark};
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 0 .5rem;
    padding-right: 8px;
    transition: width 1s ease;
    height: 2rem;
    font-size: .8rem;
`



export const InvertedFunnel = styled.div<{ width: number }>`
    background-color: #0D1773;
    height: 2.1rem;
    width: ${(props) => props.width + 10}%;
    color: white;
    font-size: .8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 8px;
    transition: width 1s ease;
    height: 2rem;
    position: relative;
`;

export const Percentage = styled.span`
    font-size: .8rem;
    color:#0D1773;
    position: absolute;
    right: -40px;
    top: 25%;
`;

function controllColor(value: number){
    if(value > 40) return '#0D177331';
    if(value > 10) return '#0D177317';
    return '#69ACEA13'
}