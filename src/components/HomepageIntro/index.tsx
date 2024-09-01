import { Grid2, Typography } from "@mui/material";

export default function HomepageIntro(): JSX.Element {
  return (
    <Grid2 container spacing={2} marginBottom={10}>
      <Grid2
        container
        size={6}
        direction="column"
        display="flex"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Grid2
          size={12}
          display="flex"
          justifyContent="left"
          alignItems="center"
          offset={3}
          style={{ maxWidth: "-webkit-fill-available" }}
        >
          <h1 className="main-text">
            Hi there. I am An.
            <br />A Backend Developer
          </h1>
        </Grid2>
        <Grid2
          size={12}
          display="flex"
          justifyContent="left"
          alignItems="center"
          offset={3}
          style={{ maxWidth: "-webkit-fill-available" }}
        >
          <h2 className="secondary-text">
            I'm also a solution architect with a keen eye for designing
            workflows and bringing doodles to life.
          </h2>
        </Grid2>
      </Grid2>
      <Grid2 size={6} paddingLeft="10vw">
        <img src="img/introImageNoBG.png"></img>
      </Grid2>
    </Grid2>
  );
}
