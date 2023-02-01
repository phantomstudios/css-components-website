import { StatsWrapper } from "./styles";

const Stats = () => {
  return (
    <StatsWrapper>
      <h2>Stats at a glance</h2>
      <ul>
        <li>
          <h3>Bundle Size</h3>
          <p>2.3kb</p>
        </li>
        <li>
          <h3>Bundle Size (GZIP)</h3>
          <p>961b</p>
        </li>
        <li>
          <h3>Runtime interpolations</h3>
          <p>Zero</p>
        </li>
        <li>
          <h3>Variants</h3>
          <p>∞</p>
        </li>
      </ul>
    </StatsWrapper>
  );
};

export default Stats;
