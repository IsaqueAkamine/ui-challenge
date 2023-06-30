import {
  ButtonNavigate,
  Container,
  Description,
  GroupScreens,
  Title,
} from "./onboard-first-screen.style";
import OnboardImage1 from "../../../assets/images/onboardingImg1.svg";

export default function OnboardingScreen1() {
  return (
    <Container>
      <OnboardImage1 />

      <Title>Products you love</Title>
      <Description>
        Grow your business by accepting card payments with a new card reader
      </Description>

      <GroupScreens />
      <ButtonNavigate />
    </Container>
  );
}
