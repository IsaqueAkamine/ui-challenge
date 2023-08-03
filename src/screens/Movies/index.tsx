import React, { useEffect, useState } from "react";
import { Alert, FlatList, SafeAreaView } from "react-native";
import { useTranslation } from "react-i18next";
import useMovies from "../../hooks/useMovies";
import {
  AvatarImage,
  Container,
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
import HorizontalMovieSkeleton from "../../components/Skeletons/HorizontalMovieSkeleton";
import VerticalMovieSkeleton from "../../components/Skeletons/VerticalMovieSkeleton";

interface MovieProps {
  id: string;
  titleText: { text: string };
  primaryImage: { url: string; caption: { plainText: string } };
  releaseYear: { year: number };
}

export default function Movies() {
  const image = require("../../assets/images/profile-img.jpg");
  const { t } = useTranslation();
  const { fetchData } = useMovies();
  const abortController = new AbortController();

  const [popularMovieList, setPopularMovieList] = useState<MovieProps[]>([]);
  const [loadingPopularMovieList, setLoadingPopularMovieList] = useState(false);
  const [forYouMovieList, setForYouMovieList] = useState<MovieProps[]>([]);
  const [loadingForYouMovieList, setLoadingForYouMovieList] = useState(false);
  const [loadingApiData, setLoadingApiData] = useState(false);

  function HorizontalMovies(item: MovieProps) {
    return (
      <HorizontalMovieContainer>
        <HorizontalMovieImgCover
          source={
            item?.primaryImage?.url
              ? { uri: item?.primaryImage?.url }
              : require("../../assets/images/movie-img-cover.jpeg")
          }
          resizeMode="cover"
        />
        <MovieTitle numberOfLines={2} ellipsizeMode="tail">
          {item?.primaryImage?.caption?.plainText
            ? item?.primaryImage?.caption?.plainText
            : item.titleText.text}
        </MovieTitle>
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
        <VerticalMovieContainer>
          <VerticalMovieImgCover
            source={
              item?.primaryImage?.url
                ? { uri: item?.primaryImage?.url }
                : require("../../assets/images/movie-img-cover.jpeg")
            }
            resizeMode="cover"
          />
          <VerticalMovieInfoContainer>
            <VerticalMovieTitle numberOfLines={2} ellipsizeMode="tail">
              {item?.primaryImage?.caption?.plainText
                ? item?.primaryImage?.caption?.plainText
                : item.titleText.text}
            </VerticalMovieTitle>
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
      setLoadingPopularMovieList(true);
      const fetch = await fetchData("/titles", {
        params: {
          list: "most_pop_movies",
          sort: "year.decr",
        },
        signal: abortController.signal,
      });
      setPopularMovieList(fetch.data);
    } catch (err: any) {
      throw new Error(err);
    } finally {
      setLoadingPopularMovieList(false);
    }
  }

  async function getMoviesForYou() {
    try {
      setLoadingForYouMovieList(true);
      const fetch = await fetchData("/titles/x/upcoming", {
        params: {
          sort: "year.decr",
        },
        signal: abortController.signal,
      });
      setForYouMovieList(fetch.data);
    } catch (err: any) {
      throw new Error(err);
    } finally {
      setLoadingForYouMovieList(false);
    }
  }

  function fetchMovieData() {
    setLoadingApiData(true);

    Promise.all([getMoviesPopularMovies(), getMoviesForYou()])
      .then(() => {
        setLoadingApiData(false);
      })
      .catch((error: any) => {
        // setLoadingApiData(false);
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
