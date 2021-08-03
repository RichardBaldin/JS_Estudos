const { from, Observable} = require('rxjs')


function primeiro() {
    return function(source) {
        return Observable.create(susbcriber => {
            source.subscribe({
                next(v) {
                    susbcriber.next(v),
                    susbcriber.complete()
                }
            })
        })
    }
}

function nenhum() {
    return function(source) {
        return Observable.create(susbcriber => {
            source.subscribe({
                next(v) {
                    susbcriber.complete()
                }
            })
        })
    }
}

function ultimo() {
    return function(source) {
        return Observable.create(susbcriber => {
            let ultimo
            source.subscribe({
                next(v) {
                    ultimo = v
                },
                complete() {
                    susbcriber.next(ultimo)
                    susbcriber.complete()
                }
            })
        })
    }
}

from([1, 2, 3, 4, 5])
    .pipe(
      //  primeiro(),
    //nenhum(),
        ultimo())
    .subscribe(console.log)