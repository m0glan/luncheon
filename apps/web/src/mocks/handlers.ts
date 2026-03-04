import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/welcome", () => {
    return HttpResponse.json({ message: "Welcome to Luncheon!" });
  }),
];