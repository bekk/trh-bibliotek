import classNames from 'classnames';
import { Book } from '~/Components';
import { BookDTO } from '~/DTO';
import styles from './BookGrid.module.scss';

type BookGridProps = {
  books: BookDTO[];
  className?: string;
};

export function BookGrid({ className, books }: BookGridProps) {
  return (
    <div className={classNames(className, styles.bookGrid)}>
      {books.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </div>
  );
}
