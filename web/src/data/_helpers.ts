import { client } from "./_sanityClient.ts";
import imageUrlBuilder from "@sanity/image-url";

export const formatDate = function (date: any) {
  const tempDate = new Date(date);
  const day = tempDate.getDate();
  const month = tempDate.getMonth();
  const year = tempDate.getFullYear();

  const monthNames = [
    "januar",
    "februar",
    "mars",
    "april",
    "mai",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "desember",
  ];

  const newDate = `${day}. ${monthNames[month]} ${year}`;

  return newDate;
};

export function urlFor(source: any) {
  const builder = imageUrlBuilder(client);
  return builder.image(source);
}
