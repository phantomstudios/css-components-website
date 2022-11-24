import { Bar, BarContainer, Chart, Label, Row, Title } from "./styles";

export interface BenchmarkIndicator {
  name: string;
  value: number;
}

const getBarColor = (name: string) => {
  switch (name) {
    case "CSS Components":
      return "#e76f51";
    case "Stitches":
      return "#e9c46a";
    case "styled-components":
      return "#2a9d8f";
    case "Emotion":
      return "#264653";
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
