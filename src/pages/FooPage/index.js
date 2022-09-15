import Hello from "../../components/Hello";
import Basic from "../../components/Basic";
import PieWithLabel from "../../components/PieWithLabel";
import ResponsiveContainer from "../../layouts/ResponsiveContainer";

const charts = [
  {
    Type: Hello,
    widthSpan: 1,
    heightSpan: 1,
  },
  {
    Type: Basic,
    widthSpan: 1,
    heightSpan: 1,
  },
  {
    Type: PieWithLabel,
    widthSpan: 1,
    heightSpan: 2,
  },
  {
    Type: Hello,
    widthSpan: 1,
    heightSpan: 2,
  },
  {
    Type: Basic,
    widthSpan: 1,
    heightSpan: 1,
  },
  {
    Type: PieWithLabel,
    widthSpan: 1,
    heightSpan: 1,
  },
];

export default function Foo() {
  return <ResponsiveContainer charts={charts} />;
}
