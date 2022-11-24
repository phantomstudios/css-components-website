import { Bar, BarContainer, Chart, Row, Title } from "./styles";

export interface BenchmarkIndicator {
  name: string;
  value: number;
}

const getBarColor = (name: string) => {
  switch (name) {
    case "CSS Components":
      return "violet";
    case "Stitches":
      return "red";
    case "Stitches 0.2.0":
      return "orange";
    case "Stitches 0.1.9":
      return "yellow";
    case "styled-components":
      return "blue";
    case "Emotion":
      return "green";
    default:
      return "gray";
  }
};

interface Props {
  data: BenchmarkIndicator[];
}

export function BenchmarkChart({ data }: Props) {
  const maxValue = Math.max(...data.map((r) => r.value));

  return (
    <Chart>
      {data.map((row) => (
        <Row key={row.name}>
          <Title>
            {row.name} : {row.value}ms
          </Title>
          <BarContainer>
            <Bar
              style={{
                width: `${(row.value / maxValue) * 100}%`,
                backgroundColor: getBarColor(row.name),
              }}
            />
          </BarContainer>
        </Row>
      ))}
    </Chart>
  );
}
