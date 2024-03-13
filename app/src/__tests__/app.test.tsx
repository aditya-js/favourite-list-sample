import "@testing-library/jest-dom";
import App from "../App";
import { screen, render } from "@testing-library/react";

const MockData = [
  {
    id: 1,
    title: "Sample Title",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
    favorite: true,
  },
];

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => {
    return MockData;
  },
}));

describe("App test", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("when favorite is available", async () => {
    await render(<App />);

    expect(screen.getByText("Sample Title")).toBeInTheDocument();
    expect(screen.getByText("DashBoard")).toBeInTheDocument();
  });
});
