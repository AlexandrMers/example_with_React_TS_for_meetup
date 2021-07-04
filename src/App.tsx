import React, { FC } from "react";

interface AppComponentPropsInterface {
  id?: string;
}

const App: FC<AppComponentPropsInterface> = (props) => {
  return (
    <div>
      <div>App component here</div>
    </div>
  );
};

export default App;
