import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography.js';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://lh3.googleusercontent.com/proxy/DOCKIH-T9_E_Fwj0ZWb7Yw7dyy815R4KR1i0K4bJImWW24y4hUhRzsIhIZM-y4jj_5Q91ySt3oYoYlsgH6snLfoaTT6Wx0ZwEyKFMSF7eQuI1iNaY6avuMQUum6OAoLf_rExb-Jv_Gi_iyf7CNZ4gjck3dzsn8Bo',
      title: '미적분학',
      width: '40%',
    },
    {
      url:
        'https://upload.wikimedia.org/wikipedia/commons/2/2f/Linear_subspaces_with_shading.svg',
      title: '선형대수학',
      width: '20%',
    },
    {
      url:
        'https://files.indcareer.com/files/article/2016/6/3-engineering-mathematics.jpg',
      title: '복합공학수학',
      width: '40%',
    },
    {
      url:
        'https://images.theconversation.com/files/191827/original/file-20171025-25516-g7rtyl.jpg?ixlib=rb-1.1.0&rect=0%2C70%2C7875%2C5667&q=45&auto=format&w=926&fit=clip',
      title: '일반물리',
      width: '38%',
    },
    {
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA1tVzaUKg_rfMT3PJktt_JWlRDsl-XWBEsg&usqp=CAU',
      title: '전자기학',
      width: '38%',
    },
    {
      url:
        'https://images.ctfassets.net/cnu0m8re1exe/3DufMfv3s61Wgqem0jxOaI/06d4769516e09575754c8779f5596f0b/waroverreality.jpg?w=650&h=433&fit=fill',
      title: '양자역학',
      width: '24%',
    },
    {
      url:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/fa/6926005ea411e490ff8d4c5d4ff426/chemistry_logo.png?auto=format%2Ccompress&dpr=1',
      title: '일반화학',
      width: '40%',
    },
    {
      url:
        'https://www.wur.nl/upload/6aefd495-bb15-4545-aebe-3141558e4976_ORCWebsite-frontpage-picture2.jpg',
      title: '유기화학',
      width: '20%',
    },
    {
      url:
        'https://sciencenotes.org/wp-content/uploads/2015/10/energyball.jpg',
      title: '열역학',
      width: '40%',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        질문 가능한 과목
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);