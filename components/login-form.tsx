import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Authentication from "@/app/_components/Authentication"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden shadow-lg rounded-2xl">
        <CardContent className="grid p-0 md:grid-cols-2 h-[500px]">

          {/* Left Side - Google Login */}
          <div className="relative flex flex-col items-center justify-center p-8 text-center  bg-[#271d3f]">

            {/* Decorative shapes */}
            <div className="absolute top-4 left-4 h-16 w-16 rounded-full bg-pink-200 opacity-70 blur-2xl"></div>
            <div className="absolute bottom-6 right-6 h-20 w-20 rounded-full bg-blue-200 opacity-60 blur-2xl"></div>

            <div className="relative z-10">
              <h1 className="text-3xl font-extrabold text-white">Welcome back 👋</h1>
              <p className="text-muted-foreground mb-10 mt-4`">
                Sign in to your <span className="">Account</span>
              </p>
            </div>

            <Authentication>
              <Button
                variant="outline"
                className="relative z-10 w-full flex items-center gap-2 border-white text-white hover:bg-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    fill="currentColor"
                  />
                </svg>
                <span className="font-medium ">Login with Google</span>
              </Button>
            </Authentication>
          </div>

          {/* Right Side - Image */}
          <div className="relative hidden md:block">
            <img
              src="/login.jpg" // replace with illustration or stock photo
              alt="Login illustration"
              className="absolute inset-0 h-[500px] w-full object-cover rounded-r-2xl"
            />
            {/* subtle overlay for vibrance */}
            <div className="absolute inset-0 bg-white/20 mix-blend-overlay"></div>
          </div>

        </CardContent>
      </Card>

      <div className="text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
