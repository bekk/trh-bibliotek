import { FieldSet, Record, Records } from 'airtable';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { BookDTO } from '~/DTO';
/** Module for global generic types. */

/** Type for html button types. */
export type ButtonType = 'submit' | 'reset' | 'button';

/** Synonym for ReactNode, but easier to remember. */
export type Children = ReactNode;

/** Easy type when adding setStates to Context. */
export type SetState<T> = Dispatch<SetStateAction<T>>;

export type ATRecords = Records<FieldSet>;
export type ATRecord = Record<FieldSet>;

export type BooksAT = Records<BookDTO>;
export type BookAT = Record<BookDTO>;
export type UsersAT = Records<BookDTO>;
export type UserAT = Record<BookDTO>;
