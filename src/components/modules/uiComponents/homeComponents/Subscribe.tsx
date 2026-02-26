import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddSubscriptionMutation } from "@/redux/features/subscribe/subscribeApiSlice";
import { useState } from "react";
import { toast } from "sonner";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [addSubscription, { isLoading }] = useAddSubscriptionMutation();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending Email:", { email: email });

    if (!email) return toast.error("Please enter an email");

    try {
      const res = await addSubscription({ email: email }).unwrap();
      if (res.success) {
        toast.success("Successfully subscribed!");
        setEmail("");
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to subscribe");
    }
  };

  return (
    <div className="border my-6 border-emerald-600 relative sm:-top-16 md:top-24 w-11/12 mx-auto rounded-xl p-2 md:p-3 z-20">
      <div className="border bg-gray-50 border-emerald-600 bg-cover bg-center rounded-xl flex flex-col items-center py-8 px-4 md:py-10 md:px-6">
        <div className="font-bold text-lg sm:text-2xl py-3 md:py-5 text-gray-800">
          <h3 className="font-bold text-lg sm:text-3xl py-2 md:py-5 text-emerald-600">
            Subscribe to receive regular newsletters
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-4">
          <Input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
