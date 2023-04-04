import openai from "@/lib/chatgpt";
import { NextApiRequest, NextApiResponse } from "next";

type Option = {
  value: string;
  label: string;
};

type Data = {
  modelOptions: Option[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const models = await openai.listModels().then((res) => res.data.data);

  const modelOptions = models.map((model) => ({
    value: model.id,
    label: model.id,
  }));

  res.status(200).json({ modelOptions });
}
