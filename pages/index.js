import * as React from "react";
import { Box, Typography } from "@mui/material";
import Layout from "components/Layout/Layout";
import Fab from "@mui/material/Fab";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "components/Link";

export default function Index() {
  return (
    <Layout>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography
            component="span"
            sx={{
              color: "primary.main",
              fontWeight: "700",
              fontSize: "10rem",
              letterSpacing: "-0.6rem",
            }}
          >
            Code
          </Typography>
          <Typography
            component="span"
            sx={{
              color: "secondary.main",
              fontWeight: "700",
              fontSize: "10rem",
              letterSpacing: "-0.6rem",
            }}
          >
            Rage
          </Typography>
          <Typography
            component="span"
            sx={{
              color: "primary.main",
              fontWeight: "700",
              fontSize: "3rem",
              letterSpacing: "-0.1rem",
            }}
          >
            .io
          </Typography>
        </Box>
        <Typography variant="h2">
          Starter Kit for Next.js + Material UI
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "120%" }} gutterBottom>
          Based on the{" "}
          <a href="https://github.com/mui/material-ui/blob/master/examples/nextjs/README.md">
            Next.js/MUI example
          </a>{" "}
          by <a href="https://github.com/siriwatknp">siriwatknp</a>
        </Typography>
        <Typography variant="body2">
          Brought to you from Portland, Oregon, by{" "}
          <a href="https://www.linkedin.com/in/dfellini/">Daniel Fellini</a>
        </Typography>
        <Typography variant="body2" sx={{ mt: 4 }}>
          Hosted over at <a href="https://vercel.com/">Vercel</a> because they
          so rock shit hard.
        </Typography>

        <Typography variant="body2" sx={{ mt: 4 }}>
          <Link href="/sample">Sample page</Link>
        </Typography>
      </Box>
    </Layout>
  );
}
