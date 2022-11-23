import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);

    return () => window.removeEventListener("scroll", scrollProgress);
  }, []);

  const scrollProgress = () => {
    const scrollpx = document.documentElement.scrollTop;
    const winHeightpx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollLen = Math.ceil(((scrollpx / winHeightpx) * 100) / 0.69);
    setScrolled(scrollLen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${scrolled
            .toString()
            .padStart(4, "0")}.jpg`}
          alt=""
        />
      </header>
    </div>
  );
}

export default App;

// const [count, setCount] = useState(1);

// useEffect(() => {
//   if (count < 146) {
//     setTimeout(() => {
//       setCount(count + 1);
//     }, 50);
//   } else {
//     setCount(1);
//   }
// // }, [count]);
