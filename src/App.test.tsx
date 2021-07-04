import React from "react";
import { render, screen } from "@testing-library/react";

// Components
import App from "@/App";

describe("src/App.tsx", () => {
  describe("App", () => {
    it('отобразится текст "React App with custom webpack config"', async () => {
      render(<App />);
      const title = await screen.findByText(/App component here/i);
      expect(title).toBeInTheDocument();
    });
  });
});
