import Block from "../../layouts/ResponsiveBlock";
import Demo from "./components/Demo";

export default function Foo() {
  return (
    <>
      <Block>
        <Demo />
      </Block>
      <Block tabletSpan={2}>
        <Demo />
      </Block>
      <Block>
        <Demo />
      </Block>
      <Block>
        <Demo />
      </Block>
      <Block>
        <Demo />
      </Block>
    </>
  );
}
