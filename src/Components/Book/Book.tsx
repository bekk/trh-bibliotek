import { Button } from '@mui/material';
import classNames from 'classnames';
import { useState } from 'react';
import { BookDTO } from '~/DTO';
import styles from './Book.module.scss';

type BookProps = {
  book: BookDTO;
  className?: string;
};

export function Book({ className, book }: BookProps) {
  const count = book?.antall || 0;
  const borrowers = book?.Låntetakere?.length || 0;
  const available = count - borrowers;
  const isAvailable = available > 0;
  const statusColor = isAvailable ? 'green' : 'red';
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      className={classNames(className, styles.wrapper, isFlipped ? styles.flipped : styles.unflipped)}
    >
      <span className={styles.bookStatus} style={{ backgroundColor: statusColor }}>
        Ledige: {available}/{count}
      </span>
      <div className={classNames(styles.book)}>
        {/* Frontside */}
        {!isFlipped && <div>{book?.title}</div>}
        {/* Backside */}
        {isFlipped && (
          <>
            <div>{book?.authors}</div>
            <Button variant="contained" color="success">
              Lån
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
