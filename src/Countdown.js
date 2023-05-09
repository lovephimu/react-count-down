import React, { useState } from 'react';
import styles from './index.module.scss';

export default function Countdown() {
  // date object and variable - padStart is a great way to format numbers increasing from 0 to 10
  const date = new Date();
  const currentDay = String(date.getDate()).padStart(2, '0');
  const currentMonth = String(date.getMonth() + 1).padStart(2, '0');
  const currentYear = date.getFullYear();
  const currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
  const endOfTheYear = new Date(2023, 11, 31);
  const currentDayEnd = String(endOfTheYear.getDate()).padStart(2, '0');
  const currentMonthEnd = String(endOfTheYear.getMonth() + 1).padStart(2, '0');
  const currentYearEnd = endOfTheYear.getFullYear();
  const currentDateEnd = `${currentDayEnd}-${currentMonthEnd}-${currentYearEnd}`;

  let [days, hours, minutes, seconds] = [0, 0, 0, 0];

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [numDays, setNumDays] = useState('00');
  const [numHours, setNumHours] = useState('00');
  const [numMinutes, setNumMinutes] = useState('00');
  const [numSeconds, setNumSeconds] = useState('00');
  const [highLight, setHighLight] = useState('#f18b82');

  function setEmpty() {
    setNumDays('--');
    setNumHours('--');
    setNumMinutes('--');
    setNumSeconds('--');
  }

  function decreaseTime() {
    setHighLight('#FFFFFF');
    // check to see whether start date has been set

    // states rewrite so they can be used by new Date
    const startDateArray = startDate.split('-').reverse();
    const endDateArray = endDate.split('-').reverse();
    startDateArray[1] = Number(startDateArray[1]) - 1;
    endDateArray[1] = Number(endDateArray[1]) - 1;

    let timeDifference =
      new Date(...endDateArray) - new Date(...startDateArray);

    const intervalID = setInterval(() => {
      if (timeDifference <= 0) {
        clearInterval(intervalID);
        setEmpty();
        return;
      }
      timeDifference -= 1000;
      days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      seconds = Math.floor((timeDifference / 1000) % 60);
      // translate to dates through states
      setNumDays(days);
      setNumHours(hours);
      setNumMinutes(minutes);
      setNumSeconds(seconds);
    }, 1000);
  }

  return (
    <section>
      <h1 className={styles.title}>Countdown Timer</h1>

      <div className={styles.structurePanel}>
        This countdown timer shows the remaining time between two dates! <br />
        You only have to enter two dates according to the pattern DD-MM-YYYY.
        You can choose two dates or leave the start date blank and start
        counting from today.
      </div>
      <div className={styles.structureBox}>
        <label htmlFor="startDate" className={styles.placeHolderBox}>
          Start date
        </label>
        <label htmlFor="endDate" className={styles.placeHolderBox}>
          End date
        </label>
        <input
          id="startDate"
          placeholder={`${currentDay}-${currentMonth}-${currentYear}`}
          value={startDate}
          onChange={(event) => setStartDate(event.currentTarget.value)}
        />
        <input
          id="endDate"
          placeholder="DD-MM-YYYY"
          value={endDate}
          onChange={(event) => setEndDate(event.currentTarget.value)}
        />
      </div>
      <div className={styles.gridContainer}>
        <span className={styles.countDown} style={{ color: highLight }}>
          {numDays}
        </span>
        <span className={styles.countDown} style={{ color: highLight }}>
          :
        </span>
        <span className={styles.countDown} style={{ color: highLight }}>
          {numHours}
        </span>
        <span className={styles.countDown} style={{ color: highLight }}>
          :
        </span>
        <span className={styles.countDown} style={{ color: highLight }}>
          {numMinutes}
        </span>
        <span className={styles.countDown} style={{ color: highLight }}>
          :
        </span>
        <span className={styles.countDown} style={{ color: highLight }}>
          {numSeconds}
        </span>
        <span className={styles.gridItem}>Days</span>
        <span />
        <span className={styles.gridItem}>Hours</span>
        <span />
        <span className={styles.gridItem}>Minutes</span>
        <span />
        <span className={styles.gridItem}>Seconds</span>
      </div>
      <button
        className={styles.extraButton}
        onClick={() => {
          !startDate
            ? setStartDate(currentDate)
            : !endDate
            ? setEndDate(currentDateEnd)
            : decreaseTime();
        }}
      >
        {!startDate || !endDate ? 'SET' : 'START'}
      </button>
    </section>
  );
}

