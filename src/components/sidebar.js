import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { PiDownloadSimpleBold } from "react-icons/pi";
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import YouTubeCard from './YoutubeCard';

const drawerWidth = 240;

const openedMixin = (theme)=> ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#ffffff', 
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginRight: 5, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" color='black' >
           <div className='topbar-title'>Youtube</div> 
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 3.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 <HomeIcon /> 
                </ListItemIcon>
                <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 3.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
               <SiYoutubeshorts />
                </ListItemIcon>
                <ListItemText primary="Shorts" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 3.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
               <MdSubscriptions />
                </ListItemIcon>
                <ListItemText primary="Subscriptions" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 3.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                   <SiYoutubemusic />
                </ListItemIcon>
                <ListItemText primary="Youtube Music" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>



            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 3.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 
                  <PiDownloadSimpleBold />
                </ListItemIcon>
                <ListItemText primary="Downloads" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>


        </List>


      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography className='youtube-grid'>
        {/* <YouTubeCard
        src={"https://www.youtube.com/embed/VNRdRlHsr2k?si=Ts-v0o_PQjXP596m"}
                channelName="Sean Allen"
                channelPictureUrl="https://your-channel-picture-url.com"
                views="2.7K"
                uploadDate="1 day ago"
                videoTitle="SwiftUI - Reorder a List (2 Ways)"
            /> */}

      {youtubeSrc.map((item)=>{
        return (
          <YouTubeCard
        src={item.src}
                channelName={item.channelName}
                // channelPictureUrl={item.channelPictureUrl}
                views={item.views}
                uploadDate={item.uploadDate}
                videoTitle={item.videoTitle}
            /> 
        )
      })}


        </Typography>
      </Box>
    </Box>
  );
}

const youtubeSrc2 = [
  {
    src: "https://www.youtube.com/embed/VNRdRlHsr2k?si=Ts-v0o_PQjXP596m",
    channelName: "Sean Allen",
    channelPictureUrl: "https://yt3.ggpht.com/0ptQnS5MbaDueJWrdGxbF3vvRRIuPbpeQeI0XbxI7LEMJejTHSpEs0EuoW_-GdctW2YeZa4T=s88-c-k-c0x00ffffff-no-rj",
    views: "2.7K",
    uploadDate: "1 day ago",
    videoTitle: "SwiftUI - Reorder a List (2 Ways)"
  },
  {
    src: "https://www.youtube.com/embed/abcd1234?si=xyz123",
    channelName: "The Coding Train",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqM1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "5.1K",
    uploadDate: "2 days ago",
    videoTitle: "Introduction to p5.js"
  },
  {
    src: "https://www.youtube.com/embed/efgh5678?si=abc456",
    channelName: "Traversy Media",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqN1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "10K",
    uploadDate: "3 days ago",
    videoTitle: "Learn JavaScript in 30 Minutes"
  },
  {
    src: "https://www.youtube.com/embed/ijkl9101?si=def789",
    channelName: "Academind",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqM1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "15K",
    uploadDate: "4 days ago",
    videoTitle: "ReactJS - Getting Started"
  },
  {
    src: "https://www.youtube.com/embed/mnop2345?si=ghi012",
    channelName: "freeCodeCamp.org",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqM1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "20K",
    uploadDate: "5 days ago",
    videoTitle: "Full Course on Python Programming"
  },
  {
    src: "https://www.youtube.com/embed/qrst6789?si=jkl345",
    channelName: "The Net Ninja",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqM1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "8.2K",
    uploadDate: "6 days ago",
    videoTitle: "Node.js Crash Course"
  },
  {
    src: "https://www.youtube.com/embed/uvwx1234?si=mno678",
    channelName: "Programming with Mosh",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqM1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "12K",
    uploadDate: "1 week ago",
    videoTitle: "JavaScript for Beginners"
  },
  {
    src: "https://www.youtube.com/embed/yzaq5678?si=pqr901",
    channelName: "TechLead",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqM1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "3.5K",
    uploadDate: "1 week ago",
    videoTitle: "How to Get a Job at Google"
  },
  {
    src: "https://www.youtube.com/embed/bcde6789?si=stu234",
    channelName: "Derek Banas",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqM1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "4.8K",
    uploadDate: "2 weeks ago",
    videoTitle: "Learn C++ in One Video"
  },
  {
    src: "https://www.youtube.com/embed/efgh1234?si=uvw567",
    channelName: "Academind",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqM1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "6.3K",
    uploadDate: "3 weeks ago",
    videoTitle: "Understanding Redux"
  },
  {
    src: "https://www.youtube.com/embed/ijkl9101?si=xyz123",
    channelName: "The Coding Train",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqM1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "9.1K",
    uploadDate: "4 weeks ago",
    videoTitle: "Advanced p5.js Techniques"
  },
  {
    src: "https://www.youtube.com/embed/mnop2345?si=abc456",
    channelName: "Traversy Media",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqM1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "11K",
    uploadDate: "1 month ago",
    videoTitle: "CSS Flexbox Tutorial"
  },
  {
    src: "https://www.youtube.com/embed/qrst6789?si=def789",
    channelName: "freeCodeCamp.org",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqM1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "18K",
    uploadDate: "2 months ago",
    videoTitle: "Full Course on React"
  },
  {
    src: "https://www.youtube.com/embed/uvwx1234?si=jkl345",
    channelName: "The Net Ninja",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqM1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "7.5K",
    uploadDate: "3 months ago",
    videoTitle: "Vue.js Crash Course"
  },
  {
    src: "https://www.youtube.com/embed/yzaq5678?si=mno678",
    channelName: "Programming with Mosh",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqM1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "14K",
    uploadDate: "4 months ago",
    videoTitle: "Complete Guide to SQL"
  },
  {
    src: "https://www.youtube.com/embed/bcde6789?si=pqr901",
    channelName: "TechLead",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqM1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "2.9K",
    uploadDate: "5 months ago",
    videoTitle: "How to Ace Coding Interviews"
  },
  {
    src: "https://www.youtube.com/embed/efgh5678?si=stu234",
    channelName: "Derek Banas",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqM1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "5.6K",
    uploadDate: "6 months ago",
    videoTitle: "Java Basics"
  },
  {
    src: "https://www.youtube.com/embed/ijkl9101?si=uvw567",
    channelName: "Academind",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqM1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "9.3K",
    uploadDate: "7 months ago",
    videoTitle: "Understanding GraphQL"
  },
  {
    src: "https://www.youtube.com/embed/mnop2345?si=xyz123",
    channelName: "The Coding Train",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqM1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "3.1K",
    uploadDate: "8 months ago",
    videoTitle: "Creating Games with p5.js"
  },
  {
    src: "https://www.youtube.com/embed/qrst6789?si=abc456",
    channelName: "Traversy Media",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqM1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "11.5K",
    uploadDate: "9 months ago",
    videoTitle: "Building REST APIs with Node.js"
  },
  {
    src: "https://www.youtube.com/embed/uvwx1234?si=def789",
    channelName: "freeCodeCamp.org",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqM1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "17K",
    uploadDate: "10 months ago",
    videoTitle: "Complete Web Development Course"
  },
  {
    src: "https://www.youtube.com/embed/yzaq5678?si=jkl345",
    channelName: "The Net Ninja",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqM1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "4.4K",
    uploadDate: "11 months ago",
    videoTitle: "Introduction to TypeScript"
  },
  {
    src: "https://www.youtube.com/embed/bcde6789?si=pqr901",
    channelName: "Programming with Mosh",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqM1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "6.1K",
    uploadDate: "1 year ago",
    videoTitle: "Complete Guide to Git"
  },
  {
    src: "https://www.youtube.com/embed/efgh5678?si=stu234",
    channelName: "TechLead",
    channelPictureUrl: "https://yt3.ggpht.com/ytc/AGIKgqM1J4hN4l7Xr3Z9Z9t2G3GfZ8s8Y4tK1Yt=s88-c-k-c0x00ffffff-no-rj",
    views: "8.9K",
    uploadDate: "1 year ago",
    videoTitle: "Mastering Algorithms"
  }
];
const youtubeSrc = [
  {
    src: "https://www.youtube.com/embed/VNRdRlHsr2k?si=Ts-v0o_PQjXP596m",
    channelName:"Sean Allen",
    channelPictureUrl:"https://yt3.ggpht.com/0ptQnS5MbaDueJWrdGxbF3vvRRIuPbpeQeI0XbxI7LEMJejTHSpEs0EuoW_-GdctW2YeZa4T=s88-c-k-c0x00ffffff-no-rj",
    views:"2.7K",
    uploadDate:"1 day ago",
    videoTitle:"SwiftUI - Reorder a List (2 Ways)"
  }
,
    {
      src: "https://www.youtube.com/embed/5qap5aO4i9A",
      channelName: "Lo-Fi Girl",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "50M",
      uploadDate: "2 years ago",
      videoTitle: "lofi hip hop radio - beats to relax/study to"
    },
    {
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      channelName: "Rick Astley",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "1.2B",
      uploadDate: "14 years ago",
      videoTitle: "Rick Astley - Never Gonna Give You Up (Official Music Video)"
    },
    {
      src: "https://www.youtube.com/embed/IcrbM1l_BoI",
      channelName: "The Chainsmokers",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "1.7B",
      uploadDate: "7 years ago",
      videoTitle: "The Chainsmokers - Closer (Lyric) ft. Halsey"
    },
    {
      src: "https://www.youtube.com/embed/8UVNT4wvIGY",
      channelName: "Gotye",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "1.9B",
      uploadDate: "12 years ago",
      videoTitle: "Gotye - Somebody That I Used To Know (feat. Kimbra) [Official Music Video]"
    },
    {
      src: "https://www.youtube.com/embed/CevxZvSJLk8",
      channelName: "Katy Perry",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "3.6B",
      uploadDate: "9 years ago",
      videoTitle: "Katy Perry - Roar (Official)"
    },
    {
      src: "https://www.youtube.com/embed/JGwWNGJdvx8",
      channelName: "Ed Sheeran",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "5.6B",
      uploadDate: "7 years ago",
      videoTitle: "Ed Sheeran - Shape of You [Official Video]"
    },
    {
      src: "https://www.youtube.com/embed/09R8_2nJtjg",
      channelName: "Maroon 5",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "3.7B",
      uploadDate: "6 years ago",
      videoTitle: "Maroon 5 - Sugar (Official Music Video)"
    },
    {
      src: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      channelName: "PSY",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "4.6B",
      uploadDate: "11 years ago",
      videoTitle: "PSY - GANGNAM STYLE(강남스타일) M/V"
    },
    {
      src: "https://www.youtube.com/embed/tVj0ZTS4WF4",
      channelName: "Mark Ronson",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "4.3B",
      uploadDate: "8 years ago",
      videoTitle: "Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars"
    },
    {
      src: "https://www.youtube.com/embed/60ItHLz5WEA",
      channelName: "Alan Walker",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "3.3B",
      uploadDate: "8 years ago",
      videoTitle: "Alan Walker - Faded"
    },
    {
      src: "https://www.youtube.com/embed/LsoLEjrDogU",
      channelName: "Luis Fonsi",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "8.4B",
      uploadDate: "7 years ago",
      videoTitle: "Luis Fonsi - Despacito ft. Daddy Yankee"
    },
    {
      src: "https://www.youtube.com/embed/YQHsXMglC9A",
      channelName: "Adele",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "3.6B",
      uploadDate: "9 years ago",
      videoTitle: "Adele - Hello"
    },
    {
      src: "https://www.youtube.com/embed/eVTXPUF4Oz4",
      channelName: "Linkin Park",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "1.6B",
      uploadDate: "13 years ago",
      videoTitle: "Linkin Park - Numb (Official Video)"
    },
    {
      src: "https://www.youtube.com/embed/pRpeEdMmmQ0",
      channelName: "Shakira",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "3.5B",
      uploadDate: "14 years ago",
      videoTitle: "Shakira - Waka Waka (This Time for Africa) (The Official 2010 FIFA World Cup™ Song)"
    },
    {
      src: "https://www.youtube.com/embed/NUsoVlDFqZg",
      channelName: "Justin Timberlake",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "1.4B",
      uploadDate: "8 years ago",
      videoTitle: "Justin Timberlake - Can't Stop The Feeling! (Official Video)"
    },
    {
      src: "https://www.youtube.com/embed/9bZkp7q19f0",
      channelName: "PSY",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "4.6B",
      uploadDate: "11 years ago",
      videoTitle: "PSY - GANGNAM STYLE(강남스타일) M/V"
    },
    {
      src: "https://www.youtube.com/embed/6Dh-RL__uN4",
      channelName: "Marshmello",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "2.3B",
      uploadDate: "7 years ago",
      videoTitle: "Marshmello - Alone (Official Music Video)"
    },
    {
      src: "https://www.youtube.com/embed/OPf0YbXqDm0",
      channelName: "Mark Ronson",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "4.3B",
      uploadDate: "8 years ago",
      videoTitle: "Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars"
    },
    {
      src: "https://www.youtube.com/embed/k2qgadSvNyU",
      channelName: "Drake",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "1.9B",
      uploadDate: "5 years ago",
      videoTitle: "Drake - God's Plan"
    },
    {
      src: "https://www.youtube.com/embed/PT2_F-1esPk",
      channelName: "Halsey",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "622M",
      uploadDate: "3 years ago",
      videoTitle: "Halsey - Without Me"
    },
    {
      src: "https://www.youtube.com/embed/VbfpW0pbvaU",
      channelName: "Wiz Khalifa",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "6B",
      uploadDate: "9 years ago",
      videoTitle: "Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack"
    },
    {
      src: "https://www.youtube.com/embed/YVkUvmDQ3HY",
      channelName: "Eminem",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "1.9B",
      uploadDate: "13 years ago",
      videoTitle: "Eminem - Without Me (Official Music Video)"
    },
    {
      src: "https://www.youtube.com/embed/7wtfhZwyrcc",
      channelName: "Imagine Dragons",
      channelPictureUrl: "https://your-channel-picture-url.com",
      views: "1.6B",
      uploadDate: "7 years ago",
      videoTitle: "Imagine Dragons - Believer (Official Music Video)"
    },
  ]
  
