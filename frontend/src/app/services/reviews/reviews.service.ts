import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  private baseUrl = 'http://localhost:3030/api';

  constructor( private http : HttpClient) { }



  // Star reviews that belong to a user
  getTeacherStars(userId) {
    //const starsRef = this.afs.collection('stars', ref => ref.where('userId', '==', userId) );
    //return starsRef.valueChanges();
    return this.http.get(`${this.baseUrl}/reviews/findbyid`, userId);
  }
  // Get all stars that belog to a Movie
  getTeacherComments(userId){

  }
  
  // Get all stars that belog to a Movie
  /*getMovieStars(movieId) {
    const starsRef = this.afs.collection('stars', ref => ref.where('movieId', '==', movieId) );
    return starsRef.valueChanges();
  }*/

  // Create or update star
  /*setStar(userId, movieId, value) {
    // Star document data
    const star: Star = { userId, movieId, value };

    // Custom doc ID for relationship
    const starPath = `stars/${star.userId}_${star.movieId}`;

    // Set the data, return the promise
    return this.afs.doc(starPath).set(star)
  }*/
}
