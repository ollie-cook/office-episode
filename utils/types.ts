export type EpisodeType = {
  tconst: string;
  seasonNumber: number;
  episodeNumber: number;
  image: {
      id: string;
      width: number;
      height: number;
      url: string;
      caption: {
          plainText: string;
          __typename: string;
      };
      __typename: string;
  };
  title: string;
  orginialTitle: string;
}