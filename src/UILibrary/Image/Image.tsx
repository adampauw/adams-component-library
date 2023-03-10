import { ImageVariant } from './Image.Enum';
import { useStyles } from './Image.styles';

interface ImageProps {
  imagePath: string;
  variant: ImageVariant;
}

export const Image = ({ imagePath, variant }: ImageProps) => {
  const { classes } = useStyles(imagePath)();

  return <div className={`${classes.container} ${classes[variant]}`} />;
};
export default Image;
