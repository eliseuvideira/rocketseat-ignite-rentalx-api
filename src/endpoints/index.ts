import { endpoint } from "@ev-fns/endpoint";

export const indexGetOne = endpoint(async (req, res) => {
  const item = {
    message: "Hello World 👋!",
  };

  res.status(200).json(item);
});
