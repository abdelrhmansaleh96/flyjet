import { FC } from "react";
import styles from "./TextCard.module.scss";
import { height } from "@mui/system";
interface TextCardProps {
  title: string;
  content: string | string[];
  height?: boolean;
}
const TextCard: FC<TextCardProps> = ({ title, content, height }) => {
  return (
    <div className={height ? styles.textCardHeight : styles.textCard}>
      <h2>{title}</h2>
      {typeof content === "string" ? (
        <p>{content}</p>
      ) : (
        content.map((item, index) => <p key={index}>{item}</p>)
      )}
    </div>
  );
};

export default TextCard;
