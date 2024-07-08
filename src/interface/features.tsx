export default interface kObj {
  "UNLIMITED STORY POSTING": deeperKObj;
  "UNLIMITED PHOTO UPLOAD": deeperKObj;
  "EMBEDDING CUSTOM CONTENT": deeperKObj;
  "CUSTOMIZE METADATA": deeperKObj;
  "ADVANCED METRICS": deeperKObj;
  "PHOTO DOWNLOADS": deeperKObj;
  "SEARCH ENGINE INDEXING": deeperKObj;
  "CUSTOM ANALYTICS": deeperKObj;
}

export interface deeperKObj {
  Basic: boolean;
  Pro: boolean;
  Business: boolean;
}
