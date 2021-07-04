import React, { FC } from "react";

import Container from "@/components/Container";
import Typography from "@/components/Typography";
import FormRegistration from "@/containers/FormRegistration";

const App: FC = () => {
  return (
    <div>
      <Container>
        <Typography
          style={{
            marginBottom: 25
          }}
        >
          Регистрация
        </Typography>
        <FormRegistration />
      </Container>
    </div>
  );
};

export default App;
