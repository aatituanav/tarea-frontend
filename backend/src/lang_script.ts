const { OpenAI } = require("@langchain/openai");
import { RetrievalQAChain } from "langchain/chains";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { TextLoader } from "langchain/document_loaders/fs/text";

export const process_doc = async (
  filename: string | undefined,
  question: string
) => {
  const model = new OpenAI({
    modelName: "gpt-3.5-turbo-instruct", // Defaults to "gpt-3.5-turbo-instruct" if no model provided.
    temperature: 0,
  });

  const loader = new TextLoader(`uploads/${filename}`);

  const doc = await loader.load();

  const vectorStore = await MemoryVectorStore.fromDocuments(
    doc,
    new OpenAIEmbeddings()
  );
  console.log(vectorStore);

  const vectorStoreRetriever = vectorStore.asRetriever();

  const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);

  return await chain.call({
    query: "sdfsd",
  });
};
