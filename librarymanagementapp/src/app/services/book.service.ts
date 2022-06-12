import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
}
getBooks(): Observable<IBook[]> {
  const booksRef = collection(this.firestore, 'books');
  return collectionData(booksRef, { idField: 'id' }) as Observable<IBook[]>;
}