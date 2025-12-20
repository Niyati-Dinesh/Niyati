
import notfound from "/404.svg";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
     
      <img
        src={notfound}
        alt="404 Not Found"
        className="w-105 max-w-full pt-2.5"
      />
    </div>
  );
}
