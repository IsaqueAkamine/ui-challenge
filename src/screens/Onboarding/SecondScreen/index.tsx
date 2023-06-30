import {
  Body,
  ButtonContainer,
  ButtonNavigate,
  Container,
  Description,
  GroupScreens,
  Title,
} from "./onboard-second-screen.style";
import OnboardImage1 from "../../../assets/images/onboardingImg2.svg";
import NextIcon from "../../../assets/icons/next-icon.svg";

export default function OnboardingScreen2() {
  return (
    <Container>
      <OnboardImage1 width="100%" />
      <Body>
        <Title>Instant Notifications</Title>
        <Description>
          Instant notifications let you quickly see what your favorite stores
          have shared
        </Description>

        <GroupScreens />
        <ButtonContainer>
          <ButtonNavigate>
            <NextIcon />
          </ButtonNavigate>
        </ButtonContainer>
      </Body>
    </Container>
  );
}
