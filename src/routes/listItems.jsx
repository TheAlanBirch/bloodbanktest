import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import PeopleTwoToneIcon from '@mui/icons-material/PeopleTwoTone';
import BloodtypeTwoToneIcon from '@mui/icons-material/BloodtypeTwoTone';
import {Link} from "react-router-dom";

let MainListItems = () => {
    return(<div>
        <ListItem value="/" to="/" component={Link} button>
            <ListItemIcon>
                <DashboardTwoToneIcon/>
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
        </ListItem>
        <ListItem value="/patients" to="/patients" component={Link} button>
            <ListItemIcon>
                <PeopleTwoToneIcon/>
            </ListItemIcon>
            <ListItemText primary="Patients"/>
        </ListItem>
        <ListItem value="/donors" to="/donors" component={Link} button>
            <ListItemIcon>
                <BloodtypeTwoToneIcon/>
            </ListItemIcon>
            <ListItemText primary="Donors"/>
        </ListItem>
    </div>
    );
}

export default MainListItems;