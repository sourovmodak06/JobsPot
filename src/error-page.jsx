import { Link, useRouteError } from "react-router-dom";
import errorImg  from './images/error404.png';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <div className="flex justify-between items-center">
          <img src={errorImg} alt="404 error img" className="w-[30%] ml-20"/>
          <div className="w-2/4">
            <h2 className="text-8xl uppercase font-extrabold">opps! page not found.</h2>
            <p className="py-10 font-medium mr-20 text-2xl">You must have picked the wrong door because I haven't been able to lay me eye on the page you've been searching for</p>
            <button className="mt-7 bg-gradient-to-l from-[#7E90FE] to-[#9873FF] text-white py-2 px-4 text-xl font-extrabold rounded-lg">
            <Link to="/">Back to home</Link>
          </button>
          </div>
      </div>
    </div>
  );
}