import  Fastify from 'fastify'
// import  {uuid} from "uuid"
import routes from './Route';

//Beginner Code

const app   =Fastify({logger: true})
const PORT =process.env.PORT||3000
app.register(routes)
// To enable request.body-> Middleware
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

let todos = [];

app.post("/todos", (req, res) => {
  console.log("Body: ", req.body);
  const { title } = req.body;
  if (!title) {
    return res.status(400).send({ message: "Please enter title first" });
  }
  res.send({ message: "Welcome to todos" });
});

app.get(
  "/dhiraj",
  (req, res, next) => {
    // Fail -> res.send (Send Response back to the caller)
    // Pass -> Okay, go to my next fn
  },
  (req, res) => {
    // After next, it will come here
  }
);
(async () => {
    try {
      app.listen({ port: PORT });
      // DB coonection
    } catch (err) {
      app.log.error(err);
      process.exit(1);
    }
  })(); 