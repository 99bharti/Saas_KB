import React from 'react';
import Giscus from '@giscus/react';

export default function GiscusComments() {
  return (
    <Giscus
      repo="your-github-username/your-repo"
      repoId="your-repo-id"
      category="General"
      categoryId="your-category-id"
      mapping="title"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="light"
      lang="en"
      loading="lazy"
    />
  );
}
