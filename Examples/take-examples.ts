import { Observable, Observer } from 'rxjs';
import { map, takeUntil, takeWhile, tap } from 'rxjs/operators';



export function TakeExamples() {
const numbers$ = Observable.create((observer: Observer<number>) => {
    let count : number = 0;
    const interval = setInterval(() => {
        observer.next(count++);
    }, 1000);

    return () => clearInterval(interval);
}
);

// use the switchMap operator to map the values emitted by numbers$ to a new observable
numbers$
    .takeUntil(x => x > 5).subscribe(x => console.log(x));


// uses the switchScan operator to accumulate the values emitted by numbers$. 
// The lambda function passed to switchScan takes two arguments: accumulator and value.
numbers$.pipe(
    tap(x => console.log(`value in tap: ${x}`)),
    map(y => y * 2),
    tap(x => console.log(`value after tap: ${x}`)),
    takeWhile( x => x < 5, true), // inclusive
    ).subscribe()    ;
}
