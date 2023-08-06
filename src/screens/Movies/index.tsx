import React, { useEffect, useState } from "react";
import { Alert, FlatList, SafeAreaView } from "react-native";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import useMovies from "../../hooks/useMovies";
import {
  AvatarImage,
  Container,
  Description,
  FavoriteIcon,
  HeaderContainer,
  HeaderText,
  HorizontalMovieContainer,
  HorizontalMovieImgCover,
  MovieTitle,
  Title,
  VerticalMovieContainer,
  VerticalMovieImgCover,
  VerticalMovieInfoContainer,
  VerticalMovieTitle,
} from "./movies.styles";
import { SIZES } from "../../constants";
import { utils } from "../../utils";
import { MovieProps } from "../../interfaces/movieTypes";
import HorizontalMovieSkeleton from "../../components/Skeletons/HorizontalMovieSkeleton";
import VerticalMovieSkeleton from "../../components/Skeletons/VerticalMovieSkeleton";

export default function Movies() {
  const image = require("../../assets/images/profile-img.jpg");
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { fetchData } = useMovies();
  const abortController = new AbortController();

  const [popularMovieList, setPopularMovieList] = useState<MovieProps[]>([]);
  const [forYouMovieList, setForYouMovieList] = useState<MovieProps[]>([]);
  const [loadingApiData, setLoadingApiData] = useState(false);

  function HandleNavigateToMovieDetails(item: MovieProps) {
    navigation.navigate("MovieDetails", { movie: { ...item } });
  }

  function HorizontalMovies(item: MovieProps) {
    return (
      <HorizontalMovieContainer
        onPress={() => HandleNavigateToMovieDetails(item)}
      >
        <HorizontalMovieImgCover
          source={
            item?.primaryImage?.url
              ? { uri: item?.primaryImage?.url }
              : require("../../assets/images/movie-img-cover.jpeg")
          }
          resizeMode="cover"
        />
        <MovieTitle numberOfLines={1} ellipsizeMode="tail">
          {item.titleText.text} ({item.releaseYear.year})
        </MovieTitle>
        <Description numberOfLines={1} ellipsizeMode="tail">
          {utils.renderGenres(item.genres.genres)}
        </Description>
      </HorizontalMovieContainer>
    );
  }

  function HeaderMovies() {
    if (popularMovieList) {
      return (
        <>
          <HeaderContainer>
            <AvatarImage source={image} style={{ resizeMode: "center" }} />
            <HeaderText>Hi, User</HeaderText>
          </HeaderContainer>
          <Title>Popular Movies</Title>
          {loadingApiData ? (
            <HorizontalMovieSkeleton />
          ) : (
            <FlatList
              data={popularMovieList}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => HorizontalMovies(item)}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 20,
                paddingHorizontal: SIZES.padding,
              }}
            />
          )}
          <Title>For You</Title>
        </>
      );
    }
    return <></>;
  }

  function VerticalMovies(item: MovieProps) {
    if (loadingApiData) return <VerticalMovieSkeleton />;

    return (
      <>
        <VerticalMovieContainer
          onPress={() => HandleNavigateToMovieDetails(item)}
        >
          <VerticalMovieImgCover
            source={
              item?.primaryImage?.url
                ? { uri: item?.primaryImage?.url }
                : require("../../assets/images/movie-img-cover.jpeg")
            }
            resizeMode="cover"
          />
          <VerticalMovieInfoContainer>
            <VerticalMovieTitle numberOfLines={1} ellipsizeMode="tail">
              {item.titleText.text} ({item.releaseYear.year})
            </VerticalMovieTitle>
            <Description numberOfLines={1} ellipsizeMode="tail">
              {utils.renderGenres(item.genres.genres)}
            </Description>
            {/* <Rating>{item.rating}</Rating> */}
          </VerticalMovieInfoContainer>

          <FavoriteIcon
            // name={isFavorite ? "heart" : "heart-o"}
            name={"heart-o"}
            size={24}
            onPress={() => {}}
          />
        </VerticalMovieContainer>
      </>
    );
  }

  async function getMoviesPopularMovies() {
    try {
      const fetch = await fetchData("/titles", {
        params: {
          list: "most_pop_movies",
          sort: "year.decr",
          info: "base_info",
        },
        signal: abortController.signal,
      });
      setPopularMovieList(fetch.data);
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async function getMoviesForYou() {
    try {
      const fetch = await fetchData("/titles/x/upcoming", {
        params: {
          sort: "year.decr",
          info: "base_info",
        },
        signal: abortController.signal,
      });
      setForYouMovieList(fetch.data);
    } catch (err: any) {
      throw new Error(err);
    }
  }

  function fetchMovieData() {
    setLoadingApiData(true);

    Promise.all([getMoviesPopularMovies(), getMoviesForYou()])
      .then(() => {
        setLoadingApiData(false);
      })
      .catch((error: any) => {
        Alert.alert(error.message, t("notifications.Fail to fetch data"));
        if (abortController.signal.aborted) {
          console.log("Data fetching cancelled");
        } else {
          // Handle error
        }
      })
      .finally(() => {
        setLoadingApiData(false);
      });
  }

  useEffect(() => {
    fetchMovieData();
    return () => abortController.abort("Data fetching cancelled");
  }, []);

  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        {popularMovieList && (
          <FlatList
            ListHeaderComponent={HeaderMovies}
            ListHeaderComponentStyle={{
              marginHorizontal: -SIZES.padding,
            }}
            data={forYouMovieList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => VerticalMovies(item)}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              gap: 29,
              marginHorizontal: SIZES.padding,
            }}
          />
        )}
      </SafeAreaView>
    </Container>
  );
}
