import { useGetProjectsQuery } from "@/redux/features/project/ProjectApiSlice";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const Project = () => {
    const {data} = useGetProjectsQuery();
    const project = data?.activities || [];
    console.log(project)
    return (
        <div className="w-11/12 mx-auto">
                      <h3 className="font-extrabold text-4xl py-6 sm:py-10 text-emerald-600 text-center mb-2">
            Activities
          </h3>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            project?.map((item: any) => 
                <Card key={item._id} className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
              src={item?.image}
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover  dark:brightness-40"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="secondary">{item?.expenseCategories?.split(' ')[0]}</Badge>
              </CardAction>
              <CardTitle>{item?.title?.split(' ').slice(0, 3).join(' ')}</CardTitle>
              <CardDescription>
                {item?.shortDescription}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full">View Event</Button>
            </CardFooter>
          </Card>
            )
        }
    </div>
        </div>
    );
};

export default Project;