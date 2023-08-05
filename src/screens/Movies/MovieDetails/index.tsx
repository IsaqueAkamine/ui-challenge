import React, { useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import useMovies from "../../../hooks/useMovies";
import { MovieProps, GenreProps } from "../../../constants/movieTypes";
import Header from "../../../components/Header";

import {
  Container,
  Genre,
  MovieImage,
  RatingContainer,
  SafeArea,
  Title,
} from "./movie-details.styles";
import { utils } from "../../../utils";
import Rating from "../../../components/Rating";

function MovieDetails(): React.ReactNode {
  const { fetchData } = useMovies();
  const navigation = useNavigation();
  const { movie } = useRoute().params;
  // console.log("MOVIE old=> ", movie);
  const abortController = new AbortController();

  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState<MovieProps>();

  // async function getMovieDetails() {
  //   try {
  //     setLoading(true);
  //     const fetch = await fetchData(`/titles/${movie.id}`, {
  //       params: {
  //         info: "base-info",
  //       },
  //       signal: abortController.signal,
  //     });

  //     console.log("MOVIE DATAs=> ", fetch.data);

  //     setMovieInfo(fetch.data);
  //   } catch (err: any) {
  //     throw new Error(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  useEffect(() => {
    // getMovieDetails();
    setMovieInfo(movie);
  }, []);

  return (
    <SafeArea>
      <Header iconColor="#000" containerStyle={{ paddingHorizontal: 28 }} />
      <Container>
        <MovieImage
          source={
            movie?.primaryImage?.url
              ? { uri: movieInfo?.primaryImage?.url }
              : require("../../../assets/images/movie-img-cover.jpeg")
          }
          resizeMode="cover"
        />
        <Title>{movieInfo?.titleText.text}</Title>
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
      </Container>
    </SafeArea>
  );
}

export default MovieDetails;
