import GuideFeaturedInfo from "../../Components/GuideDashboard/GuideFeaturedInfo/GuideFeaturedInfo";
import GuideWidgetLarge from "../../Components/GuideDashboard/GuideWidgetLarge/GuideWidgetLarge";
import styles from "./GuideHome.module.css";

export default function GuideHome() {
  return (
    <div className={styles.guideHome}>
     <GuideFeaturedInfo/> 
     <GuideWidgetLarge/>
    </div>
  )
}
