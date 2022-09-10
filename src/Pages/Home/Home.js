import FeaturedInfo from "../../Components/FeaturedInfo/FeaturedInfo";
import Chart from "../../Components/Chart/Chart";
import styles from "./Home.module.css";
import WidgetSmall from "../../Components/WidgetSmall/WidgetSmall";
import WidgetLarge from "../../Components/WidgetLarge/WidgetLarge";


export default function Home() {
  return (
    <div className={styles.home}>
    <div className={styles.f}>
      <FeaturedInfo />
      </div>
      {/* <Chart/> */}
      <div className={styles.homeWidget}> 
      <WidgetSmall/>
      <WidgetLarge/>
      </div>
    </div>
  )
}
