import Image from "next/image";
import styles from "./page.module.css";
import App from "./hero/page";

export default function Home() {
  console.log(process.env);
  
  return (
    <div>
      <App />
    </div>
  );
}
