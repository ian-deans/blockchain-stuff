import {default as store} from './blockchain'

console.log(store.data)

store.mine('Grubdon')

console.log(store.data)