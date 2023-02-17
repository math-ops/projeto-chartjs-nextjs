import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

import { Line } from 'react-chartjs-2';

export default function MaterialRiskValue(){

    function generetaData(view, totalDays){
        var totalArray = [view]

        for(var i; i < totalDays; i++){
            var vCount = i + 1;
            var totalViews = totalArray[i-1] + (vCount * view)
            totalArray.push(totalViews);
        }
        return totalArray;
    }

    console.log(generetaData(10,4))

    const options = {
       plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Testando ChartJS',
            color: '#000',
            font: {
                size: 18
            }
        },
        elements: {
            line: {
                tension: 0,
                borderWidth: 1,
                borderColor: '#000',
                fill: 'start',
                backgroundColor: '#009add'
            },
            point: {
                radius: 10,
                hitRadius: 10,
            }
        },
        scales: {
            x:  {
                display: true,
                ticks: {
                    color: '#fff'
                }
            },
            y: {
                display: true,
                ticks: {
                    color: '#fff'
                }
            }
        }
    }
}

    var defaultData = {
        labels: [...Array(100).keys()],
        datasets: [{
            data: generetaData(10,100)
        }]
    }

    return(
        <>
            <Line data={defaultData} width={100} height={60} options={options}></Line>
        </>
    )
}