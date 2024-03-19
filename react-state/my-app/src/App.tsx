import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCap } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';
const headerText: string = 'React Image Bank';
const imgSrc: string[] = [
  '/starry-sky.jpeg',
  '/pretty-clouds.jpeg',
  '/vintage-bathroom.jpeg',
];
const h3Text: string[] = [
  'A beautiful Image of Space',
  'A very peaceful scene of clouds',
  'A gorgeous green restroom',
];
const pText: string[] = [
  'The stars are so cool, being alive is awesome',
  'A very peaceful field with colorful clouds. a great place to relax when stressed',
  'A very cute vintage bathroom with lots of plants, tiles, gold accents and an old tub',
];
const buttonText: string = 'Click For Next Image';
function App() {
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSource={imgSrc} />
      <ImageCap imageText={h3Text} />
      <ImageDescription imageDescription={pText} />
      <ButtonContainer buttonText={buttonText} />
    </>
  );
}
export default App;
