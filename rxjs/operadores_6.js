const { from, Observable} = require('rxjs')


function createPipeableOperator(operatorFn) {
    return function(source) {
        return Observable.create(subscriber => {
                const sub  = operatorFn(subscriber)
                source.subscribe(operatorFn({
                    next: sub.next,
                    error: sub.error || (e => subscriber.error(e)),
                    complete: sub.complete || (e => subscriber.complete(e)),
                }))
        })
    }
}

function primeiro() {
    return createPipeableOperator(subscriber => {
           return {
               next (v) {
                subscriber.next(v)
                subscriber.complete()
               },
               complete () {

               }
           }
    })
    // return createPipeableOperator((subscriber, v) => {
    //     subscriber.next(v),
    //     subscriber.complete()
    // })
}

function nenhum() {
        return {
            next (v) {
             subscriber.complete()
            }
        }
}

function ultimo() {
    let ultimo
    return createPipeableOperator(subscriber => ({
        next(v) {
                ultimo = v
            },
            complete() {
                subscriber.next(ultimo)
                subscriber.complete()
            }
    }))
    }

from([1, 2, 3, 4, 5])
    .pipe(
    // primeiro(),
    //nenhum(),
     ultimo()
    )
    .subscribe(console.log)