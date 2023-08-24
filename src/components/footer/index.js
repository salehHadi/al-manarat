import { Box, Grid, List, ListItemText, Typography } from "@mui/material";
import { FooterTitle } from "../../Styles/footer";
import { Colors } from "../../Styles/theme";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Form from "../form/index";

export default function Footer() {
  return (
    <Box
      sx={{
        background: Colors.dark,
        color: Colors.lightGrayL,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: "12px", md: "14px" },
      }}
    >
      <Grid container spacing={2} justifyContent={"start"}>
        <Grid item md={6}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: Colors.lightGrayL,
            }}
          >
            <Facebook sx={{ mr: 1 }} />
            <Twitter sx={{ mr: 1 }} />
            <Instagram />
          </Box>
        </Grid>
        <Grid item md={3} xs={6} justifyContent={"left"}>
          <FooterTitle variant="body1">Information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="cation2">
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="cation2">
                Our Project
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="cation2">
                Our Services
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="cation2">
                Our Uniquenes
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Form />
      </Grid>
    </Box>
  );
}
