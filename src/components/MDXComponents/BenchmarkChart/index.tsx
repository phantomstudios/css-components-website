import { Bar, BarContainer, Chart, Label, Row, Title } from "./styles";

export interface BenchmarkIndicator {
  name: string;
  value: number;
}

const getBarColor = (name: string) => {
  switch (name) {
    case "CSS Components":
      return "#0095ff";
    case "Stitches":
      return "#9e6dff";
    case "styled-components":
      return "#ace3ff";
    case "Emotion":
      return "#cac0ff";
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
