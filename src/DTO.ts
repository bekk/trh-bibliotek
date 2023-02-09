export type BooksDTO = {
  id: string;
  title?: string;
  authors?: string;
  publisher?: string;
  ISBN?: string;
  year?: number;
  antall?: number;
  Låntetakere?: string[];
  Cover?: Cover;
};

export type Cover = {
  filename?: string;
  height?: number;
  id?: string;
  size?: number;
  thumbnails?: Thumbnails;
  type?: string;
  url?: string;
  width?: number;
};

export type Thumbnail = {
  height?: number;
  url?: string;
  width?: number;
};

export type Thumbnails = {
  full?: Thumbnail;
  large?: Thumbnail;
  small?: Thumbnail;
};

export type UserDTO = {
  id: string;
  Name?: string;
};
