export default `
interface ERC20Transaction {
  tokenContract: TokenContract
}

type ERC20Transfer implements DecodedTransaction & ERC20Transaction {
  entity: Entity
  standard: String
  operation: String
  from: TokenHolder
  to: TokenHolder
  value: String
  tokenContract: TokenContract
}

type ERC20TransferFrom implements DecodedTransaction & ERC20Transaction {
  entity: Entity
  standard: String
  operation: String
  from: TokenHolder
  to: TokenHolder
  value: String
  spender: TokenHolder
  tokenContract: TokenContract
}

type ERC20Approve implements DecodedTransaction & ERC20Transaction {
  entity: Entity
  standard: String
  operation: String
  from: TokenHolder
  spender: TokenHolder
  value: String
  tokenContract: TokenContract
}

type ERC20TransferEvent implements DecodedLog {
  entity: Entity
  standard: String
  event: String
  from: TokenHolder
  to: TokenHolder
  value: String
}

type ERC20ApprovalEvent implements DecodedLog {
  entity: Entity
  standard: String
  event: String
  owner: TokenHolder
  spender: TokenHolder
  value: String
}
`;
