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


// eslint-disable-next-line react-refresh/only-export-components
export const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password is required"),
});
const LoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log(data)
  }

  return (
    <div>
      <Card className="w-full sm:max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Login Now</CardTitle>
          <CardDescription>
            Give data carefully to access the dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* <form id="register-form" onSubmit={form.handleSubmit(onSubmit)}> */}
          <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              {/* email field */}
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="reg-name">Enter Email</FieldLabel>
                    <Input
                      {...field}
                      id="reg-email"
                      type="email"
                      // aria-invalid={fieldState.invalid}
                      placeholder="Type Email"
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
                    <FieldLabel htmlFor="reg-name">Enter Password</FieldLabel>
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
            </FieldGroup>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-2">
          <Field orientation="horizontal">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
            //   disabled={isLoading}
            >
              Reset
            </Button>
            <Button type="submit" form="login-form">
              {/* {isLoading ? "Processing..." : "Create Account"} */}
              login
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
