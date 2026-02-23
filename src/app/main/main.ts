import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main implements OnInit, OnDestroy {
  private firstObservableSubscribtion!: Subscription;

  ngOnInit(): void {
    const customObservable = new Observable<number>((observer) => {
      let count = 0;

      const intervalId = setInterval(() => {
        observer.next(count);

        if (count === 4) {
          observer.complete();
        }

        if (count > 5) {
          observer.error(new Error('COUNT is greater than 5'));
        }

        count++;
      }, 1000);

      // cleanup
      return () => {
        clearInterval(intervalId);
        console.log('Observable destroyed');
      };
    });

    this.firstObservableSubscribtion = customObservable
      .pipe(map((data) => 'Round ' + (data + 1)))
      .subscribe({
        next: (data) => {
          console.log('value:', data);
        },
        error: (err) => {
          console.error('Error:', err.message);
        },
        complete: () => {
          console.log('Completed');
        },
      });
  }

  ngOnDestroy(): void {
    this.firstObservableSubscribtion.unsubscribe();
  }
}
