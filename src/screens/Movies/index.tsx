import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import apiMovies from "../../services/apiMovies";
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

interface MovieProps {
  id: string;
  titleText: { text: string };
  primaryImage: { url: string };
  releaseYear: { year: number };
}

export default function Movies() {
  const image = require("../../assets/images/profile-img.jpg");

  const [popularMovieList, setPopularMovieList] = useState<MovieProps[]>([]);

  const options = {
    method: "GET",
    // url: "https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D",
    url: "https://moviesdatabase.p.rapidapi.com/titles",
    params: {
      list: "most_pop_movies",
      sort: "year.decr",
    },
    headers: {
      "X-RapidAPI-Key": process.env.EXPO_PUBLIC_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.EXPO_PUBLIC_RAPIDAPI_HOST,
    },
  };

  async function getMovies() {
    try {
      const response = await apiMovies.request(options);
      console.log(response.data);
      const { results } = response.data;
      // console.log(results);
      setPopularMovieList(results);
    } catch (error) {
      console.error(error);
    }
  }

  function HorizontalMovies(item: MovieProps) {
    return (
      <HorizontalMovieContainer>
        <HorizontalMovieImgCover
          source={{ uri: item.primaryImage.url }}
          resizeMode="cover"
        />
        <MovieTitle numberOfLines={1} ellipsizeMode="tail">
          {item.titleText.text}
        </MovieTitle>
        <Description>genre</Description>
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
          <Title>For You</Title>
        </>
      );
    }
    return <></>;
  }

  function VerticalMovies(item: MovieProps) {
    return (
      <>
        <VerticalMovieContainer>
          <VerticalMovieImgCover
            source={{ uri: item.primaryImage.url }}
            resizeMode="cover"
          />
          <VerticalMovieInfoContainer>
            <VerticalMovieTitle numberOfLines={1} ellipsizeMode="tail">
              {item.titleText.text}
            </VerticalMovieTitle>
            <Description>Genre</Description>
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

  useEffect(() => {
    getMovies();
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
            data={popularMovieList}
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
