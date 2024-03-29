import { useState } from 'react';
import { Topic } from './App';
import { TopicCard } from './TopicCard';

type Props = {
  topics: Topic[];
};

export function Accordion({ topics }: Props) {
  // const title = topics.map((n) => <TopicCard topic={n}/>); //can describe, but if simple dont need
  const [topic, setTopic] = useState<Topic>(); //keeps track of what current topic is, the one we clicked on

  function handleClick(newTopic: Topic) {
    if (topic === newTopic) {
      console.log('topic:', topic);
      setTopic(undefined); //this closes our current open topic
    } else {
      console.log('newtopic,', newTopic);
      setTopic(newTopic); //this opens the topic we clicked on. this handles the new topic card we clicked on
    }
  }

  return (
    <div>
      {topics.map((newTopic) => (
        <TopicCard
          onClick={() => handleClick(newTopic)}
          isOpen={topic === newTopic}
          key={newTopic.id}
          topic={newTopic}
        />
      ))}
    </div>
  );
}
