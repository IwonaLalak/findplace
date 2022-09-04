import LevelModel, { DifficultiesEnum } from '../models/LevelModel';

export const famousPlaces = LevelModel.create({
  level: 1,
  title: 'Famous places around the world',
  description: '',
  difficulty: DifficultiesEnum.EASY,
  list: [
    {
      latLng: { lat: 52.2311227, lng: 21.0041351 },
      place: 'The Palace of Culture and Science, Defilad 1 square, 00-901 Warsaw, Poland',
      img: 'https://i.wpimg.pl/O/644x467/d.wpimg.pl/1982839758--114368225/Palac_Kultury_i_Nauki.jpg',
      tip: 'Try looking in a country located in central-west Europe.',
      about:
        'The Palace of Culture and Science (Polish: Pałac Kultury i Nauki; abbreviated PKiN) is a notable high-rise building in central Warsaw, Poland. With a total height of 237 metres (778 ft) it is the second tallest building in both Warsaw and Poland after Varso, the 6th-tallest building in the European Union (including spire) and one of the tallest on the European continent. Constructed in 1955, it houses various public and cultural institutions such as cinemas, theatres, libraries, sports clubs, university faculties, and authorities of the Polish Academy of Sciences. Since 2007, it has been enlisted in the Registry of Objects of Cultural Heritage.',
    },
    {
      latLng: { lat: 50.061715, lng: 19.938662 },
      place: 'Main square on old Town, 33-332 Cracow, Poland',
      img: 'https://www.kawiarniany.pl/wp-content/uploads/2020/03/rynek-w-krakowie-ciekawostki.jpg',
      tip: 'One of the most famous city centres in Poland.',
      about:
        'The main square (Polish: Rynek Główny) of the Old Town of Kraków, Lesser Poland, is the principal urban space located at the center of the city. It dates back to the 13th century, and at 3.79 ha (9.4 acres) is the largest medieval town square in Europe. The Project for Public Spaces (PPS) lists the square as the best public space in Europe due to its lively street life, and it was a major factor in the inclusion of Kraków as one of the top off-the-beaten-path destinations in the world in 2016.',
    },
    {
      latLng: { lat: 52.3608662, lng: 4.8865457 },
      place: 'Rijksmuseum, 1071 CN Amsterdam, Netherlands',
      img: 'https://cdn.getyourguide.com/img/tour/5db0759f4ad16.jpeg/99.jpg',
      tip: 'National museum in the capital of the country famous for its windmills and tulips.',
    },
    {
      latLng: { lat: 41.8906536, lng: 12.490724 },
      place: 'Colosseo, Piazza del Colosseo, 1, 00184 Roma RM, Italy',
      img: 'https://bi.im-g.pl/im/6c/fd/19/z27253612IER,Koloseum.jpg',
      tip: 'A monument that is a remnant of the Roman Empire.',
    },
    {
      latLng: { lat: 40.4154516, lng: -3.707866 },
      place: 'Plaza Mayor, Pl. Mayor, 28012 Madrid, Spain',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Plaza_Mayor_de_Madrid_02.jpg/2560px-Plaza_Mayor_de_Madrid_02.jpg',
      tip: 'One of the most famous squares in Western Europe.',
    },
    {
      latLng: { lat: 52.5165595, lng: 13.3769367 },
      place: 'Brandenburger Tor, Pariser Platz, 10117 Berlin, Germany',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/1024px-Brandenburger_Tor_abends.jpg',
      tip: 'One of the attractions in a country famous for its holiday called Oktoberfest',
    },
    {
      latLng: { lat: 37.9715889, lng: 23.7253578 },
      place: 'Acropolis of Athens, Athens 105 58, Greece',
      img: 'https://www.national-geographic.pl/media/cache/default_medium/uploads/media/default/0014/34/akropol.jpeg',
      tip: 'Remnant of one of the largest cities of ancient Greece.',
    },
    {
      latLng: { lat: 51.5027537, lng: -0.122439 },
      place: 'London Eye, Riverside Building, County Hall, London SE1 7PB, Wielka Brytania',
      img: 'http://2.bp.blogspot.com/-FbnLgOwFZrU/U3p4fVsgfwI/AAAAAAAAIkY/C9GGS0w99_I/s1600/01.jpg',
      tip: 'Great attraction on the Thames.',
    },
    {
      latLng: { lat: 29.9776891, lng: 31.1321017 },
      place: 'Pyramids in Giza, 22 Abou Al Hool Al Seiahi, Al Haram, Giza Governorate 3512201, Egypt',
      img: 'https://s3.eu-central-1.amazonaws.com/pressland-cms/cache/article_show_cover/h8/shutterstock-1395519593.jpeg',
      tip: 'The largest tombs in the world somewhere in Africa.',
    },
    {
      latLng: { lat: 48.8739022, lng: 2.2963651 },
      place: 'Arc de Triomphe, Pl. Charles de Gaulle, 75008 Paris, France',
      img: 'https://a.cdn-hotels.com/gdcs/production74/d346/9121b2ca-437b-4e80-900d-00c35f59a8f2.jpg',
      tip: 'There is also the Eiffel Tower in this city.',
    },
    {
      latLng: { lat: 40.6899682, lng: -74.0428409 },
      place: 'Statue of Liberty, New York, NY 10004, USA',
      img: 'https://nowyjork.pl/wp-content/uploads/2021/01/statue-liberty-new-york-in-august-2015_Statua-Wolnosci-shutterstock_344679428-1024x683.jpg',
      tip: 'The statue is placed on Liberty Island, near New York City.',
    },
    {
      latLng: { lat: 34.008677, lng: -118.4982775 },
      place: 'Santa Monica Pier, Santa Monica, CA 90401, USA',
      img: 'https://a.cdn-hotels.com/gdcs/production189/d1640/46073796-be8a-4c37-978c-d0ab2100ef41.jpg',
      tip: 'One of the most famous beaches on the west coast of the United States.',
    },
    {
      latLng: { lat: -22.9516659, lng: -43.2102776 },
      place: 'Cristo Redentor statue, Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ, Brasil',
      img: 'https://static.dw.com/image/59481579_303.jpg',
      tip: 'A statue of Jesus Christ in Rio de Janeiro in South America.',
    },
    {
      latLng: { lat: -33.8561059, lng: 151.2152563 },
      place: 'Sydney Opera House, Bennelong Point, Sydney NSW 2000, Australia',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sydney_Opera_House_-_Dec_2008.jpg/1200px-Sydney_Opera_House_-_Dec_2008.jpg',
      tip: 'An opera house in a country that is also a continent.',
    },
    {
      latLng: { lat: 38.8898635, lng: -77.0059128 },
      place: 'United States Capitol, First St SE, Washington, DC 20004, USA',
      img: 'https://www.uscp.gov/sites/uscapitolpolice.house.gov/files/wysiwyg_uploaded/Box%204%20-%20Visit%20the%20Capitol.png',
      tip: 'It is the building where the United States Congress meets.',
    },
    {
      latLng: { lat: 31.239399, lng: 121.499067 },
      place: 'Oriental Pearl Tower, 1 Shiji Blvd, Lujiazui, Pudong, Shanghai, China, 200120',
      img: 'https://wonderfulengineering.com/wp-content/uploads/2021/03/oriental-pearl-tower.jpg',
      tip: 'This tall building in Shanghai, China is used as TV tower to broadcast television.',
    },
    {
      latLng: { lat: 25.0981489, lng: 55.1324568 },
      place: 'The Palm Jumeirah, Dubai, United Arab Emirates',
      img: 'https://cdn.galleries.smcloud.net/t/galleries/gf-rKLA-tk8m-DZXK_sztuczna-wyspa-the-palm-jumeirah-w-dubaju-664x0-nocrop.jpg',
      tip: 'A group of three largest artificial islands in the world, built since 2001 on the bottom of the shelf off the coast of Dubai.',
    },
    {
      latLng: { lat: 42.6482559, lng: 18.1130796 },
      place: 'Dubrava Observation Point, Srđ ul., 20000, Dubrovnik, Croatia',
      img: 'https://ocdn.eu/pulscms-transforms/1/_NHk9kpTURBXy82ZjQzNzI3YTFiZDYyZmJkZmZlZWIyMTNiODY2NmEwYy5qcGeTlQPNBSQAzRXIzQxBkwmmMWViZTExBpMFzQSwzQJ2gaEwAQ/dubrownik-to-jedna-z-wizytowek-chorwacji.jpg',
      tip: 'View on the a city in Croatia on the Dalmatian coast',
    },
    {
      latLng: { lat: 41.4032512, lng: 2.1735291 },
      place: 'La Sagrada Família, C/ de Mallorca, 401, 08013 Barcelona, Spain',
      img: 'https://static.deon.pl/storage/image/core_files/2021/2/4/57d788787756ed37b6ea1ef8d2faf83f/jpg/Depositphotos_12236509_l-2015.jpg',
      tip: 'A large Roman Catholic church in Barcelona, Catalonia, Spain.',
    },
    {
      latLng: { lat: 35.7152255, lng: 139.7967368 },
      place: 'Sensō-ji, 2 Chome-3-1 Asakusa, Taito City, Tokyo 111-0032, Japan',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Cloudy_Sens%C5%8D-ji.jpg/1200px-Cloudy_Sens%C5%8D-ji.jpg',
      tip: 'A very old Buddhist temple in Tokyo, Japan.',
    },
  ],
});
