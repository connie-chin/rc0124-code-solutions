import { Topic } from './App';

type Props = {
  topic: Topic;
  isOpen: boolean;
  onClick: () => void;
};

export function TopicCard({ topic, isOpen, onClick }: Props) {
  return (
    <div onClick={onClick} className="cards-container">
      <h1 className="topic-card">{topic.title}</h1>
      {isOpen && <p className="content">{topic.content}</p>}
    </div>
  );
}

//line 13 if isOpen is true, aka u just clicked on it, then it will display the text content
//type prop are only used for attributes of the html tag
//components are html tags, props are what we create to put on the components

//line 3 is there for line 9 to know what its getting
