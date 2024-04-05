import express from 'express';
import { errorMiddleware, ClientError } from './lib/index.js';

type Note = {
  id: number;
  content: string;
};

const app = express();

app.get('/api/notes', async (req, res, next) => {
  try {
    // use try catch as client
    const notes = await readNotes(); // simulates functionality of an api call, so need try/catch w await.. need async up there.. readNotes() would be like our api
    res.send(notes); // either sending the data back to the client
  } catch (err) {
    // or an error back to the client
    next(err); // goes to errorMiddleware.. its checking if clienterror object, it's not- so it will go to the else which sends 500
  }
});

app.post('/api/notes', async (req, res, next) => {
  try {
    const { content } = req.query; // destructing content property from query property from req object and storying it into content
    if (content === undefined) {
      // need content to add to the note
      throw new ClientError(400, 'content is required');
    }
    const note = {
      // posting a new note
      id: Math.floor(100 * Math.random()),
      content: String(content), // making sure content is a string
    };
    await writeNote(note); // if something crashes while we are trying to write it, it will go to catch which will be a 500 error bc not on the client.. when its our fault, we send the 500 back
    res.send(note);
  } catch (err) {
    next(err);
  }
});

app.put('/api/notes', async (req, res, next) => {
  try {
    const { id, content } = req.query; // anything we pass as a query param. we access id and content
    if (id === undefined) {
      // confirm id is not empty
      throw new ClientError(400, 'id is required'); // u need an id
    }
    if (content === undefined) {
      // is there content
      throw new ClientError(400, 'content is required'); // if not, throw an error
    }
    const note = {
      // updating a note. we need the id of the note, and the content we will use to update the note
      id: +id, // convert the string value to make sure its a number... same as number(id)
      content: String(content), // converting content to string
    };
    await writeNote(note);
    res.send(note); // client gets note if all went well
  } catch (err) {
    console.error(err); // if there was something wrong, client would get message
    next(err);
  }
});

app.delete('/api/notes', async (req, res, next) => {
  try {
    const { id } = req.query; // require an id
    if (id === undefined) {
      throw new ClientError(400, 'content is required'); // if not, tell client they need an id
    }
    await deleteNote(+id);
    res.send(`deleted ${id}`); // saying we deleted it
  } catch (err) {
    console.error(err);
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});

//* **** Mock data handling functions

async function readNotes(): Promise<Note[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() >= 0.2
        ? resolve([
            { id: 8, content: 'Error handling middleware is great' },
            { id: 12, content: 'Express is easy!' },
            { id: 3, content: 'Simplicity itself' },
          ])
        : reject(new Error('What bad luck! Read error.')); // this gets sent to server.. when this happens the server crashes
    }, 10);
  });
}

async function writeNote(note: Note): Promise<Note> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() >= 0.2
        ? resolve(note)
        : reject(new Error('What bad luck! Write error.'));
    }, 10);
  });
}

async function deleteNote(id: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() >= 0.2
        ? resolve(id)
        : reject(new Error('What bad luck! Delete error.'));
    }, 10);
  });
}
