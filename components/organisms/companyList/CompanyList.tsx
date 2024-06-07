"use client";

import { Container, Typography } from "@mui/material";
import { useContext } from "react";
import { TodoContext } from "../../../contexts/TodoProvider";
import { List } from "@material-ui/core";
import CompanyItem from "../companyItem/CompanyItem";

const CompaniesList = () => {
  const { companyData } = useContext(TodoContext);

  return (
    <Container
      maxWidth="xl"
      sx={{ background: "#1976d2", padding: "8px 0", mt: 1 }}
    >
      <Typography variant="h2" fontSize={18} color="#fff">
        Companies List
      </Typography>

      {companyData?.length ? (
        <List>
          {companyData.map((company, index) => (
            <CompanyItem
              key={company.companyId}
              {...company}
              companyNumber={index + 1}
            />
          ))}
        </List>
      ) : (
        <h3>No company</h3>
      )}
    </Container>
  );
};
export default CompaniesList;
