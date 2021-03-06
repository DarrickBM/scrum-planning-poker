// const calcMethods = [
//   {
//     key: 'Average',
//     value: 0,
//     sub: [
//       {
//         key: 'Arithmetic Mean',
//         value: 0
//       },
//       {
//         key: 'Truncated Mean',
//         value: 1
//       }
//     ]
//   },
//   {
//     key: 'Median',
//     value: 1
//   },
//   {
//     key: 'Customized',
//     value: 2
//   }
// ];

const calcMethods = [
  {
    key: 'Arithmetic Mean',
    value: 0
  },
  {
    key: 'Truncated Mean',
    value: 1
  },
  {
    key: 'Median',
    value: 2
  },
  {
    key: 'Customized',
    value: 3
  }
];

const cards = [
  {
    key: '0',
    corner: '0',
    value: 0,
    icon: '../../image/cards/0.png',
    corner: '../../image/cards/_0.png',
  },
  {
    key: '1/2',
    corner: '1/2',
    value: 0.5,
    icon: '../../image/cards/0.5.png',
    corner: '../../image/cards/_0.5.png',
  },
  {
    key: '1',
    corner: '1',
    value: 1,
    icon: '../../image/cards/1.png',
    corner: '../../image/cards/_1.png',
  },
  {
    key: '2',
    corner: '2',
    value: 2,
    icon: '../../image/cards/2.png',
    corner: '../../image/cards/_2.png',
  },
  {
    key: '3',
    corner: '3',
    value: 3,
    icon: '../../image/cards/3.png',
    corner: '../../image/cards/_3.png',
  },
  {
    key: '5',
    corner: '5',
    value: 5,
    icon: '../../image/cards/5.png',
    corner: '../../image/cards/_5.png',
  },
  {
    key: '8',
    corner: '8',
    value: 8,
    icon: '../../image/cards/8.png',
    corner: '../../image/cards/_8.png',
  },
  {
    key: '13',
    corner: '13',
    value: 13,
    icon: '../../image/cards/13.png',
    corner: '../../image/cards/_13.png',
  },
  {
    key: '20',
    corner: '20',
    value: 20,
    icon: '../../image/cards/20.png',
    corner: '../../image/cards/_20.png',
  },
  {
    key: '40',
    corner: '40',
    value: 40,
    icon: '../../image/cards/40.png',
    corner: '../../image/cards/_40.png',
  },
  {
    key: '100',
    corner: '100',
    value: 100,
    icon: '../../image/cards/100.png',
    corner: '../../image/cards/_100.png',
  },
  {
    key: '?',
    corner: '?',
    value: -1,
    icon: '../../image/cards/Q.png',
    corner: '../../image/cards/_Q.png',
  },
  // {
  //   key: 'C',
  //   corner: 'coffee',
  //   value: -2,
  //   icon: '../../image/cards/C.png',
  //   corner: '../../image/cards/_C.png',
  // }
];

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
};

const initResults = new Array(31).fill(null).map((v, i) => i).concat([0.5, 40, 55, 89, 100]).sort((i, j) => i - j);

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
};

const formatTimer = timer => {
  const hour = Math.floor(timer / 3600);
  const minute = Math.floor((timer % 3600) / 60);
  const second = timer % 60;
  return `${formatNumber(hour)}:${formatNumber(minute)}:${formatNumber(second)}`
};


module.exports = {
  calcMethods,
  cards,
  initResults,
  formatTime,
  formatTimer,
}
