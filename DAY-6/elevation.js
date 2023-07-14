import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function srcset(image: string, width: number, height: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (
    <ImageList
      sx={{
        width: 500,
        height: 450,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvuA6ekREWc6MR_iCXOmGnyDAENJPmk30eA&usqp=CAU",
        title: 'Tradional',
        author: '@bkristastucchio',
        featured: true,
      },
      {
        img: 'https://foyr.com/learn/wp-content/uploads/2022/08/transitional-interior-design-style.png',
        title: 'Transitional',
        author: '@rollelflex_graphy726',
      },
      {
        img: 'https://cdn.homedit.com/wp-content/uploads/scandinavian-design/Add-Some-Hygge.jpg',
        title: 'Scandinavian',
        author: '@helloimnik',
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0223/2583/files/why_the_industrial_style_is_so_popular_in_interior_design_blog_image1.jpg?v=1629117992',
        title: 'Industrial',
        author: '@nolanissac',
        cols: 2,
      },
      {
        img: 'https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-3e11538/www.decorilla.com/online-decorating/wp-content/uploads/2021/05/Rustic-home-interior-living-room-Ralph-Lauren.jpg',
        title: 'Contemporary',
        author: '@hjrc33',
        cols: 2,
      },
      {
        img: 'https://www.home-designing.com/wp-content/uploads/2016/11/autumnal-living-room-warm-chinese-lanterns-in-gold.jpg',
        title: 'Rustic: Rustic design captures a cozy and natural aesthetic. It features warm and earthy colors,',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
      },
      {
        img: 'https://assets.architecturaldigest.in/photos/6328d8b0b1c1612420a1687d/3:2/w_1620,h_1080,c_limit/Featured.jpg',
        title: 'Farmhouse',
        author: '@tjdragotta',
      },
      {
        img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYWRpb25hbCUyMGhvbWUlMjBkZXNpZ25zJTIwdGFtaWxuYWR1fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        title: 'Eclectic',
        author: '@katie_wasserman',
      },
      {
        img: 'https://img.staticmb.com/mbcontent/images/uploads/2022/5/A%20typical%20Indian%20farmhouse%20design%20located%20in%20Deccan%20Plateau.jpg',
        title: 'Mediterranean',
        author: '@silverdalex',
        rows: 2,
        cols: 2,
      },
      {
        img: 'https://www.ashwinarchitects.com/3/wp-content/uploads/2023/04/bangalore-architects-near-me-100x80-plot-duplex-house-design-front-view-eve-2-1024x683.jpg.webp',
        title: 'normal',
        author: '@shelleypauls',
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Hscm8YF0_PGtu4nL0QLoB1nnQXMHDm6nOujxhjwBeSEMslD2ue3iTFGhFYIfoEMxXfc&usqp=CAU',
        title: 'Modern',
        author: '@peterlaster',
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx8daxT9EXghnbOuSWqEjr0qpfq7eBSKG9gOkEKdhdCPXWEvWzFpSCf35wXdNi2EDAYTk&usqp=CAU',
        title: 'School',
        author: '@southside_customs',
        cols: 2,
      },
];