import { createSlice } from '@reduxjs/toolkit';

const imageArray = [
  {
    imageUrl: 'images/history1.jpg',
    id: '1',
    descr: 'First image',
  },
  {
    imageUrl: 'images/history1.jpg',
    id: '2',
    descr: 'Second image',
  },
  {
    imageUrl: 'images/history1.jpg',
    id: '3',
    descr: 'First image',
  },
  {
    imageUrl: 'images/history1.jpg',
    id: '4',
    descr: 'Second image',
  },
  {
    imageUrl: 'images/history1.jpg',
    id: '5',
    descr: 'First image',
  },
  {
    imageUrl: 'images/history2.jpg',
    id: '6',
    descr: 'Second image',
  },
  {
    imageUrl: 'images/history1.jpg',
    id: '7',
    descr: 'First image',
  },
  {
    imageUrl: 'images/history2.jpg',
    id: '8',
    descr: 'Second image',
  },
];

const text = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed,blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.';

const historySlice = createSlice({
  name: 'history',
  initialState: {
    history: {
      headlines: {
        title1: '01',
        title2: 'HISTORY',
        text,
      },
      slides: [...imageArray],
    },
    team: {
      headlines: {
        title1: '02',
        title2: 'CLIMB',
        text,
      },
      mountains: [{
        id: '1',
        name: 'Mountain 1',
        schedual: [
          {
            id: '1',
            date: '25 NOV 2023',
            desc: 'consectetur adipiscing',
          },
          {
            id: '2',
            date: '25 NOV 2023',
            desc: 'consectetur adipiscing',
          },
          {
            id: '3',
            date: '25 NOV 2023',
            desc: 'consectetur adipiscing',
          },
          {
            id: '4',
            date: '25 NOV 2023',
            desc: 'consectetur adipiscing',
          }],
      },
      {
        id: '2',
        name: 'Mountain 2',
        schedual: [
          {
            id: '2',
            date: '25 MAR 2024',
            desc: 'consectetur adipiscing',
          },
          {
            id: '3',
            date: '25 MAR 2024',
            desc: 'consectetur adipiscing',
          },
          {
            id: '4',
            date: '25 MAR 2024',
            desc: 'consectetur adipiscing',
          },
          {
            id: '5',
            date: '25 MAR 2024',
            desc: 'consectetur adipiscing',
          },
          {
            id: '6',
            date: '25 MAR 2024',
            desc: 'consectetur adipiscing',
          },
          {
            id: '7',
            date: '25 MAR 2024',
            desc: 'consectetur adipiscing',
          },
        ],
      },
      ],
    },
  },
  reducers: {},
});

export default historySlice.reducer;
