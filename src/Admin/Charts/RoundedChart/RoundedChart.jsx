import React, { useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';


const CanvasJSChart = CanvasJSReact.CanvasJSChart;



export default function RoundedChart() {
    const [options] = useState({
        animationEnabled: true,
        title: {
            text: "Customer Satisfaction"
        },
        subtitles: [{
            text: "71% Positive",
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "Unsatisfied", y: 5 },
                { name: "Very Unsatisfied", y: 31 },
                { name: "Very Satisfied", y: 40 },
                { name: "Satisfied", y: 17 },
                { name: "Neutral", y: 7 }
            ]
        }]
    });

    return (
        <div className='col-3 Charts'>
            <CanvasJSChart options={options} />
            {/* You can get reference to the chart instance using onRef. This allows you to access all chart properties and methods */}
        </div>
    );
};

