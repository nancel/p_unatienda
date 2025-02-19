import { GraphQLClientSingleton } from 'app/graphql'
import { customerName } from 'app/graphql/queries/customerName'
import { cookies } from 'next/headers'

export const validateAccessToken = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')?.value
  if (!accessToken) {
    return null
  }
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const { customer } = await graphqlClient.request(customerName, {
    customerAccessToken: accessToken
  })
  return customer
}