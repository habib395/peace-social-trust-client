import { useGetFundsQuery } from "@/redux/features/adminQueries/fundsApiSlice";
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
const Fund = () => {
    const {data} = useGetFundsQuery();
    const funds = data?.funds || [];
    console.log(funds)
    return (
        <div className="w-11/12 mx-auto">
            <div className="w-full py-6 sm:py-16 text-center">
            <h3 className="font-extrabold text-4xl text-emerald-600 mb-2">
            Donation Funds
          </h3>
          <p className="text-gray-600 py-2">
            Let's make change together.
          </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {
                funds.map((item) =>
                    <Card key={item._id} className="relative mx-auto w-full max-w-sm pt-0">
                <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                <img
                  src={item?.image}
                  alt="Event cover"
                  className="relative z-20 aspect-video w-full object-cover  dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                    <Badge variant="secondary">{item?.status}</Badge>
                  </CardAction>
                  <CardTitle>{item?.name}</CardTitle>
                  <CardDescription>
                    {item?.description}
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

export default Fund;