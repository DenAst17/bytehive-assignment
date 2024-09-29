'use client'
import React from 'react'
import { QueryCache, QueryClient, QueryClientProvider, } from 'react-query'

type Props = {
    children: React.ReactNode
}

const QueryProvider = ({ children, }: Props,): React.ReactElement => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				keepPreviousData:     true,
				refetchOnMount:       false,
				refetchOnWindowFocus: false,
				refetchOnReconnect:   true,
				cacheTime:            Infinity,
			},
		},
		queryCache: new QueryCache(),
	},)
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default QueryProvider
