import { auth, currentUser } from "@clerk/nextjs/server";

const UserPanel = async () => {
    const authObject = await auth()
    const userObject = await currentUser()

    return ( <><h1>Пользователь</h1></> );
}
 
export default UserPanel;