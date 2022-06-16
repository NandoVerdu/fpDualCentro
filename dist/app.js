const Dayjs = require('../src/day.js');
const {dayjs} = Dayjs;

const testDayjs=()=>console.log(
    dayjs()
        .startOf('month')
        .add(1,'day')
        .set('year',2022)
        .format('DD-MM-YYYY hh:mm:ss')
);