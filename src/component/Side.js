import { Link, Outlet } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { ProSidebarProvider} from 'react-pro-sidebar'


const SideNav = () => {
    return ( 
      <>  
       <ProSidebarProvider>
            <Sidebar>
                <Menu>
                    <SubMenu label="Materi">
                    <SubMenu label="Git">
                        <MenuItem> <Link to="/GIT/Intro">  Intro </Link> </MenuItem>
                        <MenuItem> <Link to="/GIT/Fundamental"> Fundamental </Link> </MenuItem>
                        <MenuItem> <Link to="/GIT/Gui"> GUI </Link> </MenuItem>
                    </SubMenu>
                    <SubMenu label="FrontEnd">
                        <MenuItem> <Link to="/FrontEnd/Html"> HTML </Link></MenuItem>
                        <MenuItem> <Link to="/FrontEnd/Css"> CSS </Link> </MenuItem>
                        <MenuItem> <Link to="/FrontEnd/Bootstrap"> Bootstrap </Link></MenuItem>
                    </SubMenu>
                    <SubMenu label="JavaScript">
                        <MenuItem><Link to="/JavaScript/Function"> Structur Data </Link></MenuItem>
                        <MenuItem><Link to="/JavaScript/ControlFlow"> Control Flow </Link></MenuItem>
                        <MenuItem><Link to="/JavaScript/StructurData"> Function </Link></MenuItem>
                    </SubMenu>
                    </SubMenu>
                </Menu>
            </Sidebar>

        </ProSidebarProvider>
        {/* <Outlet/> */}
        </> 
     );
}
 
export default SideNav;


