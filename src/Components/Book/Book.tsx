import classNames from 'classnames';
import { useState } from 'react';
import { BookDTO } from '~/DTO';
import styles from './Book.module.scss';

type BookProps = {
  book: BookDTO;
  className?: string;
};

export function Book({ className, book }: BookProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const count = book?.antall || 0;
  const borrowers = book?.Låntetakere?.length || 0;
  const available = count - borrowers;
  const isAvailable = available > 0;
  const statusColor = isAvailable ? 'green' : 'red';
  const btnTitle = isAvailable ? 'Lån bok' : 'Utlånt';

  function borrowHandler(event: React.MouseEvent) {
    event.stopPropagation(); // Prevent flipping card when pressing button.
    console.log(1, event);
    // console.log(book);
    // book.patch();

    // const newBook: Partial<BookDTO> = { antall: count + 1 };
    // updateBook(book.id, newBook).then((r) => console.log(r));
    // borrow(book.id, book, { Name: 'haha' });
  }

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
        <div className={isFlipped ? styles.visible : styles.hidden}>{book?.title}</div>
        {/* Backside */}
        <div className={isFlipped ? styles.hidden : styles.visible}>
          <div>{book?.authors}</div>
          <br />
          <div style={{ fontSize: '1.3em' }}>Lånetakere:</div>
          {book?.Låntetakere?.map((user, i) => (
            <div key={i}>{user}</div>
          ))}
          <button title={btnTitle} disabled={!isAvailable} onClick={borrowHandler}>
            Lån
          </button>
        </div>
      </div>
    </div>
  );
}
