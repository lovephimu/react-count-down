import React, { useState } from 'react';
import styles from './index.module.scss';

export default function Countdown() {
  // date object and variable - padStart is a great way to format numbers increasing from 0 to 10
  const date = new Date();
  const currentDay = String(date.getDate()).padStart(2, '0');
  const currentMonth = String(date.getMonth() + 1).padStart(2, '0');
  const currentYear = date.getFullYear();
  const testDate = new Date('2023', 10, 20);

  let [days, hours, minutes, seconds] = [0, 0, 0, 0];

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [numDays, setNumDays] = useState('00');
  const [numHours, setNumHours] = useState('00');
  const [numMinutes, setNumMinutes] = useState('00');
  const [numSeconds, setNumSeconds] = useState('00');

  function measureTime() {
    // states rewrite so they can be used by new Date
    const startDateArray = startDate.split('-').reverse();
    const endDateArray = endDate.split('-').reverse();

    // end date - startdate
    const timeDifference =
      new Date(...endDateArray) - new Date(...startDateArray);

    // translate into days, hours, minutes, seconds
    days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    seconds = Math.floor((timeDifference / 1000) % 60);
    // translate to dates through states
    setNumDays(days);
    setNumHours(hours);
    setNumMinutes(minutes);
    setNumSeconds(seconds);
  }

  function decreaseTime() {}

  return (
    <section>
      <h1 className={styles.title}>Countdown Timer</h1>

      <h2>
        Today is the {currentDay}-{currentMonth}-{currentYear} let's also test
        some stuff:
        {testDate.getTime() - date.getTime()}
      </h2>
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
      <div className={styles.countDown}>
        {numDays}:{numHours}:{numMinutes}:{numSeconds}
      </div>
      <button className={styles.extraButton} onClick={() => measureTime()}>
        START
      </button>
    </section>
  );
}
