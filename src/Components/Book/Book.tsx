import { Button } from '@mui/material';
import classNames from 'classnames';
import { BooksDTO } from '~/DTO';
import styles from './Book.module.scss';

type BookProps = {
  book: BooksDTO;
  className?: string;
};

export function Book({ className, book }: BookProps) {
  const count = book?.antall || 0;
  const borrowers = book?.Låntetakere?.length || 0;
  const available = count - borrowers;
  const isAvailable = available > 0;
  const statusColor = isAvailable ? 'green' : 'red';
  return (
    <div className={classNames(className)}>
      <span className={styles.bookStatus} style={{ backgroundColor: statusColor }}>
        Ledige: {available}/{count}
      </span>
      <div className={styles.book}>
        <div>{book?.title}</div>
        <Button variant="contained" color="success">
          Lån
        </Button>
      </div>
    </div>
  );
}
