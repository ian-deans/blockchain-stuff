import datetime as date

from block import Block


def create_genesis_block():
  return Block(0, date.datetime.now(), "Genesis Block", "0")

class Blockchain:
  
  def __init__(self):
    self.chain = [create_genesis_block()]
    self.difficulty = 4
    self.latest_block = self.chain[len(self.chain) - 1]

  def add_block(self, data):
    new_block = Block(self.latest_block.index + 1, date.datetime.now(), data, self.latest_block.hash)