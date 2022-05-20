import { Client, Entity, Repository, Schema } from "redis-om";

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
    name: { type: "text", textSearch: true },
    words: { type: "string" },
    wordsNum: { type: "number" },
    description: { type: "text", textSearch: true },
  },
  {
    dataStructure: "JSON",
  }
);
export async function createVocabulary(data) {
  await connect();

  const repository = client.fetchRepository(schema);

  const vocabulary = repository.createEntity(data);

  const id = await repository.save(vocabulary);
  return id;
}

export async function createIndex() {
  await connect();

  const repository = client.fetchRepository(schema);
  await repository.createIndex();
}

export async function searchWholeVocabulary(q) {
  await connect();

  const repository = client.fetchRepository(schema);

  const vocabulary = await repository.search().return.all();

  return vocabulary;
}

export async function searchVocabulary(q) {
  await connect();

  const repository = client.fetchRepository(schema);

  const vocabulary = await repository
    .search()
    .where("name")
    .matches(q)
    .return.all();

  return vocabulary;
}
