import React, { FC } from "react";

import MyComponent from "@/components/MyComponent";

import styles from "./style.module.scss";

interface AppComponentPropsInterface {
  id?: string;
}

const App: FC<AppComponentPropsInterface> = (props) => {
  return (
    <div>
      <div className={styles.main}>App component here</div>
      <MyComponent />
    </div>
  );
};

export default App;
