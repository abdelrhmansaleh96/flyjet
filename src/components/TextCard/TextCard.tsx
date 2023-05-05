import { FC } from "react";
import styles from "./TextCard.module.scss";
import { height } from "@mui/system";
interface TextCardProps {
  title: string;
  content: string;
  height?: boolean;
}
const TextCard: FC<TextCardProps> = ({ title, content, height }) => {
  return (
    <div className={height ? styles.textCardHeight : styles.textCard}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default TextCard;
