import Canvas from "@antv/f2-react";
import { Chart, Interval, Legend, Axis, Tooltip } from "@antv/f2";

// F2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
const data = [
  { genre: "Sports", sold: 275 },
  { genre: "Strategy", sold: 115 },
  { genre: "Action", sold: 120 },
  { genre: "Shooter", sold: 350 },
  { genre: "Other", sold: 150 },
];

export default function Demo() {
  return (
    <Canvas pixelRatio={window.devicePixelRatio}>
      <Chart data={data}>
        <Legend />
        <Axis field="genre" />
        <Axis field="sold" />
        <Tooltip showTooltipMarker={true} />
        <Interval x="genre" y="sold" />
      </Chart>
    </Canvas>
  );
}
