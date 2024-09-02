// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/deveshllingayat")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);

  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}
export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/deveshllingayat");
  return response.json();
};
