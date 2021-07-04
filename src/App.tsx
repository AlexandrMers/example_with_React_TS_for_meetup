import React, { FC } from "react";

import Button, { ButtonSize, ButtonType } from "@/components/Button";

interface AppComponentPropsInterface {
  id?: string;
}

const App: FC<AppComponentPropsInterface> = (props) => {
  return (
    <div>
      <div>App component here</div>

      <Button typeButton={ButtonType.PRIMARY}>Регистрация</Button>
      <Button
        typeButton={ButtonType.SECONDARY}
        sizeButton={ButtonSize.MIDDLE}
        onClick={() => {
          console.log("click run");
        }}
      >
        Сбросить
      </Button>
      <Button typeButton={ButtonType.SECONDARY} sizeButton={ButtonSize.LARGE}>
        Large
      </Button>
    </div>
  );
};

export default App;
