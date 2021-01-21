import React from 'react';
import './HighChart.css';
import Highcharts from 'highcharts/highstock';
import {
  HighchartsStockChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Legend,
  ColumnSeries,
  Navigator,
  RangeSelector,
  Tooltip,
} from 'react-jsx-highstock';

const HighChart = props => {
  const showNav = true;
  return (
    <div className='container boxShadow'>
      <div className='highChart'>
        {/* highChart -div needed to contain chart and allow it to auto scale width. */}
        <div className='highChart__title'>
          <img className='highChart__icon' src={props.titleIcon} />
          <p className='highChart__titleText'>{props.title}</p>
        </div>
        <HighchartsStockChart className='highChart__chart'>
          <Chart zoomType='x' />

          <Legend></Legend>
          <Tooltip />
          <XAxis></XAxis>

          <YAxis>
            <ColumnSeries
              id={props.seriesId}
              name={props.seriesLabel}
              data={props.seriesData}
            />
          </YAxis>

          <RangeSelector selected={5}>
            <RangeSelector.Button count={1} type='week'>
              1w
            </RangeSelector.Button>
            <RangeSelector.Button count={1} type='month'>
              1m
            </RangeSelector.Button>
            <RangeSelector.Button count={2} type='month'>
              2m
            </RangeSelector.Button>
            <RangeSelector.Button count={3} type='month'>
              3m
            </RangeSelector.Button>
            <RangeSelector.Button count={6} type='month'>
              6m
            </RangeSelector.Button>

            <RangeSelector.Button type='all'>All</RangeSelector.Button>
            <RangeSelector.Input boxBorderColor='#7cb5ec' />
          </RangeSelector>

          {showNav ? (
            <Navigator>
              <Navigator.Series seriesId={props.seriesId} />
            </Navigator>
          ) : null}
        </HighchartsStockChart>
      </div>
    </div>
  );
};

export default withHighcharts(HighChart, Highcharts);
