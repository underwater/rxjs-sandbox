import * as Rx from 'rxjs';

export function NumberExamples() {

    // .create obsolete, use .new
    const numbers$ = Rx.Observable.create((observer: Rx.Observer<number>) => {
        let count = 0;
        const interval = setInterval(() => {
            observer.next(count++);
        }, 1000);

        return () => clearInterval(interval);
    }
    );

    numbers$.subscribe((value: number) => {
        console.log(`value: ${value}`);
    }
    );


    numbers$.subscribe((value: number) => {
        console.log(`2 x value: ${2 * value}`);
    });

}
