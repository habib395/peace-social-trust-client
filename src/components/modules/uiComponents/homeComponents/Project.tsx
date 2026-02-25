import { useGetProjectsQuery } from "@/redux/features/project/ProjectApiSlice";

const Project = () => {
    const {data} = useGetProjectsQuery();
    console.log(data)
    return (
        <div>
            project
        </div>
    );
};

export default Project;