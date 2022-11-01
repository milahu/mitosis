import { css } from "solid-styled-components";

import MyBooleanAttributeComponent from "./basic-boolean-attribute-component.raw";

function MyBooleanAttribute(props) {
  return (
    <>
      <div>
        {props.children}
        {props.type}
        <MyBooleanAttributeComponent
          toggle={true}
        ></MyBooleanAttributeComponent>
        <MyBooleanAttributeComponent
          toggle={true}
        ></MyBooleanAttributeComponent>
        <MyBooleanAttributeComponent list={null}></MyBooleanAttributeComponent>
      </div>
    </>
  );
}

export default MyBooleanAttribute;
