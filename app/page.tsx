import ButtonGradient from "@/app/assets/svg/ButtonGradient";
import Button from "@/components/button";

export default function Home() {
  return (
    <main>
      <h1>Brainwave</h1>
      <ButtonGradient/>
      <Button style={""} href={""} white={false} px={""}>
        the button
      </Button>
    </main>
  );
}
