import { expect, test } from "vitest";
import routes from "../app/routes";

test("health: the application declares a home route", () => {
  expect(routes).toEqual(
    expect.arrayContaining([expect.objectContaining({ index: true })]),
  );
});
