import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router";

//Schema define here
// eslint-disable-next-line react-refresh/only-export-components
export const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["admin", "staff"]),
});

const RegistrationForm = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "staff",
    },
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    const toastId = toast.loading("Creating account...");

    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
    };

    try {
      const res = await register(userInfo).unwrap();
      toast.success("Register successfully!");
      form.reset();

      if(res.user.role === "admin"){
        navigate("/admin")
      }else if(res.user.role === "staff"){
        navigate("/staff")
      }else{
        navigate("/")
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error);
      console.error(error?.data?.message || "Registration failed", {
        id: toastId,
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full sm:max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Register Now</CardTitle>
          <CardDescription>
            Choose your role carefully to access the dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="register-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              {/* name field */}
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="reg-name">Enter Name</FieldLabel>
                    <Input
                      {...field}
                      id="reg-name"
                      // aria-invalid={fieldState.invalid}
                      placeholder="Type Name"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              {/* email field */}
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="reg-email">Enter Email</FieldLabel>
                    <Input
                      {...field}
                      id="reg-email"
                      type="email"
                      // aria-invalid={fieldState.invalid}
                      placeholder="Type Name"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              {/* password field */}
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="reg-pass">Enter Password</FieldLabel>
                    <Input
                      {...field}
                      id="reg-pass"
                      type="password"
                      // aria-invalid={fieldState.invalid}
                      placeholder="Type Password"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              {/* role input */}
              <Controller
                name="role"
                control={form.control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FieldLabel htmlFor="reg-role">Select Role</FieldLabel>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="staff">Staff</SelectItem>
                    </SelectContent>

                  </Select>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-2">
          <Field orientation="horizontal">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
              disabled={isLoading}
            >
              Reset
            </Button>
            <Button type="submit" form="register-form">
              {isLoading ? "Processing..." : "Create Account"}
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegistrationForm;
