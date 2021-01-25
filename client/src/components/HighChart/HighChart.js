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
  AreaSplineSeries,
  SplineSeries,
  Navigator,
  RangeSelector,
  Tooltip,
} from 'react-jsx-highstock';

const HighChart = props => {
  const fontStyle = { fontSize: '16px', fontFamily: 'Lato' };

  const showNav = false;
  return (
    <div className={`container boxShadow ${props.class}`}>
      <div className='highChart'>
        {/* highChart -div needed to contain chart and allow it to auto scale width. */}
        <div className='highChart__title'>
          <img className='highChart__icon' src={props.titleIcon} />
          <p className='highChart__titleText label'>{props.title}</p>
        </div>
        <HighchartsStockChart className='highChart__chart'>
          <Chart zoomType='x' />
          <Legend></Legend>
          <Tooltip />
          <XAxis></XAxis>
          <YAxis>
            {props.series2Data ? (
              <YAxis.Title style={fontStyle}>{props.seriesLabel}</YAxis.Title>
            ) : null}
            <AreaSplineSeries
              id={props.seriesId}
              name={props.seriesLabel}
              data={props.seriesData}
              color={props.seriesColor}
            />
          </YAxis>
          {props.series2Data ? (
            <YAxis opposite>
              <YAxis.Title style={fontStyle}>{props.series2Label}</YAxis.Title>
              <SplineSeries
                id={props.series2Id}
                name={props.series2Label}
                data={props.series2Data}
                color={props.series2Color}
              />
            </YAxis>
          ) : null}
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
            <RangeSelector.Input boxBorderColor='#7cb5ec' enabled={true} />
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
