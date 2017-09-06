import {SHA256} from 'crypto-js'
import Pokemon from './pokemon'

export default class Block {
  static get genesis () {
    return new Block(
      0,
      1504730238526,
      Pokemon,
      '0',
      'e83c3f73fc4a15f1f8070319f7f22f622232dae2ceca4ccc60c6a37e851d3059',
      56551
    )
  }

  constructor(
    index = 0,
    timestamp,
    data = 'none',
    previousHash = '0',
    hash = '',
    nonce = 0
  ) {
    this.index = index
    this.data = data
    this.previousHash = previousHash
    this.hash = hash
    this.nonce = nonce
  }
}