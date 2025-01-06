
import naturalDisasterIcon from '../../assets/naturalIcon.png'
import cycloneDisasterIcon from '../../assets/cycloneIcon.png'
import droughtDisasterIcon from '../../assets/droughtIcon.png'
import demonsDisasterIcon from '../../assets/demonsIcon.png'
import earthqDisasterIcon from '../../assets/earthIcon.png'
import floodDisasterIcon from '../../assets/floodIcon.png'
import stratDisasterIcon from '../../assets/stratIcon.png'
import techDisasterIcon from '../../assets/techIcon.png'



const disasters = [
    {
        id: 1,
        type: "Flood",
        location: {
            latitude: -6.2088,
            longitude: 106.8456,
        },
        severity: "Severe",
        description: "Heavy monsoon rains caused rivers to overflow, displacing thousands.",
        img: floodDisasterIcon,
        dateSignaled: "2024-12-10",
    },
    {
        id: 2,
        type: "Earthquake",
        location: {
            latitude: 35.6895,
            longitude: 139.6917,
        },
        severity: "Moderate",
        description: "A 5.8 magnitude earthquake shook the region, causing minor damage.",
        img: earthqDisasterIcon,
        dateSignaled: "2024-12-12",
    },
    {
        id: 3,
        type: "Cyclone",
        location: {
            latitude: 23.8103,
            longitude: 90.4125,
        },
        severity: "Extreme",
        description: "Cyclone Fani caused widespread destruction and flooding.",
        img: cycloneDisasterIcon,
        dateSignaled: "2024-12-15",
    },
    {
        id: 4,
        type: "Drought",
        location: {
            latitude: -33.9249,
            longitude: 18.4241,
        },
        severity: "Severe",
        description: "Prolonged drought led to water shortages across the city.",
        img: droughtDisasterIcon,
        dateSignaled: "2024-12-05",
    },
    {
        id: 5,
        type: "Wildfire",
        location: {
            latitude: -33.8688,
            longitude: 151.2093,
        },
        severity: "Severe",
        description: "Bushfires burned over 200,000 acres of land, threatening wildlife.",
        img: naturalDisasterIcon,
        dateSignaled: "2024-11-30",
    },
    {
        id: 6,
        type: "Technological Disaster",
        location: {
            latitude: 37.7749,
            longitude: -122.4194,
        },
        severity: "High",
        description: "A major server crash disrupted online services worldwide.",
        img: techDisasterIcon,
        dateSignaled: "2024-12-01",
    },
    {
        id: 7,
        type: "Strategic Disaster",
        location: {
            latitude: 50.4501,
            longitude: 30.5234,
        },
        severity: "Extreme",
        description: "Conflict in the region led to infrastructure collapse.",
        img: stratDisasterIcon,
        dateSignaled: "2024-12-03",
    },
    {
        id: 9,
        type: "Lightning Strike",
        location: {
            latitude: 27.9944,
            longitude: -81.7603,
        },
        severity: "Moderate",
        description: "A series of lightning strikes caused power outages.",
        img: demonsDisasterIcon,
        dateSignaled: "2024-12-08",
    },
    {
        id: 10,
        type: "Heatwave",
        location: {
            latitude: 28.6139,
            longitude: 77.2090,
        },
        severity: "Severe",
        description: "Temperatures soared to 48°C, impacting public health.",
        img: droughtDisasterIcon,
        dateSignaled: "2024-12-09",
    },
    {
        id: 11,
        type: "Flood",
        location: {
            latitude: 6.5244,
            longitude: 3.3792,
        },
        severity: "Extreme",
        description: "Unprecedented rainfall caused severe urban flooding.",
        img: floodDisasterIcon,
        dateSignaled: "2024-12-14",
    },
    {
        id: 12,
        type: "Earthquake",
        location: {
            latitude: 19.0760,
            longitude: 72.8777,
        },
        severity: "Severe",
        description: "A 7.0 magnitude earthquake caused widespread destruction.",
        img: earthqDisasterIcon,
        dateSignaled: "2024-12-06",
    },
];


export default disasters