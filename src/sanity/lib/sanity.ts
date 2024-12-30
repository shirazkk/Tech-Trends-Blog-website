import client from "@/sanity/lib/client";


export const fetchHero = async () => {
  const query1 =
    `*[_type == "hero"][0]{
    Smallheading,
      title,
    "portraitUrl": portrait.asset->url
  }`
  const data1 = await client.fetch(query1);
  return data1;
};

export const fetchPopularBlogs = async () => {
  const query2 = `
  *[_type == "popularblogs"] | order(order asc){
    "imageUrl": image.asset->url,
    Category,
    date,
    tittle,
    slug,
    description
  }
  `;
  const data2 = await client.fetch(query2);
  // console.log(data2);
  return data2;
};





