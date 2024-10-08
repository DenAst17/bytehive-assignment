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
import type { GetApiProducts200Item } from "../../models";
import { mainAxios } from ".././mainAxios";
import type { ErrorType } from ".././mainAxios";

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * @summary Get top sales products
 */
export const getApiProducts = (
  options?: SecondParameter<typeof mainAxios>,
  signal?: AbortSignal,
) => {
  return mainAxios<GetApiProducts200Item[]>(
    {
      url: `/api/products`,
      method: "GET",
      signal,
    },
    options,
  );
};

export const getGetApiProductsQueryKey = () => {
  return [`/api/products`] as const;
};

export const getGetApiProductsQueryOptions = <
  TData = Awaited<ReturnType<typeof getApiProducts>>,
  TError = ErrorType<void>,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getApiProducts>>,
    TError,
    TData
  >;
  request?: SecondParameter<typeof mainAxios>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetApiProductsQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiProducts>>> = ({
    signal,
  }) => getApiProducts(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getApiProducts>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetApiProductsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiProducts>>
>;
export type GetApiProductsQueryError = ErrorType<void>;

/**
 * @summary Get top sales products
 */

export function useGetApiProducts<
  TData = Awaited<ReturnType<typeof getApiProducts>>,
  TError = ErrorType<void>,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getApiProducts>>,
    TError,
    TData
  >;
  request?: SecondParameter<typeof mainAxios>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetApiProductsQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}
