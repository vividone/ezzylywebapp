// import React from 'react';
// import ReactApexChart from 'react-apexcharts';

// interface Props {
//   tasks: any[];
// }

// const TasksChart: React.FC<Props> = ({ tasks }) => {
//   const options: ApexCharts.ApexOptions = {
//     chart: {
//       height: 350,
//       type: 'radialBar',
//     },
//     plotOptions: {
//       radialBar: {
//         dataLabels: {
//           name: {
//             fontSize: '22px',
//           },
//           value: {
//             fontSize: '16px',
//           },
//           total: {
//             show: true,
//             label: 'Total',
//             formatter: (w: any) => {
//               return 249;
//             },
//           },
//         },
//       },
//     },
//   };

//   const series: ApexCharts.ApexAxisChartSeries = [
//     {
//       name: 'All Tasks',
//       data: [31, 40, 28, 51, 42, 109, 100],
//     },
//     {
//       name: 'My Tasks',
//       data: [11, 32, 45, 32, 34, 52, 41],
//     },
//   ];

//   return (
//     <ReactApexChart
//       type="radialBar"
//       options={options}
//       series={series}
//       height={350}
//     />
//   );
// };

// export default TasksChart;
