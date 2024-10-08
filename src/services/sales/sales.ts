/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * Interview API
 * Documentation for interview endpoints
 * OpenAPI spec version: 1.0.0
 */
import { useQuery } from "react-query";
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import type { GetApiSalesRevenue200Item } from "../../models";
import { mainAxios } from ".././mainAxios";
import type { ErrorType } from ".././mainAxios";

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * @summary Get sales revenue data
 */
export const getApiSalesRevenue = (
  options?: SecondParameter<typeof mainAxios>,
  signal?: AbortSignal,
) => {
  return mainAxios<GetApiSalesRevenue200Item[]>(
    { url: `/api/sales/revenue`, method: "GET", signal },
    options,
  );
};

export const getGetApiSalesRevenueQueryKey = () => {
  return [`/api/sales/revenue`] as const;
};

export const getGetApiSalesRevenueQueryOptions = <
  TData = Awaited<ReturnType<typeof getApiSalesRevenue>>,
  TError = ErrorType<void>,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getApiSalesRevenue>>,
    TError,
    TData
  >;
  request?: SecondParameter<typeof mainAxios>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetApiSalesRevenueQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getApiSalesRevenue>>
  > = ({ signal }) => getApiSalesRevenue(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getApiSalesRevenue>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetApiSalesRevenueQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiSalesRevenue>>
>;
export type GetApiSalesRevenueQueryError = ErrorType<void>;

/**
 * @summary Get sales revenue data
 */

export function useGetApiSalesRevenue<
  TData = Awaited<ReturnType<typeof getApiSalesRevenue>>,
  TError = ErrorType<void>,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getApiSalesRevenue>>,
    TError,
    TData
  >;
  request?: SecondParameter<typeof mainAxios>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetApiSalesRevenueQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}
