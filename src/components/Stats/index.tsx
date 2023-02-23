import { StatCard, StatsCards, StatsWrapper } from "./styles";

const Stats = () => {
  return (
    <StatsWrapper>
      <h2>Stats at a glance</h2>
      <StatsCards>
        <StatCard>
          <h3>Bundle Size</h3>
          <p>2.3kb</p>
        </StatCard>
        <StatCard>
          <h3>Bundle Size (GZIP)</h3>
          <p>961b</p>
        </StatCard>
        <StatCard>
          <h3>Runtime interpolations</h3>
          <p>Zero</p>
        </StatCard>
        <StatCard>
          <h3>Variants</h3>
          <p>∞</p>
        </StatCard>
      </StatsCards>
    </StatsWrapper>
  );
};

export default Stats;
