import {Link, Navigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import AuthButton from "../AuthButton";
function SuperAdminNav({setActive}) {
    const [collapse,setCollapse]=useState(false);
    const [redirect,setRedirect]=useState(false);

    let mercadoraccount=null;
    if(localStorage.getItem('mercadoraccount')===null){
        mercadoraccount=false
    }
    else{
        mercadoraccount=JSON.parse(localStorage.getItem('mercadoraccount'))
    }


    useEffect(() => {
        getloggeduser()
    }, [mercadoraccount]);

    const getloggeduser = () =>{
        if(mercadoraccount){
            if(mercadoraccount[0]['role']==="superadmin"){
                setRedirect(false)
            }
            else{
                setRedirect(true)
            }
        }
        else{
            setRedirect(true)
        }

    }

    if(redirect){
        return <Navigate to='/login' />
    }
  return (
    <>
        <nav>
            <ul>
                <li className={`${setActive===''?"active":""}`}><Link to="/superadmin/dashboard">Market Place</Link></li>
            </ul>

            <ul class="menu">
                <li className={`${setActive===''?"active":""}`}><Link to="/superadmin/dashboard">Home</Link></li>
                <li className={`${setActive==='posts'?"active":""}`}><Link to="/superadmin/view_posts">Posts</Link></li>
                <li className={`${setActive==='clubs'?"active":""}`}><Link to="/superadmin/view_clubs">Clubs</Link></li>
                <li className={`${setActive==='students'?"active":""}`}><Link to="/superadmin/student_profile">Students</Link></li>
                <li className={`${setActive==='business'?"active":""}`}><Link to="/superadmin/businesses">Business</Link></li>
                <li className={`${setActive==='schools'?"active":""}`}><Link to="/superadmin/schools">Schools</Link></li>
{/*
                <li className={`${setActive==='queries'?"active":""}`}><Link to="/superadmin/queries">Queries</Link></li>
*/}
{/*
                <li className={`${setActive==='users'?"active":""}`}><Link to="/superadmin/users">Users</Link></li>
*/}
            </ul>

            <AuthButton />

            <ul className={`collapse ${collapse?"":"active"}`} onClick={e => (setCollapse(!collapse))}>
                <div class="bars"></div>
                <div class="bars"></div>
                <div class="bars"></div>
            </ul>

        </nav>

        <ul className={`menu-collapse ${collapse?"active":""}`} id="menu-collapse">
            <li className={`${setActive===''?"active":""}`}><Link to="/superadmin/dashboard">Home</Link></li>
            <li className={`${setActive==='posts'?"active":""}`}><Link to="/superadmin/view_posts">Posts</Link></li>
            <li className={`${setActive==='clubs'?"active":""}`}><Link to="/superadmin/view_clubs">Clubs</Link></li>
            <li className={`${setActive==='students'?"active":""}`}><Link to="/superadmin/student_profile">Students</Link></li>
            <li className={`${setActive==='business'?"active":""}`}><Link to="/superadmin/businesses">Business</Link></li>
            <li className={`${setActive==='schools'?"active":""}`}><Link to="/superadmin/schools">Schools</Link></li>
            <li className={`${setActive==='queries'?"active":""}`}><Link to="/superadmin/queries">Queries</Link></li>
            <li className={`${setActive==='users'?"active":""}`}><Link to="/superadmin/users">Users</Link></li>
        </ul>

    </>
  );
}

export default SuperAdminNav;
