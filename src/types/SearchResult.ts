export type SearchResult = {
  id: string;
  title: string;
  type: string;
  url: string;
};

export type SearchResults = SearchResult[];

export type SearchResponse = {
  results: SearchResults;
  time: number;
};
