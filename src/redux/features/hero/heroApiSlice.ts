import { baseApi } from "@/redux/baseApi";

interface HeroData {
    id: number;
    title: string;
    image: string;
  }

  interface HeroResponse {
    success: boolean;
    banners: HeroData[];
  }

export const heroApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getHero: builder.query<HeroResponse, void>({
            query: () => ({
                url: "banner/list",
                method: "GET",
            }),
            providesTags: ["Hero"],
        })
    })
});

export const { useGetHeroQuery } = heroApi;