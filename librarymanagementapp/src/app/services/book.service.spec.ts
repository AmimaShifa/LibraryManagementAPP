import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IBook } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private firestore: Firestore) { }

  addBook(book: IBook) {
    const booksRef = collection(this.firestore, 'books'); 
    return addDoc(booksRef, book);
  }
  deleteBook(book: IBook) {
    const bookDocRef = doc(this.firestore, `books/${book.id}`);
    return deleteDoc(bookDocRef);
}
getBookByID(id: string) {
  const bookRef = doc(this.firestore, `books/${id}`);
  return docData(bookRef, { idField: 'id' }) as Observable<IBook>;
}

updateBook(book: IBook) {
  const bookDocRef = doc(this.firestore, `books/${book.id}`);
  return setDoc(bookDocRef, book);
}

modifyBookPrice(book: IBook, amount: number) {
  const bookDocRef = doc(this.firestore, `books/${book.id}`);
  return updateDoc(bookDocRef, { price: amount });
}
}

