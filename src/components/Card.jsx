// Card.js
import CardItems from "./CardItems";

const BirthdayDecorators = [
  {
    name: "Paste and Gold Birthday decor",
    decoratorName: "Suresh Sitaraman",
    decoratorImg:
      "https://s3-alpha-sig.figma.com/img/92a7/f30d/eb6de5b3ebb3d5b1e20bfc07a4358670?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nes0o~Q4vSD9H1jROe9In-nPfKNhzyicMjrGcpy-b9VErX~2GWkoeexlgf8siFWwttVXGKNKquFL~aaMWOiXDhlbDMcsrTVdkK-AsK6M2rW0HAgvk~~nZMFGA61oPNdN6hNQK2Z4CvkQLA7sKj449jGrs4~WPyX~h~Rkd2Yv-NOx7zKM4LeTbwgyRbonjcgMfyh9wvXKYhubHGTXxyDxrtLRIVU~7SZbcqzdeWm~B~Ecpcz-zVoKyJ48cWOGzNcfRp3F6jyyfMSI213l2HsZeM46C26Ij3FpeWsR1iXQBJlOcvOe7HDG~nvmb5CoaEsSzKrMleK2vmqTwk82m08T4w__",
    rating: "4.9",
    review: "256",
    location: "Indiranagar,BL",
    img: "https://s3-alpha-sig.figma.com/img/8bfc/b805/dafbcf7064073f2d4faf9f335d935b0c?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U3~jfhGJiax~GrLLUqLsmzoE63GVAp6g0mEK4hTSQtVOKd5Qk1bBOogqBvOEizyZJ3Ct7LVsh0-FdfhKXLE1PypIH2hAhNDBp53C92Ht4Zjq8uYZSG8qBMEnf~wwAAqJulVsMbqmnuEoXYebTAZV6ixZK4m6WVPv89Bfm0J1sK6KfIf-84QVdFe7YFJ8-DV3hWB6qaMge8goYfYJEIJGqndO5B8fXIYv3e1ao9-pNBT0CVGOOaYEDfUb4SXUDsLpJovzLREOXcE~~1PX9-CiqJY0Axdnsr8xTo7i1O2JCV5SLF7tfO88LzW1O7Y9~R1dULx8MR1J0~XgBT2B4-tAmg__",
    price: "1900",
  },
  {
    name: "Minion Themed Birthday Decor",
    decoratorName: "Suresh Sitaraman",
    decoratorImg:
      "https://s3-alpha-sig.figma.com/img/92a7/f30d/eb6de5b3ebb3d5b1e20bfc07a4358670?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nes0o~Q4vSD9H1jROe9In-nPfKNhzyicMjrGcpy-b9VErX~2GWkoeexlgf8siFWwttVXGKNKquFL~aaMWOiXDhlbDMcsrTVdkK-AsK6M2rW0HAgvk~~nZMFGA61oPNdN6hNQK2Z4CvkQLA7sKj449jGrs4~WPyX~h~Rkd2Yv-NOx7zKM4LeTbwgyRbonjcgMfyh9wvXKYhubHGTXxyDxrtLRIVU~7SZbcqzdeWm~B~Ecpcz-zVoKyJ48cWOGzNcfRp3F6jyyfMSI213l2HsZeM46C26Ij3FpeWsR1iXQBJlOcvOe7HDG~nvmb5CoaEsSzKrMleK2vmqTwk82m08T4w__",
    rating: "4.9",
    review: "256",
    location: "Indiranagar,BL",
    img: "https://s3-alpha-sig.figma.com/img/015b/2f0f/1d91121acda8c08d79afee3552808430?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hy44FZ-347vyitaK6qjKi5p-KHog9OGG40EnuZs9BNyYNy4CDsXoyBcG4F2sPordI08KBp~8zlAqg8Yg~Bkyr9arA6WHYgMcBfD8YhV79tcrEKxQRKN1NBm99PzEXLgd3C7ODboAxWK5VmHuUtqoAT2vBWlkKZjLYnaFIfGN4iex7SMZDCPodQHzJs9EwJ2tt3eNjPyYwox53LJCZIoW9PP6NFCWXVc7J5kEqGfTvMmZ68TSOYzKTDMCfSxikyXz9QQ54DLBCfTY7Tdu5U~-D~gVrw34jGJbpiDxI-EJTqt56j66uWNjflOAmCdq6pbL5Q8n9x6rVXvwiarZzJzqyg__",
    price: "1900",
  },
  {
    name: "Black and Gold Birthday Decor",
    decoratorName: "Suresh Sitaraman",
    decoratorImg:
      "https://s3-alpha-sig.figma.com/img/92a7/f30d/eb6de5b3ebb3d5b1e20bfc07a4358670?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nes0o~Q4vSD9H1jROe9In-nPfKNhzyicMjrGcpy-b9VErX~2GWkoeexlgf8siFWwttVXGKNKquFL~aaMWOiXDhlbDMcsrTVdkK-AsK6M2rW0HAgvk~~nZMFGA61oPNdN6hNQK2Z4CvkQLA7sKj449jGrs4~WPyX~h~Rkd2Yv-NOx7zKM4LeTbwgyRbonjcgMfyh9wvXKYhubHGTXxyDxrtLRIVU~7SZbcqzdeWm~B~Ecpcz-zVoKyJ48cWOGzNcfRp3F6jyyfMSI213l2HsZeM46C26Ij3FpeWsR1iXQBJlOcvOe7HDG~nvmb5CoaEsSzKrMleK2vmqTwk82m08T4w__",
    rating: "4.9",
    review: "256",
    location: "Indiranagar,BL",
    img: "https://s3-alpha-sig.figma.com/img/443c/04de/171fb45760f69ce4b9fff76390de561d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PWL61Uah0M-HhMi~CKJk372spY1c1MPdFkTRQ9GANz~h~W8eUWJDPxT~nKY6HsarZECBn4W9nkfwl7e~1kLRmgZaMD7iLkbQGtq-BQWTULZZMuU-22n1Dkdq~vDd0eMSDnNGp4yaa7xYGrN4zCEVzYKdqM8AF67ojTwOZeaWcRBsxjUIR747xTMt4BGyapju1fp16-7~2ZcBVR0QJ-Qx65G8wtwgLnRTNVmmde2ffJCKgHFJ8lwdngt6-MIDHP4iCEHD7pdiu611pfBDHh-3E7fdOsWNKhq2dG8ihCUiLGX6skpJOd4PUPIOB686l8qdyeqkezyWwK91Vns0c2zyEw__",
    price: "1900",
  },
  {
    name: "Flamingo Themed Birthday Decor",
    decoratorName: "Suresh Sitaraman",
    decoratorImg:
      "https://s3-alpha-sig.figma.com/img/92a7/f30d/eb6de5b3ebb3d5b1e20bfc07a4358670?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nes0o~Q4vSD9H1jROe9In-nPfKNhzyicMjrGcpy-b9VErX~2GWkoeexlgf8siFWwttVXGKNKquFL~aaMWOiXDhlbDMcsrTVdkK-AsK6M2rW0HAgvk~~nZMFGA61oPNdN6hNQK2Z4CvkQLA7sKj449jGrs4~WPyX~h~Rkd2Yv-NOx7zKM4LeTbwgyRbonjcgMfyh9wvXKYhubHGTXxyDxrtLRIVU~7SZbcqzdeWm~B~Ecpcz-zVoKyJ48cWOGzNcfRp3F6jyyfMSI213l2HsZeM46C26Ij3FpeWsR1iXQBJlOcvOe7HDG~nvmb5CoaEsSzKrMleK2vmqTwk82m08T4w__",
    rating: "4.9",
    review: "256",
    location: "Indiranagar,BL",
    img: "https://s3-alpha-sig.figma.com/img/b167/7a04/fb40708039cfcf2195a625928f4ddc93?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LDDKZWKDAzuQiQL8zDNs-Vtsk-vyHwMOTWVdOKaDzNQV5B2zzkLpb8o2~4~OoFC9hd-6Ab-WLSFdRyp0giIYaRY0Ny-cgOJW~EhHfG~iroXcDF39pcH0lyNOTRzPZpIeHUfDGBIUSYyNdvCvtSUd76Y04QPNooQM6srOwqDcf-Q-u7-D4gE7AfjkXUOyOK4jNBgleWhhNeqbu2qLWioyzUqm4IvZYupjA0TlOrmaN2eHx0VlWSXl0M-Eep9JjQyW7tBIoJFpdlM1p5eQDwJRbiKbOgVcmJFuF1YWCN3Zdw4bDtHc4SbOx1ypZjCwjvfaolh9MKrME~3n2XIACavs8Q__",
    price: "1900",
  },
  {
    name: "Beer and Whiskey Themed Birthday Decor",
    decoratorName: "Suresh Sitaraman",
    decoratorImg:
      "https://s3-alpha-sig.figma.com/img/92a7/f30d/eb6de5b3ebb3d5b1e20bfc07a4358670?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nes0o~Q4vSD9H1jROe9In-nPfKNhzyicMjrGcpy-b9VErX~2GWkoeexlgf8siFWwttVXGKNKquFL~aaMWOiXDhlbDMcsrTVdkK-AsK6M2rW0HAgvk~~nZMFGA61oPNdN6hNQK2Z4CvkQLA7sKj449jGrs4~WPyX~h~Rkd2Yv-NOx7zKM4LeTbwgyRbonjcgMfyh9wvXKYhubHGTXxyDxrtLRIVU~7SZbcqzdeWm~B~Ecpcz-zVoKyJ48cWOGzNcfRp3F6jyyfMSI213l2HsZeM46C26Ij3FpeWsR1iXQBJlOcvOe7HDG~nvmb5CoaEsSzKrMleK2vmqTwk82m08T4w__",
    rating: "4.9",
    review: "256",
    location: "Indiranagar,BL",
    img: "https://s3-alpha-sig.figma.com/img/dede/60bd/1b4d4701df6422ce3768fb2e6d833b90?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YeYjzOgDUkwC93-iVRVkL58tZBpFhhr3aCuub1hbRRvxr2CnzyvfiLGflV~1fy0cpjMyrhSCF382-P0sOOQGhgdR-7WcIsE5r~QI2z8ebVUhCnEXQ7rXBb6g8pEmwEwy9SY7gX19KXsXzN5X5-9~Kyg932ML4WmuOS0frNX1LZLEnIcZ5Rsm4Ld9mNORkECG94IMgIfU5TPDEAZjKHuwD3Bmlhr6rtZ9uGypJxwDy4AHYaKzY8kAcW5mbw1Y0ShQkMOj9a-pwMaU2dABlssOXsMCDlFazGuZqoSZB58SzwwxSFrFX7xPKmy-vU1oxoDYTOcuoRhJdwfG7PFJ4rwATw__",
    price: "1900",
  },
  {
    name: "Moustache Themed Birthday Decor",
    decoratorName: "Suresh Sitaraman",
    decoratorImg:
      "https://s3-alpha-sig.figma.com/img/92a7/f30d/eb6de5b3ebb3d5b1e20bfc07a4358670?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nes0o~Q4vSD9H1jROe9In-nPfKNhzyicMjrGcpy-b9VErX~2GWkoeexlgf8siFWwttVXGKNKquFL~aaMWOiXDhlbDMcsrTVdkK-AsK6M2rW0HAgvk~~nZMFGA61oPNdN6hNQK2Z4CvkQLA7sKj449jGrs4~WPyX~h~Rkd2Yv-NOx7zKM4LeTbwgyRbonjcgMfyh9wvXKYhubHGTXxyDxrtLRIVU~7SZbcqzdeWm~B~Ecpcz-zVoKyJ48cWOGzNcfRp3F6jyyfMSI213l2HsZeM46C26Ij3FpeWsR1iXQBJlOcvOe7HDG~nvmb5CoaEsSzKrMleK2vmqTwk82m08T4w__",
    rating: "4.9",
    review: "256",
    location: "Indiranagar,BL",
    img: "https://s3-alpha-sig.figma.com/img/2fbe/294b/e44fc0a7fb8cd60c90a368ad494a9043?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ACckt4KvjCeybf9rcdBdHTns13HDDwkJqV8rmqN8AwyV6TlOQJLFli6vl~4~nKr9h5qpLSiGb9NORx6cXoh8OH9GF8IcKbsV70FAMWJtLHY-1wfsNM-jItuU-qGC89et96IjJNvaqETYhMDhfZhskhzLnvFsu2J2SVWNrKjWK~SRfCTJ7m47mO5Q~oqK0Ev7ble4fsoR3Mapkka9PWzRsOLXnuwipBNkHKI0OywrzZAbfN3OFe0I7jpxZoPaBVfUiZsK9feiiXwXkl6x3NY075osf5VwPuCyMMkIsMnvfB-aQ5eLi8DHMKel3F7xhGMK7IAapkg-WgZvOiMYrfig5w__",
    price: "1900",
  },
];

const Card = () => {
  return (
    <div className="mt-32">
      {/* Heading */}
      <h1 className="text-xl  font-bold text-center text-gray-800">
        Top Professionals for Birthday Decorations
      </h1>

      {/* Grid of cards */}
      <div className="grid grid-cols-12">
        <div className="col-span-2 text-lg  text-center text-[#8E44AD] font-semibold   ">
          <div className="border-2 border-[#8E44AD] hover:bg-[#8E44AD] hover:text-white rounded-lg p-2 m-8   h-14 w-60">
            Birthday Special Decors
          </div>
          <div className="border-2 border-[#8E44AD] hover:bg-[#8E44AD] hover:text-white rounded-lg p-2 m-8   h-14 w-60">
            Candle Dinners
          </div>
          <div className="border-2 border-[#8E44AD] hover:bg-[#8E44AD]  hover:text-white rounded-lg p-2 m-8   h-14 w-60">
            Birthday Cakes
          </div>
          <div className="border-2 border-[#8E44AD] hover:bg-[#8E44AD] hover:text-white rounded-lg p-2 m-8   h-14 w-60">
            Birthday Surprises
          </div>
        </div>
        <div className="grid col-span-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 p-6">
          {BirthdayDecorators.map((item, index) => (
            <CardItems key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
