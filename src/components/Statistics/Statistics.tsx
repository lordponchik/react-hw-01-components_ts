import IStatistics from '../../interfaces/Statistics.interface';

import style from './Statistics.module.css';

interface IStatisticsProps {
  title?: string;
  statistics: IStatistics[];
}

const Statistics = ({ title, statistics }: IStatisticsProps) => {
  console.log('hier');
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statList}>
        {statistics.map(({ id, label, percentage }) => {
          return (
            <li className={style.item} key={id} style={{ backgroundColor: `${randomBGColor()}` }}>
              <span className={style.label}>{label}</span>
              <span className={style.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

function randomBGColor() {
  return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

function randomNumber(): number {
  return Math.floor(Math.random() * 255);
}

export default Statistics;
