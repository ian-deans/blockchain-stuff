import Block from './block'
import CryptoJS from 'crypto-js'


class Blockchain {
  constructor() {
    this.blockchain = [Block.genesis]
    this.difficulty = 4
  }

  get () {
    return this.blockchain
  }

  get latestBlock() {
    return this.blockchain[this.blockchain.length - 1]
  }

  get data() {
    return this.latestBlock.data
  }

  mine(seedData) {
    const newBlock = this.generateNextBlock(seedData)
    if (this.addBlock(newBlock)) {

    }
  }

  addBlock(newBlock) {
    if(this.isValidNewBlock(newBlock, this.latestBlock)) {
      this.blockchain.push(newBlock)
      return true
    }
    return false
  }

  calculateHashForBlock(block) {
    return this.calculateHashForBlock(block.index, block.previousHash, block.timestamp, block.data, block.nonce)
  }

  calculateHash(index, previousHash, timestamp, data, nonce) {
    return CryptoJS.SHA256(index + previousHash + timestamp + data + nonce).toString()
  }

  isValidNewBlock(newBlock, previousBlock) {
    const blockHash = this.calculateHashForBlock(newBlock)

    if (previousBlock.index + 1 !== newBlock.index) {
      console.log('new block has invalid index.')
      return false
    } else if (previousBlock.hash !== newBlock.previousHash) {
      console.log('new block has invalid previous hash.')
      return false
    } else if (blockHash !== newBlock.hash) {
      console.log(`Invalid hash: ${blockHash} ${newBlock.hash}`)
      return false
    } else if (!this.isValidHashDifficulty(blockHash)) {
      console.log(`invalid hash does not meet difficulty requirements: ${blockHash}`)
      return false
    }
    return true
  }

  generateNextBlock(blockData) {
    const previousBlock = this.latestBlock
    const nextIndex = previousBlock.index + 1
    const nextTimestamp = new Date().getTime() / 1000
    const nextData = this.generateNextPokeData({name: blockData, statStuff: 900}, previousBlock.data)
    let nonce = 0
    let nextHash = ''
    while(!this.isValidHashDifficulty(nextHash)) {
      nonce = nonce + 1
      nextHash = this.calculateHash(nextIndex, previousBlock.hash, nextTimestamp, blockData, nextHash, nonce)
    }
  }

  generateNextPokeData(
    pokeData = {name: 'ButtFace McFartsalot', statStuff: 32}, 
    previousData
  ) {
    return [...previousData, pokeData]
  }

  isValidHashDifficulty(hash) {
    for(var i = 0; i < hash.length; i++) {
      if(hash[i] !== '0') {
        break;
      }
    }
    return i === this.difficulty
  }

}

export default new Blockchain()