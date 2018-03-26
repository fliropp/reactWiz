import React from 'react';
import {render} from 'react-dom';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';

const Chart = (props) => {

        return (
          <XYPlot
          xType="ordinal"
          width={300}
          height={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <LineSeries
            data={props.data}
            style={{stroke: 'violet', strokeWidth: 3}}/>
          <XAxis title="dato" />
          <YAxis title="farenivå" />
          </XYPlot>
        );
}
export default Chart;
