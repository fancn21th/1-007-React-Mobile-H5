import Hello from "../../components/Hello";
import Basic from "../../components/Basic";
import PieWithLabel from "../../components/PieWithLabel";
import ResponsiveContainerGroup from "../../layouts/ResponsiveContainerGroup";

export default function Bar() {
  return (
    <ResponsiveContainerGroup>
      <Hello widthSpan={1} heightSpan={1} />
      <Basic widthSpan={1} heightSpan={1} />
      <PieWithLabel widthSpan={1} heightSpan={2} />
      <PieWithLabel widthSpan={1} heightSpan={1} />
      <Basic widthSpan={1} heightSpan={2} />
      <Hello widthSpan={1} heightSpan={1} />
    </ResponsiveContainerGroup>
  );
}
