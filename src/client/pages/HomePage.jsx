import React, { useContext } from "react";
import { ThemeContext } from "@client/Theme/context/ThemeContext/ThemeContextProvider";
import { THEMES } from "@client/Theme/context/ThemeContext/ThemeContext.constants";
import TextInput from "@components/atoms/inputs/TextInput/TextInput";
import DropdownList from "@components/molecules/DropdownList/DropdownList";
import ComplexIcon from "@components/molecules/ComplexIcon/ComplexIcon";
import Heading from "@components/molecules/Heading/Heading";
import Card from "@components/atoms/Card/Card";
import Text from "@components/atoms/Text/Text";

export const AppContent = () => {
  const [direction, setDirection] = React.useState("horizontal");

  return (
    <>
      <ThemeSetter />
      <TextInput
        size={"sm"}
        weight={"light"}
        color={"secondary"}
        className={"searchbar"}
        placeholder={"Search"}
      />
      <ComplexIcon icon={"envelope"} color={"primary"} />
      <Heading size={"xxl"} level={2} weight={"bold"}></Heading>
      <Card direction={direction}>
        <Card.Header>
          <Text tag={"h3"} size={"xxl"}>
            Name
          </Text>
        </Card.Header>
        <Card.Body>
          <Text tag={"p"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            consectetur dolorem earum magni quasi repudiandae. Ab asperiores
            blanditiis consequuntur error ipsa provident quasi sed tempore
            tenetur veritatis. Asperiores autem labore libero modi nisi nobis
            omnis quis repellat. Ad architecto cupiditate doloremque non
            sapiente sunt velit vero voluptatibus? Autem debitis delectus dicta
            dolore earum, esse excepturi iste magnam maiores minus mollitia
            necessitatibus nihil obcaecati omnis quae quas, quidem quis
            reiciendis sed sit soluta ut voluptas. Aliquid amet aspernatur
            consectetur consequatur culpa cum distinctio dolor ea eos est illum
            itaque, minima modi, nesciunt odio quia quisquam ratione recusandae
            sed sint ullam vel voluptate voluptatibus. Beatae dicta, impedit
            itaque nostrum omnis qui repudiandae temporibus tenetur voluptates.
            Assumenda cumque dicta eaque eligendi maxime molestiae nulla
            perspiciatis quasi quibusdam quisquam quo sapiente ullam, ut
            voluptas, voluptatem! Adipisci alias atque fugit labore laborum
            minus obcaecati omnis placeat provident quibusdam? Aliquid
            aspernatur cumque dicta dolorem nemo praesentium quae ut velit
            voluptate. Dolores fuga iusto magnam odio sed tempore ut voluptates.
            Ab aliquam ducimus minima officiis, omnis perferendis placeat
            recusandae repudiandae rerum voluptatibus. Alias aliquid architecto
            commodi debitis distinctio earum eos error exercitationem fugiat id
            in, iure libero magni molestias nihil odio quibusdam quis
            repudiandae suscipit tenetur voluptatibus.
          </Text>
        </Card.Body>
        <Card.Footer>Cats</Card.Footer>
      </Card>
      <button
        onClick={() =>
          setDirection(direction =>
            direction === "horizontal" ? "vertical" : "horizontal"
          )
        }
      >
        Change direction
      </button>
    </>
  );
};

const themeDropdownOptions = Object.entries(THEMES).map(([key, value]) => {
  return { label: key, value };
});

export const ThemeSetter = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <DropdownList
      options={themeDropdownOptions}
      onChange={setTheme}
      initialSelected={theme}
      color={"secondary"}
    />
  );
};

const HomePage = () => {
  return <AppContent />;
};

export default HomePage;
