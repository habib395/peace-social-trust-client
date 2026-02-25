import { baseApi } from "@/redux/baseApi";

export interface Project {
  _id: string;
  title: string;
  image: string;
  shortDescription: string;
  collectionAmount: string;
}

export interface ProjectsResponse {
  success: boolean;
  projects: Project[];
}

export const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query<ProjectsResponse, void>({
      query: () => ({
        url: "activity/list",
        providesTags: ["Activity"],
      }),
    }),
  }),
});

export const { useGetProjectsQuery } = projectApi;
