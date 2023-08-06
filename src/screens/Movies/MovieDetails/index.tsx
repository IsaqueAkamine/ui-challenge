import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

import { MovieProps } from "../../../interfaces/movieTypes";
import Header from "../../../components/Header";
import Rating from "../../../components/Rating";
import { utils } from "../../../utils";

import {
  AboutButton,
  AboutButtonIcon,
  AboutButtonText,
  AboutContainer,
  BuyButton,
  BuyButtonText,
  Container,
  FavoriteIcon,
  Genre,
  MovieImage,
  PlotText,
  RatingContainer,
  SafeArea,
  Title,
} from "./movie-details.styles";

function MovieDetails(): React.ReactNode {
  const { movie } = useRoute().params;

  const [movieInfo, setMovieInfo] = useState<MovieProps>();
  const [isFavorite, setIsFavorite] = useState(false);

  function renderFavoriteIcon() {
    return (
      <FavoriteIcon
        name={isFavorite ? "heart" : "heart-o"}
        size={24}
        onPress={() => {
          setIsFavorite(!isFavorite);
        }}
      />
    );
  }

  useEffect(() => {
    setMovieInfo(movie);
  }, []);

  return (
    <SafeArea>
      <Header
        iconColor="#000"
        containerStyle={{ paddingHorizontal: 28 }}
        rightButton={renderFavoriteIcon}
      />
      <Container contentContainerStyle={{ flex: 1, alignItems: "center" }}>
        <MovieImage
          source={
            movie?.primaryImage?.url
              ? { uri: movieInfo?.primaryImage?.url }
              : require("../../../assets/images/movie-img-cover.jpeg")
          }
          resizeMode="cover"
        />
        <Title>
          {movieInfo?.titleText.text} ({movieInfo?.releaseYear?.year})
        </Title>
        {movieInfo?.genres?.genres && (
          <Genre>{utils.renderGenres(movieInfo?.genres?.genres)}</Genre>
        )}

        {movieInfo?.ratingsSummary?.aggregateRating && (
          <RatingContainer>
            <Rating
              rating={movieInfo?.ratingsSummary.aggregateRating / 2}
              iconStyle={{
                marginLeft: 3,
              }}
            />
          </RatingContainer>
        )}
        {movieInfo?.plot?.plotText?.plainText && (
          <PlotText>{movieInfo?.plot?.plotText?.plainText}</PlotText>
        )}

        <AboutContainer>
          <AboutButton>
            <AboutButtonIcon name="play" size={24} color="#000" />
            <AboutButtonText>Preview</AboutButtonText>
          </AboutButton>
          <AboutButton>
            <AboutButtonIcon name="message1" size={24} color="#000" />
            <AboutButtonText>Reviews</AboutButtonText>
          </AboutButton>
        </AboutContainer>

        <BuyButton>
          <BuyButtonText>Buy Now for $12.99</BuyButtonText>
        </BuyButton>
      </Container>
    </SafeArea>
  );
}

export default MovieDetails;
