import Demo from "./components/Demo";
import ResponsiveContainer from "../../layouts/ResponsiveContainer";

const charts = [
  {
    Type: Demo,
    widthSpan: 1,
    heightSpan: 1,
  },
  {
    Type: Demo,
    widthSpan: 1,
    heightSpan: 1,
  },
  {
    Type: Demo,
    widthSpan: 1,
    heightSpan: 2,
  },
  {
    Type: Demo,
    widthSpan: 1,
    heightSpan: 2,
  },
  {
    Type: Demo,
    widthSpan: 1,
    heightSpan: 2,
  },
];

export default function Foo() {
  return <ResponsiveContainer charts={charts} />;
}
