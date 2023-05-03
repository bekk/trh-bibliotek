import { Attachment } from 'airtable';

/** Must be compatible with FieldSet from airtable. */
export type BookDTO = {
  id: string;
  title?: string;
  authors?: string;
  publisher?: string;
  ISBN?: string;
  year?: number;
  antall?: number;
  Låntetakere?: ReadonlyArray<string>;
  // Cover?: Cover;
  Cover?: ReadonlyArray<Attachment>;
};

export type Thumbnail = {
  height?: number;
  url?: string;
  width?: number;
};

export type UserDTO = {
  id: string;
  Name?: string;
};
