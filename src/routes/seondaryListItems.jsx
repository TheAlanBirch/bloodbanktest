import {ListItem, ListItemIcon, ListItemText, ListSubheader} from "@mui/material";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";

let SecondaryListItems = () => {
    return(<div>
        <ListSubheader inset>Extra Options</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <SettingsTwoToneIcon/>
            </ListItemIcon>
            <ListItemText primary="Settings"/>
        </ListItem>
    </div>)
}

export default SecondaryListItems;