import React, { useEffect, useState } from 'react';
import { Background, Chart, ChartContainer, InfoChart, InvertedFunnel, Percentage } from "./Styled.ts"

interface InvertedFunnelChartProps { data: { label: string; value: number }[]; }

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