"use client";
import { Container, Typography } from "@mui/material";
import { useContext } from "react";
import { TodoContext } from "../../../contexts/TodoProvider";
import { List } from "@material-ui/core";
import CompanyItem from "../companyItem/CompanyItem";

const CompaniesList = () => {
  // Using Todo Context
  const { companyData } = useContext(TodoContext);

  return (
    <Container
      maxWidth="xl"
      sx={{ background: "#1976d2", padding: "8px 0", mt: 1 }}
    >
      <Typography variant="h2" fontSize={18} color="#fff">
        Companies List
      </Typography>

      <List>
        {companyData.map((company, index) => (
          <CompanyItem
            key={`company-item__${company.companyId}`}
            {...company}
            companyNumber={index + 1}
          />
        ))}
      </List>
    </Container>
  );
};

export default CompaniesList;
