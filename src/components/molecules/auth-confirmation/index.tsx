import { Container, Text, Button } from "@metaflow/components";
import { useRouter } from "next/router";

const AuthConfirmation = () => {
    const router = useRouter();

    return(
    <Container variant="flexColCenter" className="gap-[12px] py-[24px]">
        <Text variant="default" type="h1">Genial</Text>
        <Text variant="default" type="p1">Ve a login y mira si funciona con los mismos datos que diste (email and password) </Text>
        <Button
              variant="text"
              className="px-[0px] py-[0px]"
              onPress={() => {
                router.push("/");
              }}
            >
              Home
            </Button>
    </Container>
    )
}
export default AuthConfirmation;