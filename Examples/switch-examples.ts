    import { Observable, Observer } from 'rxjs';
    import { switchMap, switchScan, mergeMap } from 'rxjs/operators';

 

export function NumberExamples() {
    const numbers$ = Rx.Observable.create((observer: Rx.Observer<number>) => {
        let count = 0;
        const interval = setInterval(() => {
            observer.next(count++);
        }, 1000);

        return () => clearInterval(interval);
    }
    );

    // use the switchMap operator to map the values emitted by numbers$ to a new observable
    numbers$.pipe(
        switchMap((value: number) => {
            console.log(`value: ${value}`);
            return new Observable<number>();
        })
    );


    // uses the switchScan operator to accumulate the values emitted by numbers$. 
    // The lambda function passed to switchScan takes two arguments: accumulator and value.
    numbers$.pipe(
        switchScan((value: number) => {
            console.log(`value: ${value}`);
            return new Observable<number>();
        }, 0)
    );
}
