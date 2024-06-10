import React, { useEffect, useRef, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
const { CanvasJSChart } = CanvasJSReact;

export default function ColumnChart() {
    const [dataPoints, setDataPoints] = useState([]);

    const chartRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json');
                const data = await response.json();
                const newDataPoints = data.map(item => ({
                    x: new Date(item.x),
                    y: item.y
                }));
                setDataPoints(newDataPoints);
                chartRef.current.render();
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        // Cleanup function not needed in this case

    }, []); // Empty dependency array ensures useEffect runs only once after initial render

    const options = {
        theme: "light2",
        title: {
            text: "Earnings Overview"
        },
        data: [{
            type: "line",
            xValueFormatString: "MMM",
            yValueFormatString: "#,##0.00",
            dataPoints: dataPoints
        }]
    };

    return (
        <div className='col-7 Charts1'>
            <CanvasJSChart options={options} onRef={ref => (chartRef.current = ref)} />
            {/* You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods */}
        </div>
    );
}
;


