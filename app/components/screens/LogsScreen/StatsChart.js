import React from 'react'
import { PieChart } from 'react-native-svg-charts'

const StatsChart = ({ data, getDetailedInfo }) => {

        const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)
        console.log(data);
        const pieData = data
            .map((value, index) => ({
                value: value.count,
                svg: {
                    fill: randomColor(),
                    onPress: () => getDetailedInfo(value),
                },
                key: `pie-${index}`,
            }))

        return (
            <PieChart
                labelRadius = "20"
                innerRadius = "60%"
                style={ { height: 200 } }
                data={ pieData }
            />
        )
};

export default StatsChart;

