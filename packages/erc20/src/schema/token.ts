export default `
type TokenHolder {
  account: Account!
  tokenBalance: Long
}

type TokenContract {
  account: Account
  symbol: String
  totalSupply: Long
}
`;
