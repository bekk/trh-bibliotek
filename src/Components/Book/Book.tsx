import classNames from 'classnames';
import { BooksDTO } from '~/DTO';
import styles from './Book.module.scss'

type BookProps = {
  book: BooksDTO;
  className?: string;
};

export function Book({ className, book }: BookProps) {
  return <div className={ classNames(className, styles.book) }>{book?.title}</div>;
}
