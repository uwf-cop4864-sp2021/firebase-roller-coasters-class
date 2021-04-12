import { Injectable } from '@angular/core';
import { Coaster } from './coaster-model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class CoasterService {

  public coasters$: Observable<Coaster[]>;
  public coasterCollectionRef;

  constructor( private firestore: AngularFirestore ) { 

    this.coasterCollectionRef = this.firestore.collection<Coaster>('coasters');
    this.coasters$ = this.coasterCollectionRef.valueChanges();

  }

  /** Filter and return coasters for a given continent */
  public getCoastersByContinent(continent: string): Observable<Coaster[]> {
    return this.firestore.collection<Coaster>('coasters',
      ref => ref.where('location', '==', continent)
    ).valueChanges();

  }

  /** Create a new coaster in the db */
  public createCoaster( newCoaster: object ): Promise<void> {
    return this.coasterCollectionRef.add(newCoaster);
  }
}
