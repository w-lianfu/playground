Rx.Observable.fromEvent(button, 'click')
  .subscribe(() => console.log('clicked'));

Rx.Observable.fromEvent(button, 'click')
  .scan(count => count + 1, 0)
  .subscribe(count => console.log(`clicked ${count} times`));

Rx.Observable.fromEvent(button, 'click')
  .throttleTime(1000)
  .scan(count => count + 1, 0)
  .subscribe(count => console.log(`clicked ${count} times`));

Rx.Observable.fromEvent(button, 'click')
  .throttleTime(1000)
  .map(event => event.clientX)
  .scan((count, clientX) => count + clientX, 0)
  .subscribe(count => console.log(count));

var observable = Rx.Observable.create((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 1000);
});

var foo = Rx.Observable.create((observer) => {
  console.log('hello');
  observer.next(42);
});
foo.subscribe(x => console.log(x));

var observable = Rx.Observable.create(function subscribe(observer) {
  var id = setInterval(() => {
    observer.next('hi');
  }, 1000);
});

// --------------------------------------

let observable = Rx.Observable.create(function subscribe(observer) {
  let id = setInterval(() => {
    observer.next('hi');
  }, 1000);
});

let subscription = observable.subscribe(x => console.log(x));

setTimeout(() => {
  subscription.unsubscribe();
}, 10000);

// --------------------------------------

















































































































































































































































































































































































































































































































