import React from "react";
import Header from "@pages/shared/Header/Header";
import NavigationBar from "@pages/shared/NavigationBar/NavigationBar";
import PageContent from "@pages/shared/PageContent/PageActions";
import Container from "@components/layouts/Containers/ContainerFluid";

const HomePage = () => {
  return (
    <>
      <Container type={"fluid"} tag={"header"}>
        <Header title={"Super Store"} icon={"holly-berry"} />
        <NavigationBar />
      </Container>

      <PageContent>
        {({ layout }) => {
          return <p>{layout} </p>;
        }}
      </PageContent>
    </>
  );
};

export default HomePage;
