import { baseApi } from "@/redux/baseApi";

export interface Fund {
    _id: string;
    name: string;
    image: string;
    description: string;
    category: {
      _id: string;
      name: string;
    };
    status: string;
    amountCollected: {
      donations: number;
      collections: number;
      fromProjects: number;
      total: number;
    };
    createdAt?: string; 
    updatedAt?: string;
  }

  export interface FundsResponse {
    success: boolean;
    funds: Fund[]
  }

export const fundsApiSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getFunds: builder.query<FundsResponse, void>({
            query: () => ({
                url: "fund/list",
                method: "GET",
            }),
            providesTags: ["Funds"]
        })
    })
})

export const { useGetFundsQuery } = fundsApiSlice;