import { Bar, BarContainer, Chart, Label, Row, Title } from "./styles";

export interface BenchmarkIndicator {
  name: string;
  value: number;
}

const getBarColor = (name: string) => {
  switch (name) {
    case "CSS Components":
      return "rgb(0,253,199)";
    case "Stitches":
      return "rgb(15, 135, 131)";
    case "Emotion":
      return "rgb(22, 95, 101)";
    case "styled-components":
      return "rgb(29, 55, 71)";
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
          <Title>{row.name}</Title>
          <BarContainer>
            <Bar
              style={{
                width: `${(row.value / maxValue) * 100}%`,
                backgroundColor: getBarColor(row.name),
              }}
            >
              <Label>{row.value}ms</Label>
            </Bar>
          </BarContainer>
        </Row>
      ))}
    </Chart>
  );
}
