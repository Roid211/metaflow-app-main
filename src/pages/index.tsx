/* eslint-disable react/no-unescaped-entities */
// COMPONENTS
import { MainLayout, Container, Text, Button } from "@metaflow/components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <MainLayout py={32} px={16}>
      <Container variant="flexColCenter" className="w-full gap-[40px]">
        <Container variant="flexColCenter">
          <Image src="/images/gatoazul.jpg" width={144} height={100} alt="" />
          <Text variant="default" type="h1" className="geo-font">
            inicioyregistro
          </Text>
          <Text variant="default" type="p2">
            by roid
          </Text>
        </Container>
        <Container variant="flexColCenter" className="w-full">
          <Button 
          onPress={() => {
            router.push("/auth/login");
          }}
          variant="primary" fullWidth={true}>
            Login
          </Button>
          <Container variant="flexRowLeft" className="gap-[8px]">
            <Text variant="default" type="p1">
              Don't have an account?
            </Text>
            <Button
              variant="text"
              className="px-[0px] py-[0px]"
              onPress={() => {
                router.push("/auth/sign-up");
              }}
            >
              Sign up
            </Button>
          </Container>
        </Container>
        <Container variant="flexRowCenter" className="gap-[16px]">
          <Container
            variant="unstyled"
            className="w-[64px] h-[1px] bg-light-on-surface-dark"
          />
          <Text variant="default" type="p1">
            or
          </Text>
          <Container
            variant="unstyled"
            className="w-[64px] h-[1px] bg-light-on-surface-dark"
          />
        </Container>
        <Container variant="unstyled" className="w-full">
          <Button
            variant="secondary"
            fullWidth={true}
            icon={{
              position: "leading",
              component: (
                <Image
                  src="/images/google-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              ),
            }}
            className="border-light-on-surface"
          >
            <Text variant="default" type="p1">
              Sign in with Google
            </Text>
          </Button>
        </Container>
        <Container variant="flexColCenter" className="w-full">
          <Text variant="default" type="p1">
            Continue if you agree to our
          </Text>
          <Container variant="flexRowCenter" className="gap-[8px]">
            <Link className="text-light-primary" href="/">
              Terms & Conditions
            </Link>
            <Text variant="default" type="p1">
              and
            </Text>
            <Link className="text-light-primary" href="/">
              {" "}
              Privacy Policy
            </Link>
          </Container>
        </Container>
      </Container>
    </MainLayout>
  );
}
