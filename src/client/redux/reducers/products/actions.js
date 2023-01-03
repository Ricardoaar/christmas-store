import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../../../api/ApiInstance";

export const FETCH_USERS = "@products/fetchProducts";

export const fakePromise = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        results: [
          {
            id: 41,
            title: "Handmade Fresh Table",
            price: 687,
            description: "Andy shoes are designed to keeping in...",
            category: {
              id: 5,
              name: "Others",
              image: "https://placeimg.com/640/480/any?r=0.591926261873231"
            },
            images: [
              "https://placeimg.com/640/480/any?r=0.9178516507833767",
              "https://placeimg.com/640/480/any?r=0.9300320592588625",
              "https://placeimg.com/640/480/any?r=0.8807778235430017"
            ]
          },
          {
            id: 2,
            title: "Handmade Fresh Table",
            price: 687,
            description: "Andy shoes are designed to keeping in...",
            category: {
              id: 5,
              name: "Others",
              image: "https://placeimg.com/640/480/any?r=0.591926261873231"
            },
            images: [
              "https://placeimg.com/640/480/any?r=0.9178516507833767",
              "https://placeimg.com/640/480/any?r=0.9300320592588625",
              "https://placeimg.com/640/480/any?r=0.8807778235430017"
            ]
          },
          {
            id: 3,
            title: "Handmade Fresh Table",
            price: 687,
            description: "Andy shoes are designed to keeping in...",
            category: {
              id: 5,
              name: "Others",
              image: "https://placeimg.com/640/480/any?r=0.591926261873231"
            },
            images: [
              "https://placeimg.com/640/480/any?r=0.9178516507833767",
              "https://placeimg.com/640/480/any?r=0.9300320592588625",
              "https://placeimg.com/640/480/any?r=0.8807778235430017"
            ]
          },
          {
            id: 7,
            title: "Handmade Fresh Table",
            price: 687,
            description: "Andy shoes are designed to keeping in...",
            category: {
              id: 5,
              name: "Others",
              image: "https://placeimg.com/640/480/any?r=0.591926261873231"
            },
            images: [
              "https://placeimg.com/640/480/any?r=0.9178516507833767",
              "https://placeimg.com/640/480/any?r=0.9300320592588625",
              "https://placeimg.com/640/480/any?r=0.8807778235430017"
            ]
          },
          {
            id: 2,
            title: "Cat Fresh Table",
            price: 540,
            description: "Lot of products",
            category: {
              id: 5,
              name: "Others",
              image: "https://placeimg.com/640/480/any?r=0.591926261873231"
            },
            images: [
              "https://placeimg.com/640/480/any?r=0.9178516507833767",
              "https://placeimg.com/640/480/any?r=0.9300320592588625",
              "https://placeimg.com/640/480/any?r=0.8807778235430017"
            ]
          }
        ]
      });
    }, 1000);
  });
};

export const fetchProductsActions = async () => {
  return await Api.get("products", {
    params: {
      offset: 0,
      limit: 12
    }
  });
};

export const fetchProducts = createAsyncThunk(
  FETCH_USERS,
  fetchProductsActions
);
