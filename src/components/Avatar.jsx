import styles from './Avatar.module.css'

export function Avatar({hasBorder = true, src}) {
  //Another way to do
  //export function Avatar(props) {
  //const hasBorder = props.hasBorder !== false;

  return (
    <img className={hasBorder ? styles.AvatarWithBorder : styles.avatar}
    src={src} />
  );
}
