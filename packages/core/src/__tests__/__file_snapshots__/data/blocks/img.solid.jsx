import { Builder } from "@builder.io/sdk";

function ImgComponent(props) {
  return (
    <img
      style={{
        "object-fit": props.backgroundSize || "cover",
        "object-position": props.backgroundPosition || "center",
      }}
      {...props.attributes}
      key={(Builder.isEditing && props.imgSrc) || "default-key"}
      alt={props.altText}
      src={props.imgSrc}
    />
  );
}

export default ImgComponent;
