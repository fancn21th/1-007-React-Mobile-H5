import Hello from "../../components/Hello";
import Basic from "../../components/Basic";
import PieWithLabel from "../../components/PieWithLabel";

import ResponsiveContainerColumn, {
  MobileLayout,
  TabletLayout,
  Column,
} from "../../layouts/ResponsiveContainerColumn";

export default function Bar() {
  return (
    <ResponsiveContainerColumn>
      <MobileLayout>
        <Column>
          <Hello />
        </Column>
      </MobileLayout>
      <TabletLayout>
        <Column>
          <Hello />
          <Basic />
          <PieWithLabel />
        </Column>
        <Column>
          <PieWithLabel />
          <Basic />
          <Hello />
        </Column>
        <Column>
          <PieWithLabel />
        </Column>
      </TabletLayout>
    </ResponsiveContainerColumn>
  );
}
