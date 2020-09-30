import React from 'react';
import Tag from './Tag';

type Props = {
  tags: string[];
};

function TagList({ tags }: Props) {
  return (
    <div>
      {tags.map((tag: string, idx) => (
        <Tag key={idx} name={tag} />
      ))}
    </div>
  );
}

export default TagList;