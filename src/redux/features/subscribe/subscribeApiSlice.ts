import { baseApi } from "@/redux/baseApi";

export interface Subscriber {
  _id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface SubscriptionResponse {
  success: boolean;
  subscribers: Subscriber[];
}

export const subscribeApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    addSubscription: builder.mutation<SubscriptionResponse, { email: string }>({
        query: (data) => ({
            url: "newsletter/subscribe",
            method: "POST",
            data: data,
        }),
        invalidatesTags: ["Subscribe"]
    })
  }),
});

export const {  useAddSubscriptionMutation } = subscribeApiSlice;
