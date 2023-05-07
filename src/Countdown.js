import React, { useStates } from 'react';
import styles from './index.module.scss';

export default function Countdown() {
  // date object and variable
  const date = new Date();
  const currentDay = String(date.getDate()).padStart(2, '0');
  const currentMonth = String(date.getMonth() + 1).padStart(2, '0');
  const currentYear = date.getFullYear();

  return (
    <section>
      <h1 className={styles.title}>Countdown Timer</h1>

      <h2>
        Today is the {currentDay}-{currentMonth}-{currentYear}
      </h2>
      <div className={styles.structureBox}>
        <label htmlFor="startDate" className={styles.placeHolderBox}>
          Start date
        </label>
        <label htmlFor="endDate" className={styles.placeHolderBox}>
          End date
        </label>
        <input id="startDate" value="" />
        <input id="endDate" value="" />
      </div>
      <div className={styles.countDown}>00:00:00:00</div>
      <button className={styles.extraButton}>START</button>
    </section>
  );
}
