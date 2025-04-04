type Subscription = {
  periodEnd: number
  periodStart: number
  credidCard: creditCard
  name: String
  price: number
  billingInterval: string
  id: string
}
type creditCard = {
  cardLastDigits: string
  cardBrand: string
  cardExpiration: string
  name: string
}
