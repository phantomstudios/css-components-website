import { StatCard, StatsCards, StatsWrapper } from "./styles";

interface Props {
  stats: {
    title: string;
    value: string;
  }[];
}

const Stats = ({ stats }: Props) => (
  <StatsWrapper>
    <h2>Stats at a glance</h2>
    <StatsCards>
      {stats.map((stat) => (
        <StatCard key={stat.title}>
          <h3>{stat.title}</h3>
          <p>{stat.value}</p>
        </StatCard>
      ))}
    </StatsCards>
  </StatsWrapper>
);

export default Stats;
