import React from "react";
import Card from "@components/atoms/Card/Card";
import ComplexIcon from "@components/molecules/ComplexIcon/ComplexIcon";
import Heading from "@components/molecules/Heading/Heading";
import Paragraph from "@components/molecules/Paragraph/Paragraph";
import Stack from "@components/layouts/Stack/Stack";

import { StackTypes } from "@components/layouts/Stack/Stack.types";

const CardLayout = ({
  id,
  title,
  price,
  category,
  images,
  description,
  layout
}) => {
  return (
    <Card layout={"normal"} direction={"vertical"}>
      <Card.Header className={`product__item__header--${layout}`}>
        <Heading level={4} size={"xl"} color={"secondary"} weight={"bold"}>
          {title}
        </Heading>
      </Card.Header>
      <Card.Body className={`product__item__body--${layout}`}>
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
      </Card.Body>
      <Card.Footer className={`product__item__footer--${layout}`}>
        <Stack direction={"vertical"} noChildContainer>
          <Stack
            direction={"vertical"}
            type={StackTypes.normal}
            noChildContainer
          >
            <Paragraph>{description}</Paragraph>
            <Paragraph>{category.title}</Paragraph>
            <Paragraph>{`$${price} MXN`}</Paragraph>
          </Stack>
        </Stack>
        <ComplexIcon icon={"star"} />
      </Card.Footer>
    </Card>
  );
};

export default CardLayout;
