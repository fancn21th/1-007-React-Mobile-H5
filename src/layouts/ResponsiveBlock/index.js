import { useContext } from "react";
import { Grid } from "antd-mobile";
import { LayoutContext } from "../../contexts";

export default function Block({ children, mobileSpan = 3, tabletSpan = 1 }) {
  const { isTablet, width } = useContext(LayoutContext);

  const span = isTablet ? tabletSpan : mobileSpan;

  console.log({ isTablet, span, width });

  return <Grid.Item span={span}>{children}</Grid.Item>;
}
