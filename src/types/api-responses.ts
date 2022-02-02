export type ProofApiResponse = {
  proof: string[]
}

export type DropApiResponse = {
  address: string
  collectionId: string
  version: number
}

export type ErrorApiResponse = {
  message: string
}
