import Container from "@components/layouts/Containers/ContainerFluid";
import Stack from "@components/layouts/Stack/Stack";
import Heading from "@components/molecules/Heading/Heading";
import Paragraph from "@components/molecules/Paragraph/Paragraph";
import ComplexIcon from "@components/molecules/ComplexIcon/ComplexIcon";
import React from "react";

export const ListProducts = ({
  id,
  title,
  price,
  category,
  images,
  description,
  layout
}) => {
  return (
    <Container key={id} className={`product__item--${layout}`} noChildContainer>
      <Stack direction={"vertical"} type={"wide"} noChildContainer>
        <Heading level={4} size={"xl"} weight={"bold"}>
          {title}
        </Heading>
        <Paragraph color={"secondary"}>{`$${price} MXN`}</Paragraph>
        <Paragraph>Category: {category.name}</Paragraph>
        <Paragraph size={"sm"} color={"secondary"}>
          {description}
        </Paragraph>
        {/*<ComplexIcon icon={"star"} />*/}
      </Stack>
      <Container className={"product__image__container--list"}>
        {images.map(image => {
          return (
            <img
              key={image}
              className={`product__image--${layout}`}
              src={image}
              alt={title}
            />
          );
        })}
      </Container>
    </Container>
  );
};
