import React from "react";

const familyPics = [
  "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/36392022_10215014957319790_2174124509798334464_n.jpg?_nc_cat=108&_nc_sid=7aed08&_nc_oc=AQnQKaylI5DyGHfoc9Aiz0cMRQWW1-b0U1LY4KtG9qHEH1pumHIOl-k1yBf2F8Vk2_E&_nc_ht=scontent-iad3-1.xx&oh=0b5af342208244b90098b2f38c2fef21&oe=5EDC5F46",
  "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/25498459_10213505171656092_8404413507810432649_n.jpg?_nc_cat=105&_nc_sid=7aed08&_nc_oc=AQnu2DHz51PrDfOvnI73BqUMv9hJCfjFZveTFENvgQfwd2skM3OG1enkD8DgJrX0q4k&_nc_ht=scontent-iad3-1.xx&oh=d94d0d0dc45fc97303c389885563623c&oe=5EDE9A3D",
  "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10384817_10204182340711145_4887905726978130774_n.jpg?_nc_cat=102&_nc_sid=7aed08&_nc_oc=AQkflLvKL6O3nxki2di3rV4o8hWmY0yngYBN2565GLdkQmmMG-zfdEiXHeTX5t2kA8c&_nc_ht=scontent-iad3-1.xx&oh=68b27c55b2114524869a4d9f5a3d25e6&oe=5EDD8F71",
];
const locationPics = [
  "https://lonelyplanetwp.imgix.net/2015/12/Manarola_cs.jpg?fit=min&q=40&sharp=10&vib=20&w=1470",
  "https://evolvetours.com/wp-content/uploads/2015/05/banff.jpg",
];
const artPics = [
  "http://www.metmuseum.org/toah/images/h2/h2_32.88.12.jpg",
  "http://4.bp.blogspot.com/-laemhXifpS4/UM2fsPpFjWI/AAAAAAAAVFs/kwPx025KA8c/s1600/1888+Still+Life,+Vase+with+Fourteen+Sunflowers+oil+on+canvas+95+x+73+cm.jpg",
];
const pics = {
  familyPics,
  locationPics,
  artPics,
};
const HomePage = ({ children, ...rest }) => {
  const [selectedPics, setSelectedPics] = useState([]);
  return (
    <Page backgroundColor={colorsAbstract.primary.white}>
      {Object.keys(pics).map((picType) => (
        <div>{picType}</div>
      ))}
      {selectedPics.map((pic) => (
        <div style={{ padding: "16px" }}>
          <img src={pic}></img>
        </div>
      ))}
      {/* <Billboard />
    <Box>
      <Box flexDirection="column" padding="16px">
        <Header accented accentColor={colorsAbstract.primary.yellow}>
          Case Studies
        </Header>
        <Header accented accentColor={colorsAbstract.primary.yellow}>
          A vehicle for perfecting process product and people
        </Header>
        <Box flexDirection="column" padding="16px">
          <Box>
            <Text>Products Include</Text>
            <Box
              flexDirection="column"
              paddingLeft="16px"
              paddingTop="16px"
              paddingBottom="16px"
            >
              <Text>Design Systems</Text>
              <Text>Worldclass Web Apps</Text>
              <Text>Innovative Technical Solutions</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        flexDirection="column"
        alignItems="flex-end"
        flexShrink="2"
        padding="16px"
      >
        <Header accented accentColor={colorsAbstract.primary.yellow}>
          Contact Us
        </Header>
        <Box flexDirection="column" padding="16px">
          <Box
            flexDirection="column"
            paddingBottom="16px"
            alignItems="flex-end"
          >
            <Text fontWeight="bold">Github</Text>
            <Link src="https://github.com/silversoftwerks">
              Silver Softwerks Repositories
            </Link>
          </Box>
        </Box>
      </Box>
    </Box> */}
    </Page>
  );
};

export default HomePage;
