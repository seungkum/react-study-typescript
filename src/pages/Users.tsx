import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { usersStore } from "../stores/usersStore";

function Users(props: {}) {
    const usersState = usersStore((state) => state);
    const user = usersState.user;
    const users = usersState.users;
    console.log(user, users);

    const userForm = useForm({
        // defaultValues: { name: user.name, age: user.age },
        defaultValues: user,
    });
    const { register } = userForm;
    return (
        <div>
            <h3>Users</h3>
            <hr className='d-block' />
            <div>
                <h4>Read</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Modify</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>홍길동</td>
                            <td>20</td>
                            <td>
                                <Button variant='outlined'>update</Button>
                                <Button variant='contained'>delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr className='d-block' />
            <div>
                <h4>Create</h4>
                <TextField label='Name' variant='outlined' size='small' {...register("name")} />
                <TextField label='Age' variant='outlined' size='small' {...register("age")} />
                <Button variant='contained'>create</Button>
            </div>
        </div>
    );
}

export default Users;
