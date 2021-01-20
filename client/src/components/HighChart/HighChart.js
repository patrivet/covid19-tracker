import React from 'react';
import Highcharts from 'highcharts/highstock';
import {
  HighchartsStockChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Title,
  Legend,
  AreaSplineSeries,
  SplineSeries,
  Navigator,
  RangeSelector,
  Tooltip,
} from 'react-jsx-highstock';

const HighChart = props => {
  return (
    <div className='app'>
      <HighchartsStockChart>
        <Chart zoomType='x' />

        <Title>{props.title}</Title>

        <Legend>
          <Legend.Title>Key</Legend.Title>
        </Legend>

        <Tooltip />

        <XAxis>
          <XAxis.Title>Time</XAxis.Title>
        </XAxis>

        <YAxis>
          <YAxis.Title>Price</YAxis.Title>
          <AreaSplineSeries
            id={props.seriesId}
            name={props.seriesId}
            data={props.stats1}
          />
        </YAxis>

        <RangeSelector selected={3}>
          <RangeSelector.Button count={1} type='day'>
            1d
          </RangeSelector.Button>
          <RangeSelector.Button count={7} type='day'>
            7d
          </RangeSelector.Button>
          <RangeSelector.Button count={1} type='month'>
            1m
          </RangeSelector.Button>
          <RangeSelector.Button type='all'>All</RangeSelector.Button>
          <RangeSelector.Input boxBorderColor='#7cb5ec' />
        </RangeSelector>

        <Navigator>
          <Navigator.Series seriesId='profit' />
          <Navigator.Series seriesId='twitter' />
        </Navigator>
      </HighchartsStockChart>
    </div>
  );
};

export default withHighcharts(HighChart, Highcharts);
