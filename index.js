import express, { request, response } from "express";
import morgan from "morgan";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("build"));

app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      JSON.stringify(req.body),
      tokens["response-time"](req, res),
      "ms",
    ].join(" ");
  })
);

let persons = [
  {
    id: 1,
    name: "Arthas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((p) => p.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).json({
      error: "Person not found",
    });
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((p) => p.id !== id);
  response.status(204).end();
});

const generateId = () => {
  const max = persons.length > 0 ? Math.max(...persons.map((p) => p.id)) : 0;
  return max + 1;
};

const existPerson = (name) => {
  return persons.find((p) => p.name === name);
};

app.post("/api/persons", (request, response) => {
  const body = request.body;
  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  };
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "Name or number is required",
    });
  }
  if (existPerson(body.name)) {
    return response.status(400).json({
      error: "Name already exists in the phonebook",
    });
  }

  persons = [...persons, person];

  response.json(person);
});

app.get("/api/info", (request, response) => {
  const html = `
    <div>
      <p>Phonebook has info for ${persons.length} people</p>
      <p>${new Date()}</p>
    </div>`;
  response.send(html);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
