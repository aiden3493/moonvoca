import { Client, Entity, Schema, Repository } from "redis-om";

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

class Vocabulary extends Entity {}
let schema = new Schema(
  Vocabulary,
  {
    id: { type: "string" },
    name: { type: "string", textSearch: true },
    description: { type: "string" },
    wordsNum: { type: "number" },
    words: { type: "string" },
    createdAt: { type: "date" },
  },
  {
    dataStructure: "JSON",
  }
);

export async function deployVocabulay(VocabularyData) {
  await connect();

  const repository = client.fetchRepository(schema);

  const vocabulary = repository.createEntity(VocabularyData);

  const id = await repository.save(vocabulary);
  return id;
}

export async function createIndex() {
  await connect();

  const repository = client.fetchRepository(schema);

  await repository.createIndex();
}

export async function searchVocabulary(q) {
  await connect();

  const repository = client.fetchRepository(schema);

  const vocabulary = await repository
    .search()
    .where("id")
    .eq(q)
    .or("name")
    .eq(q)
    .or("description")
    .matches()
    .return.all();
}
