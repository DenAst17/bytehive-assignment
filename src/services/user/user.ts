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
import type { UserDto } from "../../models";
import { mainAxios } from ".././mainAxios";
import type { ErrorType } from ".././mainAxios";

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * @summary Get User Profile
 */
export const getUserProfile = (
  options?: SecondParameter<typeof mainAxios>,
  signal?: AbortSignal,
) => {
  return mainAxios<UserDto>(
    { url: `/api/user`, method: "GET", signal },
    options,
  );
};

export const getGetUserProfileQueryKey = () => {
  return [`/api/user`] as const;
};

export const getGetUserProfileQueryOptions = <
  TData = Awaited<ReturnType<typeof getUserProfile>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getUserProfile>>,
    TError,
    TData
  >;
  request?: SecondParameter<typeof mainAxios>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetUserProfileQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getUserProfile>>> = ({
    signal,
  }) => getUserProfile(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getUserProfile>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetUserProfileQueryResult = NonNullable<
  Awaited<ReturnType<typeof getUserProfile>>
>;
export type GetUserProfileQueryError = ErrorType<unknown>;

/**
 * @summary Get User Profile
 */

export function useGetUserProfile<
  TData = Awaited<ReturnType<typeof getUserProfile>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getUserProfile>>,
    TError,
    TData
  >;
  request?: SecondParameter<typeof mainAxios>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetUserProfileQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}
