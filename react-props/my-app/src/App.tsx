import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const h1Text: string = 'React Image Bank';
const imgSrc: string = '/starry-sky.jpeg';
const h3Text: string = 'A beautiful Image of Space';
const pText: string =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam incidunt sit dolorum accusantium sapiente reiciendis maxime dolores ullam delectus, commodi placeat eveniet, quam voluptates facere etmagnam architecto quaerat velit voluptas rerum quos asperiores quis in! Nemo aut aliquam quas dolore quaerat, error numquam odio modi eos vero. Modi nisi eos autem? Iusto hic impedit aspernatur labore quos nesciunt? Ad dolore pariatur aperiam nemo, maiores laboriosam quam quod nisi ipsum, dicta sunt laborum similique repellat';
const buttonText: string = 'Click For Next Image';

function App() {
  return (
    <>
      <Header headerText={h1Text} />
      <ImageContainer imageSource={imgSrc} />
      <ImageCaption imageText={h3Text} />
      <ImageDescription imageDescription={pText} />
      <ButtonContainer buttonTextContent={buttonText} />
    </>
  );
}

export default App;
