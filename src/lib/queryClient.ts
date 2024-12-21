import { isServer, QueryClient, QueryClientConfig } from '@tanstack/react-query'

const queryOptions: QueryClientConfig = {
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60,
			gcTime: 1000 * 60,
		},
	},
}

const makeQueryClient = () => {
	return new QueryClient(queryOptions)
}

let browserQueryClient: QueryClient | undefined = undefined

export const getQueryClient = () => {
	if (isServer) {
		return makeQueryClient()
	} else {
		if (!browserQueryClient) browserQueryClient = makeQueryClient()
		return browserQueryClient
	}
}
